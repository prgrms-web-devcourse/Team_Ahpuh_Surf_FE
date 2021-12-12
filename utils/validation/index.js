export const checkForm = (value, type) => {
  const regex = {
    email: /^.+@.+\..+$/,
    password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/,
    // 영문자, 특수문자, 숫자 조합으로 8 ~ 20
  }

  if (type === 'email') {
    return regex.email.test(value)
  }
  if (type === 'password') {
    return regex.password.test(value)
  }
  return false
}
