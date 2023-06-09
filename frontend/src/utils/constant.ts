// Color pallette use for change color background,  hover border based in key
export const bgColorPallette = {
  primary: 'bg-primary-btn-color',
  secondary: 'bg-secondary-btn-color',
  info: 'bg-info-btn-color',
  warning: 'bg-warning-btn-color',
  success: 'bg-success-btn-color',
  error: 'bg-error-btn-color'
}

export const hoverBorderColorPallette = {
  primary: 'hover:border-primary-btn-color',
  secondary: 'hover:border-secondary-btn-color',
  info: 'hover:border-info-btn-color',
  warning: 'hover:border-warning-btn-color',
  success: 'hover:border-success-btn-color',
  error: 'hover:border-error-btn-color'
}

// Title, helpText info for login/register pages
export const loginPageInfo = {
  title: 'Hang out anytime, anywhere',
  helpText: 'Chat makes it easy and fun to stay close to your favorite people.'
}

export const registerPagePageInfo = {
  title: 'Hey, hello',
  helpText: 'Enter the information you entered while registering.'
}

export const HTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503
}

export const RESPONSE_STATUS = {
  SUCCESS: 'success',
  ERROR: 'error'
}

export const commonErrorMessages = {
  require: 'This field is required.',
  emailFormat: 'Invalid email address.',
  maxLength(number: number) {
    return `This field must be less than or equal ${number} characters`
  },
  minLength(number: number) {
    return `This field must be equal or greater than ${number} characters`
  }
}

// from https://github.com/facebook/create-react-app/issues/11951, it seems react had an issue with .env file
// So, I just fix it as string here and go back to change it later.
export const API_BASE_URL = 'http://localhost:8000/api/'
export const WS_BASE_URL = 'ws://localhost:8000'
