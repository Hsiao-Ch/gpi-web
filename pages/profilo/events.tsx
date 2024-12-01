import Image from "next/image";

import Layout from "@/components/layout/Layout";
import Sidebar from "@/components/layout/Sidebar";
import styles from "@/styles/pages/events.module.scss";
import pic from "@/public/activity/IMG_9097.jpg";

export default function Events() {
  return (
    <Layout>
      <div className={styles.container}>
        <Sidebar />
        <section className={styles.section}>
          <div className={styles.imgWrap}>
            <Image src={pic} alt={""} />
          </div>
          <h1 className={styles.title}>活動專區</h1>
          <p className={styles.intro}>即將推出</p>
          <div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
