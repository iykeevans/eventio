import ky from 'ky'
import setEnv, { ISetEnv } from '../utils/set-env'

const { apiKey, apiUrl }: ISetEnv = setEnv(process.env.NODE_ENV)

export default ky.create({
  prefixUrl: apiUrl,
  headers: {
    APIKey: apiKey,
  },
  hooks: {
    afterResponse: [
      async (_request, _options, response) => {
        if (response.status == 400) {
          localStorage.removeItem('token')
          localStorage.removeItem('refresh-token')
          return
        }

        if (response.status == 401) {
          window.location.assign('/auth/sign-in')

          localStorage.removeItem('token')
          localStorage.removeItem('refresh-token')
          return
        }

        if (response.status == 403) {
          window.location.assign('/app-refresh')

          localStorage.removeItem('token')
          return
        }
      },
    ],
  },
})
