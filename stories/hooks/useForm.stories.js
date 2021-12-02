import useForm from '../../hooks/useForm'

export default {
  title: 'Hook/useForm',
}

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 1000)
  })
}

export const Default = () => {
  const { isLoading, errors, handleSubmit, handleChange } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await sleep()
      alert(JSON.stringify(values))
    },
    validate: ({ email, password }) => {
      if (!email) errors.email = 'input email'
      if (!password) errors.password = 'input password'
      if (!/^.+@.+\..+$/.test(email)) errors.email = 'input proper email style'
      return errors
    },
  })
  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign in</h1>
      <div>
        <input
          name="email"
          type="email"
          placeholder="email"
          onChange={handleChange}
        />
      </div>
      <div>{errors.email}</div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={handleChange}
        />
      </div>
      <div>{errors.password}</div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'loading...' : 'submit'}
      </button>
    </form>
  )
}
