
export const apiPath = (path: string) => `${process.env.REACT_APP_API_URL}${path}`

export const getLoginEndpoint = () => '/auth/login'
export const getRegistrationEndpoint = () => '/auth/registration'
export const getLogoutEndpoint = () => '/auth/logout'
export const getRefreshEndpoint = () => '/auth/refresh'

export const getAvatar = (fileName: string) => apiPath(`/avatars/${fileName}`)
