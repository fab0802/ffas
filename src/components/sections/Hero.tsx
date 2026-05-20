import Image from "next/image";
import Button from "@/components/ui/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <span aria-hidden="true" className={styles.watermark}>
        FFAS
      </span>

      <div className={styles.text}>
        <p className={styles.eyebrow}>
          Saison 2026 / 27 · Frauenfussball im Säuliamt
        </p>

        <h1 className={styles.title}>
          Das Spiel <em>gehört</em>
          <br />
          <span className={styles.stroke}>uns.</span> Punkt.
        </h1>

        <p className={styles.lead}>
          Eine Idee, fünf Vereine, ein Spielbetrieb. Wir bündeln Frauen­fussball
          im Säuliamt — aus Hausen, Mettmenstetten, Hedingen,
          Wettswil-Bonstetten und Uitikon. Für jede, die einen Ball treten will,
          von 6 bis 60.
        </p>

        <div className={styles.actions}>
          <Button href="#join" variant="primary">
            Mitspielen
          </Button>
          <Button href="#manifest" variant="ghost">
            Unsere Geschichte
          </Button>
        </div>
      </div>

      <div className={styles.logo}>
        <div className={styles.logoWrap}>
          <Image
            src="/ffas-logo.svg"
            alt=""
            width={460}
            height={460}
            priority
            sizes="(max-width: 880px) 280px, (max-width: 1200px) 360px, 460px"
            className={styles.logoImg}
          />
        </div>
      </div>
    </section>
  );
}
