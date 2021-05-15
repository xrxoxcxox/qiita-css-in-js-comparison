import { FC } from 'react'
import { StyledJSXButton } from './StyledJSXButton'
import css from 'styled-jsx/css'

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
}

export const StyledJSXFeedItem: FC<Props> = ({ data }) => {
  const { thumbnail, date, title, favorites, comments, url } = data
  return (
    <>
      <article className="feedItem">
        {thumbnail && (
          <a href={url} className="feedItem__thumbnailWrapper">
            <img src={thumbnail} alt="" className="feedItem__thumbnail" />
          </a>
        )}
        <div className="feedItem__information">
          <a href={url} className="feedItem__link">
            <time dateTime={date} className="feedItem__postedAt">
              {date}
            </time>
            <h3 className="feedItem__title">{title}</h3>
          </a>
          <div className="feedItem__reactions">
            <span className="material-icons-round styles.feedItem__reactionIcon">
              favorite
            </span>
            <span className="feedItem__reactionCount">{favorites}</span>
            <span className="material-icons-round feedItem__reactionIcon">
              mode_comment
            </span>
            <span className="feedItem__reactionCount">{comments}</span>
            <StyledJSXButton
              size="s"
              variant="border"
              className={`feedItem__button ${className}`}
              onClick={() => alert(`「${title}」を保存`)}
            >
              保存
            </StyledJSXButton>
          </div>
        </div>
      </article>
      <style jsx>{feedItemStyle}</style>
      {styles}
    </>
  )
}

const feedItemStyle = css`
  .feedItem {
    background-color: var(--color-surface);
    border-radius: 4px;
    margin-top: 16px;
    overflow: hidden;
  }

  .feedItem__thumbnailWrapper {
    display: block;
    overflow: hidden;
    padding-top: 52.5%;
    position: relative;
  }

  .feedItem__thumbnail {
    height: auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }

  .feedItem__information {
    padding: 16px;
  }

  .feedItem__link {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: var(--color-primary-dark);
    }
  }

  .feedItem__postedAt {
    color: var(--color-dark-text-medium);
    display: block;
    font-size: var(--font-size-body3);
  }

  .feedItem__title {
    font-size: var(--font-size-headline);
    line-height: 1.25;
    margin-top: 8px;
  }

  .feedItem__reactions {
    align-items: center;
    display: flex;
    margin-top: 8px;
  }

  .feedItem__reactionIcon {
    color: var(--color-dark-text-medium);
    font-size: var(--font-size-body1);
  }

  .feedItem__reactionCount {
    font-size: var(--font-size-body2);
    margin-left: 8px;
    & + .feedItem__reactionIcon {
      margin-left: 24px;
    }
  }
`

const { className, styles } = css.resolve`
  .feedItem__button {
    margin-left: auto;
  }
`
