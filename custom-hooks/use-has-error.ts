interface IFormik {
  touched: any
  errors: any
}

const useHasError = (formik: IFormik, field: string): boolean => {
  const { touched, errors } = formik
  return touched[field] && errors[field] ? true : false
}

export default useHasError
