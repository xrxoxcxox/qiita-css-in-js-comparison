import { FC } from 'react'
import css from 'styled-jsx/css'

type Data = { title: string; url: string }[]

type Props = {
  dataset: Data
}

export const StyledJSXRanking: FC<Props> = ({ dataset }) => {
  return (
    <>
      <div className="ranking">
        <h2 className="ranking__headline">ランキング</h2>
        <ol className="ranking__list">
          {dataset.map((data) => (
            <li key={data.title} className="ranking__listItem">
              <a href={data.url} className="ranking__link">
                {data.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
      <style jsx>{rankingStyle}</style>
    </>
  )
}

const rankingStyle = css`
  .ranking {
    background-color: var(--color-surface);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  .ranking__headline {
    font-size: var(--font-size-subhead);
  }

  .ranking__list {
    padding-left: 28px;
  }

  .ranking__listItem {
    margin-top: 16px;
    &::marker {
      color: var(--color-dark-text-medium);
      font-weight: bold;
    }
  }

  .ranking__link {
    color: inherit;
    display: block;
    margin-left: 8px;
    text-decoration: none;
    &:hover {
      color: var(--color-primary-dark);
    }
  }
`
