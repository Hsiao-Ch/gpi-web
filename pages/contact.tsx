import Image from 'next/image';

import ContactInfo from '@/components/common/ContactInfo';
import Layout from '@/components/layout/Layout';
import SidebarInfo from '@/components/layout/SidebarInfo';
import styles from '@/styles/pages/contact.module.scss';

import esg from '@/public/contact/ESG LOGO.jpg';

export default function ContactUs() {
  return (
    <Layout>
      <div className={styles.container}>
        <SidebarInfo />
        <section className={styles.section}>
          <h1 className={styles.title}>聯絡我們</h1>
          <div className={styles.imageWrap}>
            <Image src={esg} alt="ESG LOGO" />
          </div>
          <div className={styles.wrap}>
            <ContactInfo />
          </div>
        </section>
      </div>
    </Layout>
  );
}