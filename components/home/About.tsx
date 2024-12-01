import Image from "next/image";
import styles from "@/styles/components/home/about.module.scss";

import lakos_logo from "@/public/alliances/lakos_logo.png";
import spirotherm_logo from "@/public/alliances/spirotherm_logo.png";
import spx_logo from "@/public/alliances/spx_logo.png";
import walraven_logo from "@/public/alliances/walraven_logo.svg";

export default function About() {
  return (
    <section className={styles.container}>
      <div className={styles.titleWrap}>
        <h2 className={styles.title}>關於我們</h2>
      </div>
      <div className={styles.wrap}>
        <div className={styles.itemImage}>
          <a href="https://spxcooling.com/" target="_blank">
            <Image src={spx_logo} alt={"spx_logo"} />
          </a>
        </div>
        <div className={styles.itemImage}>
          <a href="https://www.spirotech.com/" target="_blank">
            <Image src={spirotherm_logo} alt={"spirotherm_logo"} />
          </a>
        </div>
        <div className={`${styles.itemImage} ${styles.lakos}`}>
          <a href="https://www.lakos.com/" target="_blank">
            <Image src={lakos_logo} alt={"lakos_logo"} />
          </a>
        </div>
        <div className={`${styles.itemImage} ${styles.walraven}`}>
          <a href="https://www.walraven.com/us/" target="_blank">
            <Image src={walraven_logo} alt={"walraven_logo"} />
          </a>
        </div>
      </div>
    </section>
  );
}
