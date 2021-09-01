import * as yup from 'yup'

export const loginSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Description has to be filled up'),
  password: yup.string().required('Description has to be filled up'),
})

export const newEventSchema = yup.object({
  title: yup.string().required('Description has to be filled up'),
  description: yup.string().required('Description has to be filled up'),
  date: yup.string().required('Description has to be filled up'),
  time: yup.string().required('Description has to be filled up'),
  capacity: yup.string().required('Description has to be filled up'),
})
