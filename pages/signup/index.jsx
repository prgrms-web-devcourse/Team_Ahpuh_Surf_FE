import { ToastContainer, toast } from 'react-toastify'
import Cookies from 'js-cookie'
import { useForm } from 'hooks'
import { Input } from 'components/base'
import { checkForm } from 'utils/validation'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { signup, login } from 'utils/apis/user'
import { useRouter } from 'next/router'
import { setCookieTimes } from 'utils/common/setTime'
import { LOGIN_COOKIE, SIGNUP_COOKIE } from 'constants/environment'
import * as Style from 'styles/pageStyles/signUpStyle'

const Signup = () => {
  const router = useRouter()
  const { values, isLoading, errors, handleSubmit, handleChange } = useForm({
    initialValues: {
      email: '',
      userName: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: async () => {
      try {
        await signup({
          email: values.email,
          password: values.password,
          userName: values.userName,
        })

        const { data: user } = await login({
          email: values.email,
          password: values.password,
        })

        Cookies.set(LOGIN_COOKIE, JSON.stringify(user), {
          expires: 28,
          secure: true,
        })
        const date = setCookieTimes(1 * 3000)
        Cookies.set(SIGNUP_COOKIE, true, { expires: date })
        router.push('/')
      } catch (e) {
        toast.error(`${e.message} 🥲`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        })
      }
    },
    validate: ({ email, userName, password, passwordConfirm }) => {
      const newErrors = {}
      if (!email) newErrors.email = 'Enter the email'
      if (!userName) newErrors.userName = 'Enter the userName'
      if (!passwordConfirm)
        newErrors.passwordConfirm = 'Enter the password confirm'
      if (passwordConfirm !== password)
        newErrors.passwordConfirm = 'password is not correct'
      if (!checkForm(email, 'email'))
        newErrors.email = 'Enter proper email style'
      if (!checkForm(password, 'password'))
        newErrors.password =
          'At least 8 to 20 characters in a combination of numbers + alphabets + special characters.'
      return newErrors
    },
  })

  useEffect(() => {
    router.prefetch('/')
  }, [])

  const inputRef = useRef(null)

  return (
    <>
      <ToastContainer />
      <Style.FormWrapper>
        <form onSubmit={handleSubmit}>
          <Style.Heading>Signup</Style.Heading>
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
            <Style.Label htmlFor="userName" size={18}>
              userName
            </Style.Label>
            <Input
              id="userName"
              name="userName"
              type="string"
              width="100%"
              height={40}
              validate={errors?.userName}
              placeholder="userName"
              onChange={handleChange}
              maxLength={20}
            />
          </Style.InputWrapper>
          <Style.ErrorText>
            {errors.userName && errors.userName}
          </Style.ErrorText>
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
          <Style.ErrorText>
            {errors.password && errors.password}
          </Style.ErrorText>
          <Style.InputWrapper>
            <Style.Label htmlFor="passwordConfirm" size={18}>
              password confirm
            </Style.Label>
            <Input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              width="100%"
              height={40}
              validate={errors?.passwordConfirm}
              placeholder="password confirm"
              onChange={handleChange}
              maxLength={20}
            />
          </Style.InputWrapper>
          <Style.ErrorText>
            {errors.passwordConfirm && errors.passwordConfirm}
          </Style.ErrorText>
          <Style.Button type="submit" disabled={isLoading}>
            {isLoading ? 'loading...' : 'Signup'}
          </Style.Button>
        </form>
        <Style.LinkWrapper>
          Already a member?{' '}
          <Link href="/login" passHref>
            <Style.RedLink>Go to log in</Style.RedLink>
          </Link>
        </Style.LinkWrapper>
      </Style.FormWrapper>
    </>
  )
}

export default Signup
