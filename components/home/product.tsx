import Image from "next/image";
import styles from "@/styles/components/home/product.module.scss";

import TCX_TCI from "@/public/products/spx/TCX_TCI.jpg";
import TBX_TBI from "@/public/products/spx/TBX_TBI.png";
import ILB_ILS from "@/public/products/spx/ILB_ILS.png";

export default function Product() {
  return (
    <section className={styles.container}>
      <div className={styles.titleWrap}>
        <h2 className={styles.title}>產品介紹</h2>
      </div>
      <div className={styles.wrap}>
        <div className={styles.itemImage}>
          <a href="/products" target="_blank">
            <Image src={TCX_TCI} alt={"TCX_TCI"} />
            <p>
              LAKOS TCX-TCI<br />冷卻水塔水池清潔過濾系統可去除 HVAC 開環和閉環中的細小固體（44微米及更大）。
              此成套系統減少了手動水池清潔、設備運作成本、維護成本和用水量。
            </p>
          </a>
        </div>
        <div className={styles.itemImage}>
          <a href="/products" target="_blank">
            <Image src={TBX_TBI} alt={"TBX_TBI"} />
            <p>TBX_TBI<br />高效能側流過濾系統可去除 HVAC 開環和閉環中的細小固體*（44 微米及更大）。
              此成套系統降低了設備運作成本、維護成本和用水量。在首選側流過濾的情況下，這是理想的選擇。
            </p>
          </a>
        </div>
        <div className={styles.itemImage}>
          <a href="/products" target="_blank">
            <Image src={ILB_ILS} alt={"ILB_ILS"} />
            <p> LAKOS ILB-ILS <br />離心分離器是從製程水/液體系統來源中去除沙子、砂礫和其他細小固體的熱門選擇，可去除高達 98% 的 74 微米及更大顆粒。
              當用於金屬刨花和鉛屑等較重固體時，您可以獲得更好的結果。
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
