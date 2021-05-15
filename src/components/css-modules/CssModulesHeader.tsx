import { FC } from 'react'
import Image from 'next/image'
import { CssModulesButton } from './CssModulesButton'
import styles from '../../styles/css-modules-header.module.scss'

export const CssModulesHeader: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <h1 className={styles.header__logo}>
          <Image src="/logotype.svg" width={116} height={24} alt="Logotype" />
        </h1>
        <CssModulesButton
          size="m"
          variant="fill"
          className={styles.header__button}
          onClick={() => alert('新規作成')}
        >
          新規作成
        </CssModulesButton>
        <img
          src="https://source.unsplash.com/random/80x80"
          width="40"
          height="40"
          alt="User Icon"
          className={styles.header__icon}
        />
      </div>
    </header>
  )
}
