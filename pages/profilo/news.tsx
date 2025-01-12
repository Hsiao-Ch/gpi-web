import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import styles from '@/styles/pages/service/maintent.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Sidebar from '@/components/layout/Sidebar';

export default function News() {
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
    '/about/activity/31486.jpg',
    '/about/activity/34819_0.jpg',
    '/about/activity/2021722_210726_7.jpg',
    '/about/activity/53615582_2257675351186976_7107340245384822784_n.png',
    '/about/activity/D7B2AA03-483E-4809-B698-D096B3E80DEE.jpg',
    '/about/activity/IMAG1028.jpg',
    '/about/activity/IMAG1100.jpg',
    '/about/activity/IMAG1126.jpg',
    '/about/activity/IMG_0299.jpg',
    '/about/activity/IMG_0309.jpg',
    '/about/activity/IMG_0314.jpg',
    '/about/activity/IMG_0535 上水塔運輸.jpg',
    '/about/activity/IMG_0544 上水塔吊運.jpg',
    '/about/activity/IMG_0580.jpg',
    '/about/activity/IMG_0584 上水塔吊運.jpg',
    '/about/activity/IMG_0593 上水塔吊運.jpg',
    '/about/activity/IMG_0599 上水塔吊運.jpg',
    '/about/activity/IMG_0651 上水塔吊運.jpg',
    '/about/activity/IMG_3234.jpg',
    '/about/activity/IMG_3295.jpg',
    '/about/activity/IMG_3362.jpg',
    '/about/activity/IMG_3388.jpg',
    '/about/activity/IMG_5333.jpg',
    '/about/activity/IMG_5444.jpg',
    '/about/activity/IMG_5456.jpg',
    '/about/activity/IMG_5537.jpg',
    '/about/activity/IMG_5598.jpg',
    '/about/activity/IMG_5809.jpg',
    '/about/activity/IMG_5838.jpg',
    '/about/activity/IMG_5946.jpg',
    '/about/activity/IMG_7646.jpg',
    '/about/activity/IMG_7696.jpg',
    '/about/activity/IMG_7699.jpg',
    '/about/activity/IMG_7719.jpg',
    '/about/activity/IMG_7804.jpg',
    '/about/activity/IMG_7809.jpg',
    '/about/activity/IMG_7833.jpg',
    '/about/activity/IMG_7921.jpg',
    '/about/activity/IMG_8001.jpg',
    '/about/activity/IMG_8296 No1~9.jpg',
    '/about/activity/IMG_9059 FRP修補.jpg',
    '/about/activity/IMG20170919172024.jpg',
    '/about/activity/IMG20170923103234.jpg',
    '/about/activity/LINE_ALBUM_925_210928_7.jpg',
    '/about/activity/LINE_ALBUM_2022823_220914_126.jpg',
    '/about/activity/LINE_ALBUM_2022823_220914_134.jpg',
    '/about/activity/R0014045.jpg',
    '/about/activity/R0014439.jpg',
    '/about/activity/R0014952.jpg',
    '/about/activity/R0015066.jpg',
    '/about/activity/R0015323.jpg',
    '/about/activity/S__3129347.jpg',
    '/about/activity/S__4816906.jpg',
    '/about/activity/S__5120009.jpg',
    '/about/activity/S__5357620.jpg',
    '/about/activity/S__5529605.jpg',
    '/about/activity/S__13344792.jpg',
    '/about/activity/S__17989641.jpg',
    '/about/activity/S__22773772.jpg',
    '/about/activity/S__24518678_0.jpg',
    '/about/activity/S__24952864.jpg',
    '/about/activity/S__28278847_0.jpg',
    '/about/activity/S__28303393_0.jpg',
    '/about/activity/S__28467204_0.jpg',
    '/about/activity/S__28680230_0.jpg',
    '/about/activity/S__29343760_0.jpg',
    '/about/activity/S__29736970_0.jpg',
    '/about/activity/S__30195800_0.jpg',
    '/about/activity/S__30597139_0.jpg',
    '/about/activity/S__31342618.jpg',
    '/about/activity/S__33456191_0.jpg',
    '/about/activity/S__39993370.jpg',
    '/about/activity/S__40099842.jpg',
    '/about/activity/S__40173576.jpg',
    '/about/activity/S__40247342.jpg',
    '/about/activity/S__42049650.jpg',
  ];

  return (
    <Layout>
      <div className={styles.container}>
        <Sidebar />
        <section className={styles.section}>
          <h1 className={styles.title}>我們做過什麼</h1>
          {/* 輪播圖 */}
          <div className={styles.carouselWrapper}>
            <Slider {...settings}>
              {images.map((src, index) => (
                <div key={index} className={styles.itemImage}>
                  <Image
                    src={src}
                    alt={`圖片 ${index + 1}`}
                    width={800}
                    height={400}
                    style={{ 'objectFit': 'cover' }}
                  />
                </div>
              ))}
            </Slider>
          </div>
          {/* Flex 圖片展示 */}
          <div className={styles.flexWrapper}>
            {images.map((src, index) => (
              <div key={index} className={styles.flexItem}>
                <Image
                  src={src}
                  alt={`縮圖 ${index + 1}`}
                  layout="intrinsic"
                  width={400}
                  height={300}
                  style={{ 'objectFit': 'cover' }}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}