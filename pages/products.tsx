import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { FaLink, FaSearch } from "react-icons/fa";

import Layout from "@/components/layout/Layout";
import Modal from "@/components/common/Modal"; // 导入新建的 Modal 组件
import styles from "@/styles/pages/products.module.scss";
import { productsData } from "@/lib/data/productsData";

import lakos_logo from "@/public/alliances/lakos_logo.png";
import spirotherm_logo from "@/public/alliances/spirotherm_logo.png";
import spx_logo from "@/public/alliances/spx_logo.png";
import walraven_logo from "@/public/alliances/walraven_logo.svg";

export default function Products() {
  const spxLength = productsData[0].spx.length;
  const spirptechLength = productsData[0].spirptech.length;
  const lokesLength = productsData[0].lakos.length;
  const walravenLenght = productsData[0].walraven.length;
  const sum = spxLength + spirptechLength + lokesLength + walravenLenght;

  const [page, setPage] = useState("ALL");
  const [total, setTotal] = useState<number>(sum);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalAltText, setModalAltText] = useState("");

  const [spxIsShow, setSpxIsShow] = useState(true);
  const [spirptechIsShow, setSpirptechIsShow] = useState(true);
  const [lakosIsShow, setLakosIsShow] = useState(true);
  const [waltravenIsShow, setWaltravenIsShow] = useState(true);

  const handleClick = (type: string) => {
    setPage(type);
    if (type === "SPX") {
      setSpxIsShow(true);
      setSpirptechIsShow(false);
      setLakosIsShow(false);
      setWaltravenIsShow(false);
      setTotal(spxLength);
    } else if (type === "SPIRPTECH") {
      setSpxIsShow(false);
      setSpirptechIsShow(true);
      setLakosIsShow(false);
      setWaltravenIsShow(false);
      setTotal(spirptechLength);
    } else if (type === "LAKOS") {
      setSpxIsShow(false);
      setSpirptechIsShow(false);
      setLakosIsShow(true);
      setWaltravenIsShow(false);
      setTotal(lokesLength);
    } else if (type === "WALTRAVEN") {
      setSpxIsShow(false);
      setSpirptechIsShow(false);
      setLakosIsShow(false);
      setWaltravenIsShow(true);
      setTotal(walravenLenght);
    } else {
      setSpxIsShow(true);
      setSpirptechIsShow(true);
      setLakosIsShow(true);
      setWaltravenIsShow(true);
      setTotal(spxLength + spirptechLength + lokesLength + walravenLenght);
    }
  };

  const openModal = (imageSrc: string | StaticImageData, altText: string) => {
    const imageSrcString =
      typeof imageSrc === "string" ? imageSrc : imageSrc.src;
    setModalImageSrc(imageSrcString);
    setModalAltText(altText);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
    setModalAltText("");
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <p>分類</p>
          <button
            onClick={() => handleClick("ALL")}
            className={page == "ALL" ? styles.active : ""}
          >
            全部<span>({sum})</span>
          </button>
          <button
            onClick={() => handleClick("SPX")}
            className={page == "SPX" ? styles.active : ""}
          >
            Spx<span>({spxLength})</span>
          </button>
          <button
            onClick={() => handleClick("SPIRPTECH")}
            className={page == "SPIRPTECH" ? styles.active : ""}
          >
            Spirptech<span>({spirptechLength})</span>
          </button>
          <button
            onClick={() => handleClick("LAKOS")}
            className={page == "LAKOS" ? styles.active : ""}
          >
            Lakos<span>({lokesLength})</span>
          </button>
          <button
            onClick={() => handleClick("WALTRAVEN")}
            className={page == "WALTRAVEN" ? styles.active : ""}
          >
            Waltraven<span>({walravenLenght})</span>
          </button>
        </div>
        <section>
          <p>共 {total} 筆</p>
          {productsData.map((item, index) => (
            <div key={index}>
              {spxIsShow && (
                <>
                  <div className={styles.wrap}>
                    <div
                      className={styles.logoWrap}
                      onClick={() =>
                        (window.location.href = "https://spxcooling.com/", "_blank")
                      }
                    >
                      <Image src={spx_logo} alt="spx_logo" />
                    </div>
                    <p>
                      SPX是一家領先的全系列、全方位服務的冷卻水塔和風冷熱交換器製造商。
                      SPX 冷卻技術公司的組成公司成立於
                      100多年前，在製程冷卻、工業、冷凍和 HVAC
                      市場擁有250多項全球專利。
                      我們在全球擁有150多個辦事處、子公司和合作夥伴，擁有為客戶提供解決方案所需的全球影響力和在地服務。
                    </p>
                  </div>
                  <div className={styles.itemWrap}>
                    {item.spx.map((spxItem, spxIndex) => (
                      <div key={spxIndex} className={styles.item}>
                        <div className={styles.itemImage}>
                          <Image src={spxItem.image} alt={spxItem.alt} />
                        </div>
                        <p className={styles.name}>{spxItem.alt}</p>
                        <a
                          href={spxItem.link}
                          className={styles.readMore}
                          target="_blank"
                        >
                          閱讀更多
                        </a>
                        <div className={styles.mask}>
                          <p
                            className={styles.link}
                            onClick={() => window.open(spxItem.link, "_blank")}
                          >
                            <FaLink />
                          </p>
                          <p
                            className={styles.link}
                            onClick={() =>
                              openModal(spxItem.image, spxItem.alt)
                            }
                          >
                            <FaSearch />
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {spirptechIsShow && (
                <>
                  <div className={styles.wrap}>
                    <div
                      className={styles.logoWrap}
                      onClick={() =>
                        (window.location.href = "https://www.spirotech.com/")
                      }
                    >
                      <Image src={spirotherm_logo} alt="spirotherm_logo" />
                    </div>
                    <p>
                      SPIROTECH開發了可靠的標準和客製化解決方案，透過幫助節省能源、提高舒適度、減少磨損以及最大限度地延長供暖或製冷系統的正常運行時間來提高性能並保護投資。
                    </p>
                  </div>
                  <div className={styles.itemWrap}>
                    {item.spirptech.map((spirptechItem, spirptechIndex) => (
                      <div key={spirptechIndex} className={styles.item}>
                        <div className={styles.itemImage}>
                          <Image
                            src={spirptechItem.image}
                            alt={spirptechItem.alt}
                          />
                        </div>
                        <p className={styles.name}>{spirptechItem.alt}</p>
                        <a
                          href={spirptechItem.link}
                          className={styles.readMore}
                          target="_blank"
                        >
                          閱讀更多
                        </a>
                        <div className={styles.mask}>
                          <p
                            className={styles.link}
                            onClick={() => window.open(spirptechItem.link, "_blank")}
                          >
                            <FaLink />
                          </p>
                          <p
                            className={styles.link}
                            onClick={() =>
                              openModal(spirptechItem.image, spirptechItem.alt)
                            }
                          >
                            <FaSearch />
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {lakosIsShow && (
                <>
                  <div className={styles.wrap}>
                    <div
                      className={`${styles.logoWrap} ${styles.lakosLogo}`}
                      onClick={() =>
                        (window.location.href = "https://www.lakos.com/")
                      }
                    >
                      <Image src={lakos_logo} alt="lakos_logo" />
                    </div>
                    <p>
                      自 1972 年以來，LAKOS Filtration（原名 Claude Laval
                      Corporation）一直採用創新、可靠的解決方案解決客戶複雜的水過濾問題。我們的產品解決了全球工業製造、暖通空調、食品加工、農業、市政和其他應用的問題。
                      <br />
                      <br />
                      LAKOS在以下方面發揮關鍵作用：
                      <br />
                      1. 將水質提高到指定的 TSS 和微米等級
                      <br />
                      2. 減少濾網更換和維護的頻率
                      <br />
                      3. 保持設備和製程設計效率
                    </p>
                  </div>
                  <div className={styles.itemWrap}>
                    {item.lakos.map((lakosItem, lakosIndex) => (
                      <div key={lakosIndex} className={styles.item}>
                        <div className={styles.itemImage}>
                          <Image src={lakosItem.image} alt={lakosItem.alt} />
                        </div>
                        <p className={styles.name}>{lakosItem.alt}</p>
                        <a
                          href={lakosItem.link}
                          className={styles.readMore}
                          target="_blank"
                        >
                          閱讀更多
                        </a>
                        <div className={styles.mask}>
                          <p
                            className={styles.link}
                            onClick={() => window.open(lakosItem.link, "_blank")}
                          >
                            <FaLink />
                          </p>
                          <p
                            className={styles.link}
                            onClick={() =>
                              openModal(lakosItem.image, lakosItem.alt)
                            }
                          >
                            <FaSearch />
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {waltravenIsShow && (
                <>
                  <div className={styles.wrap}>
                    <div
                      className={`${styles.logoWrap} ${styles.walravenLogo}`}
                      onClick={() =>
                        (window.location.href = "https://www.walraven.com/us/")
                      }
                    >
                      <Image src={walraven_logo} alt="walraven_logo" />
                    </div>
                    <p>
                      Walraven 成立於 1942 年。如今，75 年過去了，我們已成為一家活躍於全球安裝產業的公司，仍然致力於開發簡單且智慧的產品系統。
                      憑藉我們廣泛的產品範圍和專家建議，我們可以為任何專案提供完整的解決方案，無論專案有多大或多複雜。
                      <br />
                      <br />
                      與我們所使用的一些大型專案相比，我們的產品很小，但正是這些小部件才能發揮重要作用。
                      如果產品經過深思熟慮、高效製造並及時供應，它們可以節省時間、節省金錢、增加耐用性並使安裝人員的生活變得更加輕鬆！
                    </p>
                  </div>
                  <div className={styles.itemWrap}>
                    {item.walraven.map((walravenItem, walravenIndex) => (
                      <div key={walravenIndex} className={styles.item}>
                        <div className={styles.itemImage}>
                          <Image
                            src={walravenItem.image}
                            alt={walravenItem.alt}
                          />
                        </div>
                        <p className={styles.name}>{walravenItem.alt}</p>
                        <a
                          href={walravenItem.link}
                          className={styles.readMore}
                          target="_blank"
                        >
                          閱讀更多
                        </a>
                        <div className={styles.mask}>
                          <p
                            className={styles.link}
                            onClick={() => window.open(walravenItem.link, "_blank")}
                          >
                            <FaLink />
                          </p>
                          <p
                            className={styles.link}
                            onClick={() =>
                              openModal(walravenItem.image, walravenItem.alt)
                            }
                          >
                            <FaSearch />
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </section>

        <Modal
          imageSrc={modalImageSrc}
          altText={modalAltText}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </Layout>
  );
}
