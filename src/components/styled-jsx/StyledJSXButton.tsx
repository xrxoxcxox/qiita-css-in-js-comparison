import { FC, ReactNode } from 'react'
import css from 'styled-jsx/css'

type InputProps = JSX.IntrinsicElements['button']
type Props = {
  children: ReactNode
  className?: string
  size: 'm' | 's'
  variant: 'fill' | 'border'
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void
} & InputProps

export const StyledJSXButton: FC<Props> = ({
  children,
  className,
  size,
  variant,
  onClick,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`button ${variant} ${size} ${className}`}
      >
        {children}
      </button>
      <style jsx>{buttonStyle}</style>
    </>
  )
}

const buttonStyle = css`
  .button {
    border-color: transparent;
    border-radius: 2px;
    border-style: solid;
    border-width: 1px;
    font-weight: bold;
    padding: 7px 15px;
  }

  .fill {
    background-color: var(--color-primary);
    color: var(--color-light-text-high);
    &:hover {
      background-color: var(--color-primary-dark);
    }
  }

  .border {
    border-color: var(--color-primary);
    color: var(--color-dark-text-medium);
    &:hover {
      background-color: var(--color-background);
      color: var(--color-dark-text-high);
    }
  }

  .m {
    font-size: var(--font-size-body1);
  }

  .s {
    font-size: var(--font-size-body3);
  }
`
