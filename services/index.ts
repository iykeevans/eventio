import ky from 'ky'
import cookies from 'js-cookie'

export default ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    APIKey: process.env.NEXT_PUBLIC_API_KEY,
  },
  hooks: {
    afterResponse: [
      async (_request, _options, response) => {
        if (response.status == 401) {
          await ky.get('/api/logout')
          window.location.assign('/auth/sign-in')

          cookies.remove('authorization')
          cookies.remove('refresh-token')
          return
        }

        if (response.status == 403) {
          await ky.get('/api/logout')
          window.location.assign('/app-refresh')

          cookies.remove('authorization')
          return
        }
      },
    ],
  },
})
