import { IoIosArrowDropright } from 'react-icons/io';
import { useRouter } from 'next/router';

import { InfoLinkData } from '@/lib/data/infoData';
import styles from '@/styles/components/layout/sidebarInfo.module.scss';

export default function SidebarInfo() {
  const router = useRouter();

  return (
    <div className={styles.wrap}>
      <ul className={styles.linkItems}>
        {InfoLinkData.map((item, index) => (
          <li key={index} onClick={() => router.push(item.link)}>
            <p>{item.name}</p>
            <IoIosArrowDropright />
          </li>
        ))}
      </ul>
      <div className={styles.helpWrap}>
        <h2>聯絡我們</h2>
        <table>
          <tbody>
            <tr>
              <th>地址:</th>
              <td>新北市新莊區新北大道4段217號3樓</td>
            </tr>
            <tr>
              <th>電話:</th>
              <td>02-85213289</td>
            </tr>
            <tr>
              <th>傳真:</th>
              <td>02-81926810</td>
            </tr>
            <tr>
              <th>郵件:</th>
              <td><a href="mailto:gpi@greenpartners.com.tw">gpi@greenpartners.com.tw</a></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}