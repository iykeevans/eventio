import * as yup from 'yup'

export const loginSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email has to be filled up'),
  password: yup.string().required('Password has to be filled up'),
})

export const newEventSchema = yup.object({
  title: yup.string().required('Title has to be filled up'),
  description: yup.string().required('Description has to be filled up'),
  date: yup
    .string()
    .required('Date has to be filled up')
    .matches(
      /^\d{2}([/])\d{2}\1\d{4}$/,
      'Invalid date format, e.g MM/DD/YYYY (10/10/2021)'
    )
    .test(
      'customValidateDate',
      'Invalid date',
      function (value: string | undefined) {
        return new Date(value || '').toString() !== 'Invalid Date'
      }
    )
    .test(
      'customValidateDateGreaterThanCurrentDate',
      'Date cannot be less than todays date',
      function (value: string | undefined) {
        return Date.parse(value || '') > Date.now()
      }
    ),
  time: yup
    .string()
    .required('Time has to be filled up')
    .matches(
      /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
      'Invalid time format, e.g HH:MM (23:59)'
    ),
  capacity: yup
    .number()
    .typeError('Capacity has to be a number')
    .required('Capacity has to be filled up'),
})
