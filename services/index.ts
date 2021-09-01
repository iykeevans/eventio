import ky from 'ky'
import cookies from 'js-cookie'

export default ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    APIKey: process.env.NEXT_PUBLIC_API_KEY,
  },
  hooks: {
    afterResponse: [
      (_request, _options, response) => {
        if (response.status == 403) {
          console.log('we r fucked')
          // clear cookies here

          cookies.remove('authorization')
          window.location.assign('/app-refresh')
        }
      },
    ],
  },
})
