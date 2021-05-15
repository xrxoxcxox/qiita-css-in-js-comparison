import { FC } from 'react'
import css from 'styled-jsx/css'

export const StyledJSXNavigation: FC = () => {
  return (
    <>
      <nav className="navigation">
        <a href="#" className="navigation__link">
          <span className="material-icons-round navigation__linkIcon">
            home
          </span>
          <span className="navigation__linkText">ホーム</span>
        </a>
        <a href="#" className="navigation__link">
          <span className="material-icons-round navigation__linkIcon">
            trending_up
          </span>
          <span className="navigation__linkText">トレンド</span>
        </a>
        <a href="#" className="navigation__link">
          <span className="material-icons-round navigation__linkIcon">
            notifications
          </span>
          <span className="navigation__linkText">通知</span>
        </a>
      </nav>
      <style jsx>{navigationStyle}</style>
    </>
  )
}

const navigationStyle = css`
  .navigation {
    align-self: start;
    display: flex;
    flex-direction: column;
    grid-area: navigation;
    position: sticky;
    top: 88px;
  }

  .navigation__link {
    border-radius: 2px;
    color: inherit;
    display: flex;
    padding: 8px;
    text-decoration: none;
    &:hover {
      background-color: #e0e0e0;
    }
    & + & {
      margin-top: 4px;
    }
  }

  .navigation__linkIcon {
    color: var(--color-dark-text-medium);
  }

  .navigation__linkText {
    font-weight: bold;
    margin-left: 8px;
  }
`
