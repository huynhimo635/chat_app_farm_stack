import { UserType } from '../entities'

export interface RegisterRequestType extends UserType {
  password: string
  password_confirm: string
  verified?: boolean
}

export interface LoginRequestType extends UserType {
  password: string
  email: string
}
