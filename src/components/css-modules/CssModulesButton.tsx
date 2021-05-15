import { FC, ReactNode } from 'react'
import styles from '../../styles/css-modules-button.module.scss'
import clsx from 'clsx'

type InputProps = JSX.IntrinsicElements['button']
type Props = {
  children: ReactNode
  className?: string
  size: 'm' | 's'
  variant: 'fill' | 'border'
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
} & InputProps

export const CssModulesButton: FC<Props> = ({
  children,
  className,
  size,
  variant,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.button, styles[variant], styles[size], className)}
    >
      {children}
    </button>
  )
}
