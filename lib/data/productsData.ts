import { ProductsType } from "../types/productsType";
import TCX_TCI from "@/public/products/lakos/TCX_TCI.jpg";
import TBX_TBI from "@/public/products/lakos/TBX_TBI.png";
import ILB_ILS from "@/public/products/lakos/ILB_ILS.png";
import F400 from "@/public/products/spx/F400 工業型冷卻水塔.jpg";
import MCW from "@/public/products/spx/MCW 強吹式逆流模組型冷卻水塔.jpg";
import MHF from "@/public/products/spx/MHF 密閉式冷卻水塔.jpg";
import MD from "@/public/products/spx/MD 逆流模組型冷卻水塔.jpg";
import NC from "@/public/products/spx/NC 直交流模組型冷卻水塔.jpg";
import Clearsky from "@/public/products/spx/Clearsky.jpg";
import Everest from "@/public/products/spx/everest.jpg"
import spirotop_brass from "@/public/products/spirotech/spirotop_brass.jpg";
import SpiroVent_Steel_F from "@/public/products/spirotech/SpiroVent -Steel -F(PN16).jpg";
import SpiroVent_Superior from "@/public/products/spirotech/SpiroVent Superior S600 - 2,5-6 bar.jpg";
import SpiroExpand_EVSG from "@/public/products/spirotech/SpiroExpand EVSG Pressure expansion vessel with replaceable membrane.jpg";
import SpiroExpand_MultiControl from "@/public/products/spirotech/SpiroExpand MultiControl Kompakt DUO Twin.jpg";

export const productsData: ProductsType[] = [
  {
    spx: [
      {
        image: NC,
        alt: "NC 直交流模組型冷卻水塔",
        link: "https://spxcooling.com/video/marley-modular-f400-cooling-tower/",
      },
      {
        image: MD,
        alt: "MD 逆流模組型冷卻水塔",
        link: "https://www.lakos.com/product/lakos-ilb-ils-separators/",
      },
      {
        image: MHF,
        alt: "MHF 密閉式冷卻水塔",
        link: "https://spxcooling.com/video/marley-modular-f400-cooling-tower/",
      },
      {
        image: F400,
        alt: "F400 工業型冷卻水塔",
        link: "https://spxcooling.com/video/marley-modular-f400-cooling-tower/",
      },
      {
        image: MCW,
        alt: "MCW 強吹式逆流模組型冷卻水塔",
        link: "https://www.lakos.com/product/lakos-ilb-ils-separators/",
      },
      {
        image: Clearsky,
        alt: "CLEARSKY",
        link: "https://spxcooling.com/cooling-towers/marley-clearsky-plume-abatement/",
      },
      {
        image: Everest,
        alt: "MD EVEREST",
        link: "https://spxcooling.com/cooling-towers/marley-md-everest/",
      },
    ],
    spirptech: [
      {
        image: spirotop_brass,
        alt: "spirotop 釋氣閥",
        link: "https://www.spirotech.com/products/spirotop/spirotop--brass-105",
      },
      {
        image: SpiroVent_Steel_F,
        alt: "SpiroVent 微氣泡處理器",
        link: "https://www.spirotech.com/products/spirovent/spirovent--steel--fpn16-115",
      },
      {
        image: SpiroVent_Superior,
        alt: "SpiroVent Superior 微氣泡處理器(全真空脫氣機)",
        link: "https://www.spirotech.com/products/spirovent-superior/spirovent-superior-s600---2,5-6-bar-164",
      },
      {
        image: SpiroExpand_EVSG,
        alt: "SpiroExpand EVSG 膨脹水箱",
        link: "https://www.spirotech.com/products/spiroexpand-expansion-vessels/spiroexpand-evsg-pressure-expansion-vessel-with-replaceable-membrane-216",
      },
      // ====TODO====
      {
        image: SpiroExpand_MultiControl,
        alt: "Spiro Trap 雜質分離器",
        link: "https://www.spirotech.com/products/spiroexpand-pressurization/spiroexpand-multicontrol-kompakt-duo-twin-193",
      },
    ],
    lakos: [
      {
        image: TCX_TCI,
        alt: "TCX-TCI 塔清潔",
        link: "https://www.lakos.com/product/tcx-tci-towerclean/",
      },
      {
        image: TBX_TBI,
        alt: "TBX-TBI 分離器",
        link: "https://www.lakos.com/product/tbx-tbi-sidestreamclean/",
      },
      {
        image: ILB_ILS,
        alt: "ILB-ILS 分離器",
        link: "https://www.lakos.com/product/lakos-ilb-ils-separators/",
      },
    ],
    walraven: [
    ],
  },
];
