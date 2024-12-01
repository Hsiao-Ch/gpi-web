import Image from "next/image";

import Layout from "@/components/layout/Layout";
import SidebarService from "@/components/layout/SidebarService";
import styles from "@/styles/pages/service/maintent.module.scss";

import maintent_1 from "@/public/service/maintent-1.webp";
import maintent_2 from "@/public/service/maintent-2.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Maintent() {
  return (
    <Layout>
      <div className={styles.container}>
        <SidebarService />
        <section className={styles.section}>
          <h1 className={styles.title}>保養維修</h1>
          <div className={styles.content}>
            <div className={styles.itemImage}>
              <p>冷卻水塔齒輪箱解決方案</p>
              <Image src={maintent_1} alt="" />
            </div>
            <div className={styles.itemImage}>
              <p>SPX 移動顯示拖車</p>
              <Image src={maintent_2} alt="" />
            </div>
          </div>
          <p className={styles.readMore}>
            <a
              href="https://spxcooling.com/marley-parts-service-facility/"
              target="_blank"
            >
              了解更多
              <IoIosArrowRoundForward />
            </a>
          </p>
        </section>
      </div>
    </Layout>
  );
}
