import type { NextPage, NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-iron-session'
import React, { useState, useEffect } from 'react'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import ky from 'ky'
import { loginSchema } from '../../utils/validateSchema'

import useHasError from '../../custom-hooks/use-has-error'
import withSession from '../../utils/session'

import PublicLayout from '../../components/layouts/public-layout'
import Input from '../../components/input-field'
import Flex from '../../components/styled/Flex'
import Text from '../../components/styled/Text'
import Box from '../../components/styled/Box'
import Button from '../../components/button'

type FormValues = {
  email: string
  password: string
}

const SignIn: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/')
  }, [])

  const [serverError, setServerError] = useState<boolean>(false)
  const initialValues: FormValues = { email: '', password: '' }

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (value: boolean) => void }
  ) => {
    try {
      await ky.post('/api/login', { json: values })
      router.push('/')
    } catch (err: any) {
      if (err?.message.includes('400')) {
        setServerError(true)
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <PublicLayout>
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
            validationSchema={loginSchema}
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
                    rounded="eventio.rounded-sm"
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
    </PublicLayout>
  )
}

interface IWithSessionArgs {
  req: NextApiRequest & {
    session: Session
  }
  res: NextApiResponse
}

export const getServerSideProps = withSession(async function ({
  req,
  res,
}: IWithSessionArgs) {
  const user = req.session.get('user')

  if (user) {
    res.setHeader('location', '/')
    res.statusCode = 302
    res.end()
    return { props: {} }
  }

  return {
    props: { props: {} },
  }
})

export default SignIn
