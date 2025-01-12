import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import SidebarService from '@/components/layout/SidebarService';
import styles from '@/styles/pages/service/maintent.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Maintent() {
  const settings = {
    'dots': false, // 不顯示下方的導航點
    'infinite': true, // 無限循環
    'speed': 3500, // 切換速度 (毫秒)
    'slidesToShow': 2, // 每次顯示兩張圖片
    'slidesToScroll': 1, // 每次滾動一張圖片
    'autoplay': true, // 自動播放
    'autoplaySpeed': 0, // 無間隔自動播放
    'cssEase': 'linear', // 線性切換效果
  };

  // 圖片鏈結資料陣列
  const images = [
    '/service/maintent/1維修.jpg',
    '/service/maintent/154_0.jpg',
    '/service/maintent/24971_0.jpg',
    '/service/maintent/25016.jpg',
    '/service/maintent/25073.jpg',
    '/service/maintent/36515_0.jpg',
    '/service/maintent/173658.jpg',
    '/service/maintent/DSC00182.jpg',
    '/service/maintent/DSC01290.jpg',
    '/service/maintent/DSC01293.jpg',
    '/service/maintent/DSC07238.jpg',
    '/service/maintent/DSC07342.jpg',
    '/service/maintent/DSC07465.jpg',
    '/service/maintent/DSC07467.jpg',
    '/service/maintent/IMG_0048.jpg',
    '/service/maintent/IMG_3525.jpg',
    '/service/maintent/IMG20170915134904.jpg',
    '/service/maintent/LINE_ALBUM_2021-雅樂軒酒店（馬達軸承更換）_210916_36.jpg',
    '/service/maintent/LINE_ALBUM_2021-雅樂軒酒店（馬達軸承更換）_210916_84.jpg',
    '/service/maintent/LINE_ALBUM_2021-雅樂軒酒店（馬達軸承更換）_210916_85.jpg',
    '/service/maintent/LINE_ALBUM_2023118_231108_21.jpg',
    '/service/maintent/S__4816920.jpg',
    '/service/maintent/S__7086119.jpg',
    '/service/maintent/S__8732688.jpg',
    '/service/maintent/S__8732692.jpg',
    '/service/maintent/S__25534507.jpg',
    '/service/maintent/外側軸承安裝新品.jpg',
    '/service/maintent/皮帶輪對心1.jpg',
    '/service/maintent/舊填料拆除.jpg',
  ];

  return (
    <Layout>
      <div className={styles.container}>
        <SidebarService />
        <section className={styles.section}>
          <h1 className={styles.title}>保養維修/零件服務</h1>

          {/* 輪播圖 */}
          <div className={styles.carouselWrapper}>
            <Slider {...settings}>
              {images.map((src, index) => (
                <div key={index} className={styles.itemImage}>
                  <Image src={src} alt={`圖片 ${index + 1}`} width={800} height={400} style={{ 'objectFit': 'cover' }} />
                </div>
              ))}
            </Slider>
          </div>

          {/* Flex 圖片展示 */}
          <div className={styles.flexWrapper}>
            {images.map((src, index) => (
              <div key={index} className={styles.flexItem}>
                <Image src={src} alt={`縮圖 ${index + 1}`} layout="intrinsic" width={400} height={300} style={{ 'objectFit': 'cover' }} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}