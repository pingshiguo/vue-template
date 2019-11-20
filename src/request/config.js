const isProd = process.env.NODE_ENV === 'production'

export const BASE_URL = isProd ? '/api' : '/api'

export const CHINA_URL = isProd ? '/static/lib/china.json' : '/static/lib/china.json'

export const SUCCESS_CODE = '1'

export const FAILURE_CODE = '-1'

export default {
  baseURL: BASE_URL,
  chinaURL: CHINA_URL
}
