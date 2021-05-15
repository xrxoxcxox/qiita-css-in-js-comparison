import { FC } from 'react'
import css from 'styled-jsx/css'

export const StyledJSXFooter: FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__links">
          <a href="#" className="footer__link">
            ヘルプ
          </a>
          <a href="#" className="footer__link">
            利用規約
          </a>
          <a href="#" className="footer__link">
            プライバシーポリシー
          </a>
        </div>
        <small className="footer__copyright">©2021 Logotype</small>
      </footer>
      <style jsx>{footerStyle}</style>
    </>
  )
}

const footerStyle = css`
  .footer {
    color: var(--color-dark-text-medium);
    font-size: var(--font-size-body2);
    margin-top: 16px;
  }

  .footer__links {
    display: flex;
    flex-wrap: wrap;
  }

  .footer__link {
    color: inherit;
    margin-right: 16px;
    text-decoration: none;
    &:hover {
      color: var(--color-dark-text-high);
    }
  }

  .footer__copyright {
    display: block;
    margin-top: 8px;
  }
`
