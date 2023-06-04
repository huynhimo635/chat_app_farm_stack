import { PropsWithChildren, ButtonHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

import { bgColorPallette, hoverBorderColorPallette } from '~/utils/constant'

interface Props extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'info' | 'warning' | 'success' | 'error'
  variant?: 'contained' | 'outlined'
  startIcon?: IconType
  endIcon?: IconType
}

const Button = ({
  variant = 'contained',
  color = 'primary',
  startIcon: StartIcon,
  endIcon: EndIcon,
  children,
  ...buttonProps
}: Props) => {
  const variantStyle =
    variant === 'contained'
      ? `font-semibold text-secondary-color ${bgColorPallette[color]} ease-linear hover:scale-x-105`
      : `border border-solid border-gray-200 ${hoverBorderColorPallette[color]} ease-linear`

  const buttonStyle = `w-full rounded-lg py-3 flex flex-row justify-center items-center duration-300 ${variantStyle}`

  return (
    <button className={buttonStyle} {...buttonProps}>
      {StartIcon && (
        <span className='pr-3'>
          <StartIcon />
        </span>
      )}

      <p>{children}</p>

      {EndIcon && (
        <span className='pl-3'>
          <EndIcon />
        </span>
      )}
    </button>
  )
}

export default Button
