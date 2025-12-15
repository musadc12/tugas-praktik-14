import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>
            Selamat Datang di <br />
            <span className={styles.gradientText}>Riyan Wardhana NextJS</span>
          </h1>
          <a
            href="https://riyanwardhana.vercel.app/"
            target="blank"
            className={styles.buttonPrimary}
          >
            Portfolio
          </a>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Web design</h2>
            <p>
              The most modern and high-quality design made at a professional
              level.
            </p>
          </div>
          <div className={styles.card}>
            <h2>Web development</h2>
            <p>High-quality development of sites at the professional level.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
