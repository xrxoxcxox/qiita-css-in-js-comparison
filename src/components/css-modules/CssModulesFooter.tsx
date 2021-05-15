import { FC } from 'react'
import styles from '../../styles/css-modules-footer.module.scss'
import clsx from 'clsx'

type Props = {
  className?: string
}

export const CssModulesFooter: FC<Props> = ({ className }) => {
  return (
    <footer className={clsx(styles.footer, className)}>
      <div className={styles.footer__links}>
        <a href="#" className={styles.footer__link}>
          ヘルプ
        </a>
        <a href="#" className={styles.footer__link}>
          利用規約
        </a>
        <a href="#" className={styles.footer__link}>
          プライバシーポリシー
        </a>
      </div>
      <small className={styles.footer__copyright}>©2021 Logotype</small>
    </footer>
  )
}
