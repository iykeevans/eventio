import type { NextPage } from 'next'
import { ReactNode, useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Public from '../../components/layouts/Public'
import Input from '../../components/Input'
import Flex from '../../components/Styled/Flex'
import Text from '../../components/Styled/Text'
import Box from '../../components/Styled/Box'
import Button from '../../components/Button'

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode
}

type FormValues = {
  email: string
  password: string
}

const SignIn: Page = () => {
  const [error, setError] = useState(false)

  const initialValues: FormValues = { email: '', password: '' }

  const hasError = (
    { touched, errors }: { touched: any; errors: any },
    field: string
  ): boolean => {
    return touched[field] && errors[field] ? true : false
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Description has to be filled up'),
    password: Yup.string().required('Description has to be filled up'),
  })

  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (value: boolean) => void }
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 400)
  }

  return (
    <Flex alignItems="center" justifyContent="center" height="screen">
      <Box widthMd="6/12" width="10/12">
        <Text
          as="h1"
          fontSize="2xl"
          fontSizeMd="2.5xl"
          align="center"
          alignMd="left"
          mt="0"
          mb="2"
          color="eventio.base"
        >
          Sign in to Eventio.
        </Text>

        {error ? (
          <Text
            as="h4"
            fontSize="sm"
            fontSizeMd="lg"
            align="center"
            alignMd="left"
            mt="0"
            mb="10"
            color="eventio.base-light-1"
          >
            Enter your details below.
          </Text>
        ) : (
          <Text
            as="h4"
            fontSize="sm"
            fontSizeMd="lg"
            align="center"
            alignMd="left"
            mt="0"
            mb="10"
            color="eventio.danger"
          >
            Oops! That email and pasword combination is not valid.
          </Text>
        )}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Flex as="form" direction="column" onSubmit={formik.handleSubmit}>
              <Input
                label="Email"
                type="email"
                {...formik.getFieldProps('email')}
                hasError={hasError(formik, 'email')}
              />

              {hasError(formik, 'email') && (
                <Text fontSize="sm" color="eventio.danger" mt="2.5">
                  {formik.errors.email}
                </Text>
              )}

              <Input
                label="Password"
                type="password"
                mt="7"
                {...formik.getFieldProps('password')}
                hasError={hasError(formik, 'password')}
              />

              {hasError(formik, 'password') && (
                <Text fontSize="sm" color="eventio.danger" mt="2.5">
                  {formik.errors.password}
                </Text>
              )}

              <Text
                as="span"
                fontSize="sm"
                align="center"
                alignMd="left"
                displayMd="none"
                mt="7"
                color="eventio.base-light-1"
              >
                Don’t have account?{' '}
                <Text
                  as="span"
                  fontSize="sm"
                  fontWeight="medium"
                  color="eventio.base-light"
                >
                  SIGN UP
                </Text>
              </Text>

              <Flex
                justifyContent="center"
                justifyContentMd="start"
                mt="10"
                mtMd="14"
              >
                <Button
                  label="SIGN IN"
                  variant="eventio.primary"
                  rounded="eventio.rounded"
                  size="lg"
                  loading={formik.isSubmitting}
                >
                  SIGN IN
                </Button>
              </Flex>
            </Flex>
          )}
        </Formik>
      </Box>
    </Flex>
  )
}

SignIn.getLayout = Public

export default SignIn
