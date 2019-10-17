const TOKEN_KEY = 'TOKEN'

export const getToken = () => sessionStorage.getItem(TOKEN_KEY)

export const setToken = token => sessionStorage.setItem(TOKEN_KEY, token)

export const removeToken = () => sessionStorage.removeItem(TOKEN_KEY)
