import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <section className={styles.body}>
      <header className={styles.header}>today's otenki</header>
      <body className={styles.main_body}>
        <section className={styles.main_top}>
          <div className={styles.map}>
            <img className={styles.map_body} src="/map-japan-silhouette.png" alt="dfgh" />
          </div>
        </section>
        <section>
          <div className={styles.result_flame}>
            <div className={styles.result}>
              <div className={styles.search_flame}>
                <form className={styles.search}>
                  <input type="text" placeholder="都道府県を入力" />
                  <input className={styles.button} type="submit" value="検索" />
                </form>
              </div>
              <div className={styles.unit}>
                <div className={styles.date}>13日</div>
                <div className={styles.time}>12:30</div>
              </div>
              <div className={styles.result_body}>🌥</div>
            </div>
          </div>
        </section>
      </body>
    </section>
  )
}
