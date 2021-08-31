import type { NextPage } from 'next'
import { ReactNode, useState } from 'react'
import { Formik } from 'formik'
import ky from 'ky'
import * as yup from 'yup'

import { loginUser } from '../../services/auth-api'
import { useAuth } from '../../store/auth-context'
import { ACTIONS } from '../../enums/constants'

import useUser from '../../custom-hooks/use-user'
import useHasError from '../../custom-hooks/use-has-error'
import withSession from '../../utils/session'
// import useValidationSchema from '../../custom-hooks/use-validation-schema'

import Public from '../../components/layouts/Public'
import Input from '../../components/Input'
import Flex from '../../components/Styled/Flex'
import Text from '../../components/Styled/Text'
import Box from '../../components/Styled/Box'
import Button from '../../components/Button'
import router from 'next/router'

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode
}

type FormValues = {
  email: string
  password: string
}

const SignIn: Page = () => {
  const [serverError, setServerError] = useState(false)
  const initialValues: FormValues = { email: '', password: '' }
  const validationSchema = () =>
    yup.object({
      email: yup
        .string()
        .email('Invalid email address')
        .required('Description has to be filled up'),
      password: yup.string().required('Description has to be filled up'),
    })

  // here we just check if user is already logged in and redirect to profile
  // const { mutateUser } = useUser({
  //   redirectTo: '/',
  //   redirectIfFound: true,
  // })

  const { dispatch } = useAuth()

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (value: boolean) => void }
  ) => {
    try {
      await ky.post('/api/login', { json: values })
      router.push('/')
    } catch (err) {
      // console.log('==------->>', err.message.includes('400'))
      if (err.message.includes('400')) {
        setServerError(true)
      }
    } finally {
      setSubmitting(false)
    }
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

        {!serverError ? (
          <Text
            as="p"
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
            as="p"
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
          validationSchema={validationSchema()}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Flex as="form" direction="column" onSubmit={formik.handleSubmit}>
              <Input
                label="Email"
                type="email"
                {...formik.getFieldProps('email')}
                hasError={serverError || useHasError(formik, 'email')}
              />

              {useHasError(formik, 'email') && (
                <Text fontSize="sm" color="eventio.danger" mt="2.5">
                  {formik.errors.email}
                </Text>
              )}

              <Input
                label="Password"
                type="password"
                mt="7"
                {...formik.getFieldProps('password')}
                hasError={serverError || useHasError(formik, 'password')}
              />

              {useHasError(formik, 'password') && (
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

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get('user')

  if (user) {
    res.setHeader('location', '/')
    res.statusCode = 302
    res.end()
    return { props: {} }
  }

  return {
    props: { user: req.session.get('user') || null },
  }
})

export default SignIn
