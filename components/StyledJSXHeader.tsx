import { FC } from 'react'
import Image from 'next/image'
import { StyledJSXButton } from './StyledJSXButton'
import css from 'styled-jsx/css'

export const StyledJSXHeader: FC = () => {
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <h1 className="header__logo">
            <Image src="/logotype.svg" width={116} height={24} alt="Logotype" />
          </h1>
          <StyledJSXButton
            size="m"
            variant="fill"
            className={`header__button ${className}`}
            onClick={() => alert('新規作成')}
          >
            新規作成
          </StyledJSXButton>
          <img
            src="https://source.unsplash.com/random/80x80"
            width="40"
            height="40"
            alt="User Icon"
            className="header__icon"
          />
        </div>
      </header>
      <style jsx>{headerStyle}</style>
      {styles}
    </>
  )
}

const headerStyle = css`
  .header {
    background-color: var(--color-surface);
    display: flex;
    justify-content: center;
    padding: 12px 16px;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .header__inner {
    align-items: center;
    display: flex;
    width: min(100%, var(--width-contents));
  }

  .header__logo {
    align-items: center;
    display: flex;
  }

  .header__icon {
    border-radius: 50%;
    margin-left: 24px;
  }

  .header__button {
    margin-left: auto;
  }
`

const { className, styles } = css.resolve`
  .header__button {
    margin-left: auto;
  }
`
