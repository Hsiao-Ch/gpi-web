import Image from 'next/image';
import styles from '@/styles/components/home/about.module.scss';

import lakos_logo from '@/public/alliances/lakos_logo.png';
import spirotherm_logo from '@/public/alliances/spirotherm_logo.png';
import spx_logo from '@/public/alliances/spx_logo.png';
import walraven_logo from '@/public/alliances/walraven_logo.svg';

export default function About() {
  return (
    <section className={styles.container}>
      <div className={styles.titleWrap}>
        <h2 className={styles.title}>產品介紹</h2>
      </div>
      <div className={styles.wrap}>
        <div>
          <h2>冷卻水塔</h2>
          <a
            href="https://spxcooling.com/"
            target="_blank"
            className={styles.itemImage}
          >
            <Image src={spx_logo} alt={'spx_logo'} />
          </a>
        </div>
        <div>
          <h2>水系統節能裝置設備</h2>
          <a
            href="https://www.spirotech.com/"
            target="_blank"
            className={styles.itemImage}
          >
            <Image src={spirotherm_logo} alt={'spirotherm_logo'} />
          </a>
        </div>
        <div>
          <h2>水雜質處理</h2>
          <a
            href="https://www.lakos.com/"
            target="_blank"
            className={`${styles.itemImage} ${styles.lakos}`}
          >
            <Image src={lakos_logo} alt={'lakos_logo'} />
          </a>
        </div>
        <div>
          <h2>支架、安裝系統</h2>
          <a
            href="https://www.walraven.com/us/"
            target="_blank"
            className={`${styles.itemImage} ${styles.walraven}`}
          >
            <Image src={walraven_logo} alt={'walraven_logo'} />
          </a>
        </div>
      </div>
    </section>
  );
}