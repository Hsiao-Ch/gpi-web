import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner_2 from '@/public/banner/2.jpg';
import banner_3 from '@/public/banner/3.jpg';
import banner_4 from '@/public/banner/4.jpg';
import banner_5 from '@/public/banner/5.jpg';
import banner_6 from '@/public/banner/6.jpg';
import Image from 'next/image';
import styles from '@/styles/components/home/banner.module.scss';
import Link from 'next/link';

const banners = [banner_6, banner_2, banner_3, banner_4, banner_5];

export default function Banner() {
  const [, setCurrentIndex] = useState(0); // 当前轮播索引

  return (
    <div className={styles.section}>
      {/* 背景层 */}
      {/* <div
        className={styles.background}
        style={{
          backgroundImage: `url(${banners[currentIndex].src})`, // 动态更新背景图
        }}
      ></div> */}

      {/* 轮播层 */}
      <Carousel
        showThumbs={false} // 移除缩略图
        infiniteLoop // 无限循环
        autoPlay // 自动播放
        interval={3100} // 切换间隔
        stopOnHover={false} // 鼠标悬停时不暂停
        showArrows // 显示箭头
        showStatus={false} // 隐藏状态条
        onChange={index => setCurrentIndex(index)} // 监听索引变化
      >
        {banners.map((banner, idx) => (
          <div className={styles.wrap} key={idx}>
            <Link href="" target="_blank">
              <div className={styles.imageWrap}>
                <Image src={banner} alt={`banner-${idx + 1}`} />
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
}