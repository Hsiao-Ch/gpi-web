import Image from 'next/image';
import { FaYoutube } from 'react-icons/fa';
import { CiLink } from 'react-icons/ci';

import Layout from '@/components/layout/Layout';
import SidebarService from '@/components/layout/SidebarService';
import styles from '@/styles/pages/service/tech.module.scss';

import lakos_logo from '@/public/alliances/lakos_logo.png';
import spirotech_logo from '@/public/alliances/spirotherm_logo.png';
import spx_logo from '@/public/alliances/spx_logo.png';
import walraven_logo from '@/public/alliances/walraven_logo.svg';
import Link from 'next/link';

export default function Tech() {
  return (
    <Layout>
      <div className={styles.container}>
        <SidebarService />
        <section className={styles.section}>
          <h1 className={styles.title}>技術諮詢</h1>
          <div className={styles.content}>
            <div className={styles.wrap}>
              <p><Link
                href={'https://spxcooling.com/cooling-towers/'}
                target="_blank"
              >
                <CiLink />
                SPX 什麼是冷卻水塔？
              </Link></p>
              <p><Link
                href={'https://spxcooling.com/water-calculator/'}
                target="_blank"
              >
                <CiLink />
                SPX 冷卻水塔用水計算？
              </Link></p>

              <p><Link
                href={'https://spiroselect.spirotech.com/home/air'}
                target="_blank"
              >
                <CiLink />
                Spirotech 系統排氣產品選型工具
              </Link></p>

              <p><Link
                href={'https://www.spirotech.com/pressurization'}
                target="_blank"
              >
                <CiLink />
                Spirotech 膨脹水箱造型
              </Link></p>
            </div>
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/4OsK9wFJ3Mo?si=MF0pETC2EAjULfFQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <h2>原廠影片</h2>
            <div className={styles.items}>
              <div className={styles.item}>
                <div className={styles.itemImage}>
                  <Image src={spx_logo} alt="spx_logo" />
                </div>
                <p>
                  <a
                    href="https://www.youtube.com/@spxcoolingtech"
                    target="_blank"
                  >
                    了解更多
                    <FaYoutube />
                  </a>
                </p>
              </div>
              <div className={styles.item}>
                <div className={styles.itemImage}>
                  <Image src={spirotech_logo} alt="spirotech_logo" />
                </div>
                <p>
                  <a
                    href="https://www.youtube.com/@SpirotechBV"
                    target="_blank"
                  >
                    了解更多
                    <FaYoutube />
                  </a>
                </p>
              </div>
              <div className={styles.item}>
                <div className={`${styles.itemImage} ${styles.lakos}`}>
                  <Image src={lakos_logo} alt="lakos_logo" />
                </div>
                <p>
                  <a
                    href="https://www.youtube.com/user/LakosFiltration"
                    target="_blank"
                  >
                    了解更多
                    <FaYoutube />
                  </a>
                </p>
              </div>
              <div className={styles.item}>
                <div className={`${styles.itemImage} ${styles.walraven}`}>
                  <Image src={walraven_logo} alt="walraven_logo" />
                </div>
                <p>
                  <a
                    href="https://www.youtube.com/@WalravenNL"
                    target="_blank"
                  >
                    了解更多
                    <FaYoutube />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}