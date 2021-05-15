import { FC } from 'react'
import Head from 'next/head'
import { StyledJSXFeedItem } from '../components/styled-jsx/StyledJSXFeedItem'
import { StyledJSXFooter } from '../components/styled-jsx/StyledJSXFooter'
import { StyledJSXHeader } from '../components/styled-jsx/StyledJSXHeader'
import { StyledJSXNavigation } from '../components/styled-jsx/StyledJSXNavigation'
import { StyledJSXRanking } from '../components/styled-jsx/StyledJSXRanking'
import css from 'styled-jsx/css'
import feedItemsDataset from '../apis/dummy-feed-items.json'
import RankingDataset from '../apis/dummy-ranking.json'

const StyledJSX: FC = () => {
  return (
    <>
      <Head>
        <title>styled-jsx</title>
        <meta name="description" content="Styling with styled-jsx" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledJSXHeader />
      <div className="contents">
        <StyledJSXNavigation className={`navigation ${className}`} />
        <main className="main">
          <h2 className="main__headline">ホーム</h2>
          {feedItemsDataset.map((data) => (
            <StyledJSXFeedItem data={data} key={data.title} />
          ))}
        </main>
        <aside className="sidebar">
          <StyledJSXRanking dataset={RankingDataset} />
          <StyledJSXFooter className={`footer ${className}`} />
        </aside>
      </div>
      <style jsx>{pageStyles}</style>
      {styles}
    </>
  )
}

const pageStyles = css`
  .contents {
    display: grid;
    grid-column-gap: 16px;
    grid-template-areas: 'navigation navigation main main main main main main sidebar sidebar sidebar sidebar';
    grid-template-columns: repeat(12, minmax(48px, 80px));
    justify-content: center;
    padding: 24px 16px 48px;
  }

  .main {
    grid-area: main;
  }

  .main__headline {
    font-size: var(--font-size-subhead);
    font-weight: bold;
  }

  .sidebar {
    grid-area: sidebar;
  }
`

const { className, styles } = css.resolve`
  .navigation {
    align-self: start;
    display: flex;
    flex-direction: column;
    grid-area: navigation;
    position: sticky;
    top: 88px;
  }

  .footer {
    margin-top: 16px;
  }
`

export default StyledJSX
