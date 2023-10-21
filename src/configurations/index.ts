export const getNodeEnv = () => process.env.NODE_ENV
export const getApiBaseURL = () => process.env.REACT_APP_API_BASE_URL ?? 'http://localhost:3000/api/'