import Image from "next/image";

import Layout from "@/components/layout/Layout";
import SidebarService from "@/components/layout/SidebarService";
import styles from "@/styles/pages/service/test.module.scss";

import pic from "@/public/award/pic.jpg";
import WEB from "@/public/service/WEB 水塔公路運輸.jpg";

export default function Test() {
  return (
    <Layout>
      <div className={styles.container}>
        <SidebarService />
        <section className={styles.section}>
          <h1 className={styles.title}>性能測量</h1>
          <div className={styles.content}>
            <div className={styles.imageWrap}>
              <Image src={WEB} alt="WEB 水塔公路運輸" />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
