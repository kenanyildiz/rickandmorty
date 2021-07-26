import {config} from "./config";

export function getBaseRequestParameters() {
  const API_URL = config.API_URL
  return {
    API_URL
  }
}

export function makeRequest (methods: string, query: string) {
  const { API_URL } = getBaseRequestParameters()
  const URL = `${API_URL}${methods}/?${query}`

  return fetch(URL)
    .then(response => {
      return response.json()
    })
    .then(response => {
      return response
    })
    .catch(error => {
      return error
    })
}
