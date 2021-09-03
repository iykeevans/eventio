import ky from 'ky'

export default ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    APIKey: process.env.NEXT_PUBLIC_API_KEY,
  },
  hooks: {
    afterResponse: [
      async (_request, _options, response) => {
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
