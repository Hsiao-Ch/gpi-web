import { useState } from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import SidebarService from '@/components/layout/SidebarService';
import styles from '@/styles/pages/service/test.module.scss';
import { CiSaveDown1 } from 'react-icons/ci';

export default function Test() {
  const [selectedImage, setSelectedImage] = useState('冷卻塔性能比對量測作法');

  const imageFiles = {
    '冷卻塔性能比對量測作法': [
      '/service/test/冷卻塔性能比對量測作法/0001.jpg',
      '/service/test/冷卻塔性能比對量測作法/0002.jpg',
      '/service/test/冷卻塔性能比對量測作法/0003.jpg',
      '/service/test/冷卻塔性能比對量測作法/0004.jpg',
    ],
    '冷卻水塔性能量測報告': [
      '/service/test/冷卻水塔性能量測報告/0001.jpg',
      '/service/test/冷卻水塔性能量測報告/0002.jpg',
      '/service/test/冷卻水塔性能量測報告/0003.jpg',
    ],
  };

  const pdfFiles = {
    '冷卻塔性能比對量測作法': '/service/test/冷卻塔性能比對量測作法.pdf',
    '冷卻水塔性能量測報告': '/service/test/冷卻水塔性能量測報告20250107.pdf',
  };

  return (
    <Layout>
      <div className={styles.container}>
        <SidebarService />
        <section className={styles.section}>
          <div className={styles.buttonGroup}>
            {Object.keys(imageFiles).map(title => (
              <button
                key={title}
                className={selectedImage === title ?
                  styles.activeButton : styles.button}
                onClick={() => setSelectedImage(title)}
              >
                {title}
              </button>
            ))}
            <div className={styles.downloadButtonContainer}>
              <a href={pdfFiles[selectedImage]} download
                className={styles.downloadButton}>
                <CiSaveDown1 />
              </a>
            </div>
          </div>
          <div className={styles.imageContainer}>
            {imageFiles[selectedImage].map((src: any, index: number) => (
              <Image key={index} src={src} width={100} height={100} alt={`${selectedImage} ${index + 1}`} className={styles.image} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}