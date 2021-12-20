import { useForm } from 'hooks'
import { Input } from 'components/base'
import { checkForm } from 'utils/validation'
import Link from 'next/link'
import { useRef, useEffect } from 'react'
import * as Style from 'styles/pageStyles/signUpStyle'
import { login } from 'utils/apis/user'
import Cookies from 'js-cookie'
import { LOGIN_COOKIE } from 'constants/environment'
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()
  const inputRef = useRef(null)

  const { values, isLoading, errors, handleSubmit, handleChange } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async () => {
      try {
        const { data } = await login({
          email: values.email,
          password: values.password,
        })
        Cookies.set(LOGIN_COOKIE, JSON.stringify(data), {
          expires: 28,
          secure: true,
        })
        router.push('/')
      } catch (error) {
        console.error(error.message)
      }
    },
    validate: ({ email, password }) => {
      const newErrors = {}
      if (!email) newErrors.email = 'Enter the email'
      if (!checkForm(email, 'email'))
        newErrors.email = 'Enter proper email style'
      if (!password) newErrors.password = 'Enter the password'
      return newErrors
    },
  })

  useEffect(() => {
    if (
      Cookies.get(LOGIN_COOKIE) &&
      JSON.parse(Cookies.get(LOGIN_COOKIE))?.token
    ) {
      router.push('/')
    }
  }, [])

  return (
    <Style.FormWrapper>
      <Style.Form onSubmit={handleSubmit}>
        <Style.Heading>Login</Style.Heading>
        <Style.InputWrapper>
          <Style.Label htmlFor="email" size={18}>
            email
          </Style.Label>
          <Input
            ref={inputRef}
            id="email"
            name="email"
            type="email"
            width="100%"
            height={40}
            validate={errors?.email}
            placeholder="email"
            onChange={handleChange}
            maxLength={254}
          />
        </Style.InputWrapper>
        <Style.ErrorText>{errors.email && errors.email}</Style.ErrorText>

        <Style.InputWrapper>
          <Style.Label htmlFor="password" size={18}>
            password
          </Style.Label>
          <Input
            id="password"
            name="password"
            type="password"
            width="100%"
            height={40}
            validate={errors?.password}
            placeholder="password"
            onChange={handleChange}
            maxLength={20}
          />
        </Style.InputWrapper>
        <Style.ErrorText>{errors.password && errors.password}</Style.ErrorText>
        <Style.Button type="submit" disabled={isLoading}>
          {isLoading ? 'loading…' : 'Login'}
        </Style.Button>
      </Style.Form>
      <Style.LinkWrapper>
        Not a member?{' '}
        <Link href="/signup" passHref>
          <Style.RedLink>Go to sign up</Style.RedLink>
        </Link>
      </Style.LinkWrapper>
    </Style.FormWrapper>
  )
}

export default Login
