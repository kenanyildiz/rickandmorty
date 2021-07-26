export interface IError {
  state: boolean,
  msg: string
}

export interface IInfo {
  pages: number,
  count: number
}

interface IOrigin {
  name: string,
  url: string
}

interface ILocation {
  name: string,
  url: string
}

export interface ICharacter {
  created?: string
  id?: number,
  name?: string,
  status?: string,
  type?: string,
  gender?: string,
  url?: string,
  species?: string,
  origin?: IOrigin,
  location?: ILocation,
  image: string,
  episode?: string[],
}

export interface ITheme {
  Alive: string,
  Dead: string,
  unknown: string,
}

