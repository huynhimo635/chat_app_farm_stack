import { InputHTMLAttributes, PropsWithChildren } from 'react'
import { IconType } from 'react-icons'

export interface BaseInputProps extends PropsWithChildren, InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType
  inputStyle?: string
}

export interface PassInputProps extends BaseInputProps {
  showHidePass?: boolean
}
