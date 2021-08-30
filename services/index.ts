import ky from 'ky'

export default ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    APIKey: process.env.NEXT_PUBLIC_API_KEY,
  },
})
