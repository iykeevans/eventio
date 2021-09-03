import type { NextPage } from 'next'
import React from 'react'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { createEvent } from '../../services/events-api'

import PrivateLayout from '../../components/layouts/private-layout'
import Text from '../../components/styled/Text'
import Flex from '../../components/styled/Flex'
import Input from '../../components/input-field'
import Button from '../../components/button'

import { newEventSchema } from '../../utils/validateSchema'
import useHasError from '../../custom-hooks/use-has-error'

interface IFormValues {
  title: string
  description: string
  date: string
  time: string
  capacity: string
}

const NewEvent: NextPage = () => {
  const router = useRouter()

  const initialValues: IFormValues = {
    title: '',
    description: '',
    date: '',
    time: '',
    capacity: '',
  }

  const handleSubmit = async (
    values: IFormValues,
    { setSubmitting }: { setSubmitting: (value: boolean) => void }
  ) => {
    try {
      const { date, time, ...rest } = values
      const dateArray = date.split('/')
      const timeArray = time.split(':')
      await createEvent({
        ...rest,
        startsAt: `${dateArray[2]}-${dateArray[0]}-${dateArray[1]}T${timeArray[0]}:${timeArray[1]}:00.000Z`,
      })
      router.push('/')
    } catch (err: any) {
      console.log(err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <PrivateLayout>
      <Head>
        <title>Eventio - New Event</title>
      </Head>

      <Flex as="main" justifyContent="center" ptMd="20" pb="16">
        <Formik
          initialValues={initialValues}
          validationSchema={newEventSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Flex
              as="form"
              direction="column"
              bgColor="eventio.light"
              shadow="eventio.shadow"
              rounded="eventio.rounded"
              widthMd="4/12"
              width="11/12"
              pl="8"
              pr="8"
              pb="8"
              pt="8"
              onSubmit={formik.handleSubmit}
            >
              <Text
                as="h1"
                fontSize="2xl"
                fontSizeMd="2.5xl"
                align="center"
                mt="0"
                mb="1"
                color="eventio.base"
              >
                Create new event
              </Text>

              <Text
                as="h4"
                fontSize="sm"
                fontSizeMd="lg"
                align="center"
                mt="0"
                mb="7"
                color="eventio.base-light-1"
              >
                Enter your details below.
              </Text>

              <Input
                label="Title"
                {...formik.getFieldProps('title')}
                hasError={useHasError(formik, 'title')}
              />

              {useHasError(formik, 'title') && (
                <Text fontSize="sm" color="eventio.danger" mt="2.5">
                  {formik.errors.title}
                </Text>
              )}

              <Input
                label="Description"
                mt="5"
                {...formik.getFieldProps('description')}
                hasError={useHasError(formik, 'description')}
              />

              {useHasError(formik, 'description') && (
                <Text fontSize="sm" color="eventio.danger" mt="2.5">
                  {formik.errors.description}
                </Text>
              )}

              <Input
                label="Date"
                mt="5"
                {...formik.getFieldProps('date')}
                hasError={useHasError(formik, 'date')}
              />

              {useHasError(formik, 'date') && (
                <Text fontSize="sm" color="eventio.danger" mt="2.5">
                  {formik.errors.date}
                </Text>
              )}

              <Input
                label="Time"
                mt="5"
                {...formik.getFieldProps('time')}
                hasError={useHasError(formik, 'time')}
              />

              {useHasError(formik, 'time') && (
                <Text fontSize="sm" color="eventio.danger" mt="2.5">
                  {formik.errors.time}
                </Text>
              )}

              <Input
                label="Capacity"
                mt="5"
                {...formik.getFieldProps('capacity')}
                hasError={useHasError(formik, 'capacity')}
              />

              {useHasError(formik, 'capacity') && (
                <Text fontSize="sm" color="eventio.danger" mt="2.5">
                  {formik.errors.capacity}
                </Text>
              )}

              <Flex justifyContent="center" mt="6" mtMd="9">
                <Button
                  variant="eventio.primary"
                  size="lg"
                  rounded="eventio.rounded-sm"
                  loading={formik.isSubmitting}
                >
                  CREATE NEW EVENT
                </Button>
              </Flex>
            </Flex>
          )}
        </Formik>
      </Flex>
    </PrivateLayout>
  )
}

export default NewEvent
