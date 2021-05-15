import { FC } from 'react'
import { CssModulesButton } from './CssModulesButton'
import styles from '../../styles/css-modules-feed-item.module.scss'
import clsx from 'clsx'

type Data = {
  thumbnail?: string
  date: string
  title: string
  favorites: number
  comments: number
  url: string
}

type Props = {
  data: Data
  className?: string
}

export const CssModulesFeedItem: FC<Props> = ({ data, className }) => {
  const { thumbnail, date, title, favorites, comments, url } = data
  return (
    <article className={clsx(styles.feedItem, className)}>
      {thumbnail && (
        <a href={url} className={styles.feedItem__thumbnailWrapper}>
          <img src={thumbnail} alt="" className={styles.feedItem__thumbnail} />
        </a>
      )}
      <div className={styles.feedItem__information}>
        <a href={url} className={styles.feedItem__link}>
          <time dateTime={date} className={styles.feedItem__postedAt}>
            {date}
          </time>
          <h3 className={styles.feedItem__title}>{title}</h3>
        </a>
        <div className={styles.feedItem__reactions}>
          <span
            className={clsx(
              'material-icons-round',
              styles.feedItem__reactionIcon
            )}
          >
            favorite
          </span>
          <span className={styles.feedItem__reactionCount}>{favorites}</span>
          <span
            className={clsx(
              'material-icons-round',
              styles.feedItem__reactionIcon
            )}
          >
            mode_comment
          </span>
          <span className={styles.feedItem__reactionCount}>{comments}</span>
          <CssModulesButton
            size="s"
            variant="border"
            className={styles.feedItem__button}
            onClick={() => alert(`「${title}」を保存`)}
          >
            保存
          </CssModulesButton>
        </div>
      </div>
    </article>
  )
}
