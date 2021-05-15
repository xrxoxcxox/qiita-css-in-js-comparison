import { FC } from 'react'
import styles from '../../styles/css-modules-navigation.module.scss'
import clsx from 'clsx'

type Props = {
  className?: string
}

export const CssModulesNavigation: FC<Props> = ({ className }) => {
  return (
    <nav className={className}>
      <a href="#" className={styles.navigation__link}>
        <span
          className={clsx('material-icons-round', styles.navigation__linkIcon)}
        >
          home
        </span>
        <span className={styles.navigation__linkText}>ホーム</span>
      </a>
      <a href="#" className={styles.navigation__link}>
        <span
          className={clsx('material-icons-round', styles.navigation__linkIcon)}
        >
          trending_up
        </span>
        <span className={styles.navigation__linkText}>トレンド</span>
      </a>
      <a href="#" className={styles.navigation__link}>
        <span
          className={clsx('material-icons-round', styles.navigation__linkIcon)}
        >
          notifications
        </span>
        <span className={styles.navigation__linkText}>通知</span>
      </a>
    </nav>
  )
}
