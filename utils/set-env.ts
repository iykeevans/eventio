/**
 * Filter events by date using date-fns
 *
 * @param {String} filterOption
 * @returns {Object}
 */

export interface ISetEnv {
  apiKey: string
  apiUrl: string
}

const setEnv = (environment: string): ISetEnv => {
  if (environment === 'development') {
    return {
      apiKey: process.env.NEXT_PUBLIC_API_KEY_DEV || '',
      apiUrl: process.env.NEXT_PUBLIC_API_URL_DEV || '',
    }
  }

  return {
    apiKey: process.env.NEXT_PUBLIC_API_KEY_PROD || '',
    apiUrl: process.env.NEXT_PUBLIC_API_URL_PROD || '',
  }
}

export default setEnv
