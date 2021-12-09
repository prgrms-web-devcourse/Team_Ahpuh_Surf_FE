import { useState, useCallback } from 'react'

const useForm = ({ initialValues, onSubmit, validate }) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target
      setValues({ ...values, [name]: value })
    },
    [values],
  )

  const handleSubmit = async (e) => {
    // handleSubmit의 역할
    // 1. loading 값 바꾸기
    // 2.  validate를 만족하지 않으면 Errors 처리
    setIsLoading(true)
    e.preventDefault()
    const newErrors = validate(values)
    if (Object.keys(newErrors).length === 0) {
      await onSubmit()
    }
    setErrors(newErrors)

    setIsLoading(false)
  }

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  }
}

export default useForm
