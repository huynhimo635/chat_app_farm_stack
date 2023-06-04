import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  title: string
}

const Helmet = (props: Props) => {
  document.title = 'Chat App - ' + props.title

  return <>{props.children}</>
}

export default Helmet
