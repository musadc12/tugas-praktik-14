import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>
            WELCOME <br />
            <span className={styles.gradientText}>Musa HERE!!</span>
          </h1>
          <a
            href="https://musadcn.vercel.app/"
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
              HI EVERYONE.
            </p>
          </div>
          <div className={styles.card}>
            <h2>WEB KITA</h2>
            <p>JANGAN APA KALI BIAR GA APA KALI ITU NYA.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
