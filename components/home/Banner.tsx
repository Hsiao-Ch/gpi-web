import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner_1 from "@/public/banner/1.png";
import banner_2 from "@/public/banner/2.png";
import banner_3 from "@/public/banner/3.png";
import Image from "next/image";
import styles from "@/styles/components/home/banner.module.scss";
import Link from "next/link";

export default function Banner() {
  return (
    <div className={styles.section}>
      <Carousel
        showThumbs={false} // Remove the thumbnail previews
        infiniteLoop // Enables infinite looping
        autoPlay // Enables automatic sliding
        interval={5000} // Interval between slides
        stopOnHover // Stops autoPlay when the user hovers
        showArrows // Show next and previous arrows
        showStatus={false} // Remove slide status
      >
        <div className={styles.wrap}>
          <Link href="https://www.lakos.com/product/tcx-tci-towerclean/" target="_blank">
            <div className={styles.imageWrap}>
              <Image src={banner_1} alt={""} />
            </div>
          </Link>
        </div>
        <div className={styles.wrap}>
          <Link href="https://www.lakos.com/product/tbx-tbi-sidestreamclean/" target="_blank">
            <div className={styles.imageWrap}>
              <Image src={banner_2} alt={""} />
            </div>
          </Link>
        </div>
        <div className={styles.wrap}>
          <Link href="https://www.lakos.com/product/lakos-ilb-ils-separators/" target="_blank">
            <div className={styles.imageWrap}>
              <Image src={banner_3} alt={""} />
            </div>
          </Link>
        </div>
      </Carousel>
    </div>
  );
}
