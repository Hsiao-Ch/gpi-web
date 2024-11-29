import Image from "next/image";
import { FaYoutube } from "react-icons/fa";

import Layout from "@/components/layout/Layout";
import SidebarService from "@/components/layout/SidebarService";
import styles from "@/styles/pages/service/tech.module.scss";

import pic from "@/public/award/pic.jpg";
import lakos_logo from "@/public/alliances/lakos_logo.png";
import spirotherm_logo from "@/public/alliances/spirotherm_logo.png";
import spx_logo from "@/public/alliances/spx_logo.png";
import walraven_logo from "@/public/alliances/walraven_logo.svg";

export default function Test() {
  return (
    <Layout>
      <div className={styles.container}>
        <SidebarService />
        <section className={styles.section}>
          <div className={styles.imgWrap}>
            <Image src={pic} alt={""} />
          </div>
          <h1 className={styles.title}>性能測量</h1>
          
        </section>
      </div>
    </Layout>
  );
}
