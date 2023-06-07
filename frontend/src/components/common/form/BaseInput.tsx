import { ForwardedRef, forwardRef, useMemo } from 'react'
import { BaseInputProps } from './type'

function BaseInput(props: BaseInputProps, ref: ForwardedRef<HTMLInputElement> | undefined) {
  const {
    label,
    inputStyle: customStyle = '',
    icon: Icon,
    name = '',
    type = 'text',
    autoCompleteAsName = false,
    errorText = null,
    required = false,
    children,
    ...inputProps
  } = props

  // Generate styles for component
  const inputStyles = useMemo(() => {
    const baseStyle =
      'w-full rounded-lg bg-gray-200 pr-2 pl-12 py-3 text-sm border-2 border-solid outline-none duration-100 ease-linear transition-colors'

    console.log(errorText, !errorText)
    const borderStyle = !errorText
      ? 'border-gray-200 focus:border-primary-btn-color '
      : 'border-error-btn-color focus:border-error-btn-color'

    return `${baseStyle} ${customStyle} ${borderStyle}`
  }, [errorText])

  return (
    <div className='form-control'>
      {label && (
        <label htmlFor={name} className='text-sm font-bold capitalize'>
          {label} {required && <span className='text-red-500'>*</span>}
        </label>
      )}

      <div className='relative'>
        {Icon && (
          <span className='absolute left-2 top-1/2 -translate-y-1/2 rounded-lg bg-secondary-color p-2'>
            <Icon />
          </span>
        )}

        <input
          autoComplete={autoCompleteAsName ? name : ''}
          {...inputProps}
          ref={ref}
          name={name}
          type={type}
          id={name}
          className={inputStyles}
        />

        {/* Custom component */}
        {children}
      </div>

      <span className='pl-2 text-sm italic text-red-500'>{!!errorText && errorText}</span>
    </div>
  )
}

export default forwardRef(BaseInput)
