import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SidebarService from '@/components/layout/SidebarService';
import styles from '@/styles/pages/service/test.module.scss';

export default function Test() {
  const [selectedPdf, setSelectedPdf] = useState('冷卻塔性能比對量測作法');

  const pdfFiles = {
    '冷卻塔性能比對量測作法': '/service/test/冷卻塔性能比對量測作法.pdf',
    '冷卻水塔性能量測報告20250107':
      '/service/test/冷卻水塔性能量測報告20250107.pdf',
  };

  return (
    <Layout>
      <div className={styles.container}>
        <SidebarService />
        <section className={styles.section}>
          <div className={styles.buttonGroup}>
            {Object.keys(pdfFiles).map(title => (
              <button
                key={title}
                className={
                  selectedPdf === title ? styles.activeButton : styles.button
                }
                onClick={() => setSelectedPdf(title)}
              >
                {title}
              </button>
            ))}
          </div>
          <embed
            src={pdfFiles[selectedPdf]}
            type="application/pdf"
            width="100%"
            height="900px"
          />
        </section>
      </div>
    </Layout>
  );
}