import { ProductsType } from '../types/productsType';
import TCX_TCI from '@/public/products/lakos/TCX_TCI.jpg';
import TBX_TBI from '@/public/products/lakos/TBX_TBI.png';
import ILB_ILS from '@/public/products/lakos/ILB_ILS.png';
import F400 from '@/public/products/spx/F400 工業型冷卻水塔.jpg';
import MHF from '@/public/products/spx/MHF 密閉式冷卻水塔.jpg';
import MD from '@/public/products/spx/MD 逆流模組型冷卻水塔.jpg';
import NC from '@/public/products/spx/NC 直交流模組型冷卻水塔.jpg';
import AV from '@/public/products/spx/AV 單面進風直交流冷卻水塔.jpg';
import Clearsky from '@/public/products/spx/Clearsky.jpg';
import Everest from '@/public/products/spx/everest.jpg';
import spirotop_brass from '@/public/products/spirotech/spirotop_brass.jpg';
import SpiroVent_Steel_F from '@/public/products/spirotech/SpiroVent -Steel -F(PN16).jpg';
import SpiroVent_Superior from '@/public/products/spirotech/SpiroVent Superior S600 - 2,5-6 bar.jpg';
import SpiroExpand_EVSG from '@/public/products/spirotech/SpiroExpand EVSG Pressure expansion vessel with replaceable membrane.jpg';
import spirotrap from '@/public/products/spirotech/spirotrap-雜質處理器.jpg';
import Walraven_1 from '@/public/products/walraven/成品及抗震支架.jpg';
import Walraven_2 from '@/public/products/walraven/建築安裝解決方案.jpg';

export const productsData: ProductsType[] = [
  {
    'spx': [
      {
        'image': NC,
        'alt': 'NC 直交流模組型冷卻水塔',
        'link': 'https://spxcooling.com/cooling-towers/marley-nc/',
      },
      {
        'image': MD,
        'alt': 'MD 逆流模組型冷卻水塔',
        'link': 'https://spxcooling.com/cooling-towers/marley-md/',
      },
      {
        'image': MHF,
        'alt': 'MHF 密閉式冷卻水塔',
        'link': 'https://spxcooling.com/evaporative-fluid-coolers/marley-mh-element-fluid-cooler/',
      },
      {
        'image': F400,
        'alt': 'F400 工業型冷卻水塔',
        'link': 'https://spxcooling.com/cooling-towers/marley-400-800md-unilite/',
      },
      {
        'image': Clearsky,
        'alt': 'CLEARSKY 消露節水冷卻水塔',
        'link': 'https://spxcooling.com/cooling-towers/marley-clearsky-plume-abatement/',
      },
      {
        'image': Everest,
        'alt': 'MD EVEREST 單機散熱 1227RT~3790RT 模組型水塔', //=====TODO
        'link': 'https://spxcooling.com/cooling-towers/marley-md-everest/',
      },
      {
        'image': AV,
        'alt': 'AV 單面進風直交流冷卻水塔',
        'link': 'https://spxcooling.com/cooling-towers/marley-av/',
      },
    ],
    'spirptech': [
      {
        'image': spirotop_brass,
        'alt': 'spirotop 釋氣閥',
        'link': 'https://www.spirotech.com/products/spirotop/spirotop--brass-105',
      },
      {
        'image': SpiroVent_Steel_F,
        'alt': 'SpiroVent 微氣泡處理器',
        'link': 'https://www.spirotech.com/products/spirovent/spirovent--steel--fpn16-115',
      },
      {
        'image': SpiroVent_Superior,
        'alt': 'SpiroVent Superior 微氣泡處理機(全真空脫氣機)',
        'link': 'https://www.spirotech.com/products/spirovent-superior/spirovent-superior-s600---2,5-6-bar-164',
      },
      {
        'image': SpiroExpand_EVSG,
        'alt': 'SpiroExpand EVSG 膨脹水箱',
        'link': 'https://www.spirotech.com/products/spiroexpand-expansion-vessels/spiroexpand-evsg-pressure-expansion-vessel-with-replaceable-membrane-216',
      },
      // ====TODO====
      {
        'image': spirotrap,
        'alt': 'Spiro Trap 雜質分離器',
        'link': 'https://www.spirotech.com/products/spirotrap/',
      },
    ],
    'lakos': [
      {
        'image': TCX_TCI,
        'alt': 'TCX-TCI 冷卻水塔清潔分離器',
        'link': 'https://www.lakos.com/product/tcx-tci-towerclean/',
      },
      {
        'image': TBX_TBI,
        'alt': 'TBX-TBI 旁流雜質分離器',
        'link': 'https://www.lakos.com/product/tbx-tbi-sidestreamclean/',
      },
      {
        'image': ILB_ILS,
        'alt': 'ILB-ILS 分離器',
        'link': 'https://www.lakos.com/product/lakos-ilb-ils-separators/',
      },
    ],
    'walraven': [
      {
        'image': Walraven_1,
        'alt': '成品及抗震支架',
        'link': 'https://www.walraven.com/en/rooftop/',
      },
      {
        'image': Walraven_2,
        'alt': '建築安裝解決方案',
        'link': 'https://www.walraven.com/en/how-to-guides/',
      },
    ],
  },
];