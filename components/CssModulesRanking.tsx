import { FC } from 'react'
import styles from '../styles/css-modules-ranking.module.scss'

type Data = { title: string; url: string }[]

type Props = {
  dataset: Data
}

export const CssModulesRanking: FC<Props> = ({ dataset }) => {
  return (
    <div className={styles.ranking}>
      <h2 className={styles.ranking__headline}>ランキング</h2>
      <ol className={styles.ranking__list}>
        {dataset.map((data) => (
          <li key={data.title} className={styles.ranking__listItem}>
            <a href={data.url} className={styles.ranking__link}>
              {data.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  )
}
