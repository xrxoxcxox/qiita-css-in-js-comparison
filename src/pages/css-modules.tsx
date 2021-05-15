import { FC } from 'react'
import Head from 'next/head'
import { CssModulesFeedItem } from '../components/css-modules/CssModulesFeedItem'
import { CssModulesFooter } from '../components/css-modules/CssModulesFooter'
import { CssModulesHeader } from '../components/css-modules/CssModulesHeader'
import { CssModulesNavigation } from '../components/css-modules/CssModulesNavigation'
import { CssModulesRanking } from '../components/css-modules/CssModulesRanking'
import styles from '../styles/css-modules.module.scss'
import feedItemsDataset from '../apis/dummy-feed-items.json'
import RankingDataset from '../apis/dummy-ranking.json'

const CSSModules: FC = () => {
  return (
    <>
      <Head>
        <title>CSS Modules</title>
        <meta name="description" content="Styling with CSS Modules" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssModulesHeader />
      <div className={styles.contents}>
        <CssModulesNavigation className={styles.navigation} />
        <main className={styles.main}>
          <h2 className={styles.main__headline}>ホーム</h2>
          {feedItemsDataset.map((data) => (
            <CssModulesFeedItem data={data} key={data.title} />
          ))}
        </main>
        <aside className={styles.sidebar}>
          <CssModulesRanking dataset={RankingDataset} />
          <CssModulesFooter />
        </aside>
      </div>
    </>
  )
}

export default CSSModules
