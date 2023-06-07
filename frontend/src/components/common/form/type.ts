import { InputHTMLAttributes, PropsWithChildren } from 'react'
import { IconType } from 'react-icons'

export interface BaseInputProps extends PropsWithChildren, InputHTMLAttributes<HTMLInputElement> {
  autoCompleteAsName?: boolean // use for login/register form
  label?: string
  icon?: IconType
  inputStyle?: string
  errorText?: string | null
}

export interface PassInputProps extends BaseInputProps {
  showHidePass?: boolean
}
