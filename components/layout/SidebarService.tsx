import { IoIosArrowDropright } from 'react-icons/io';
import { useRouter } from 'next/router';

import { ServiceLinkData } from '@/lib/data/infoData';
import styles from '@/styles/components/layout/sidebarInfo.module.scss';

export default function SidebarService() {
  const router = useRouter();

  return (
    <div className={styles.wrap}>
      <ul className={styles.linkItems}>
        {ServiceLinkData.map((item, index) => (
          <li key={index} onClick={() => router.push(item.link)}>
            <p>{item.name}</p>
            <IoIosArrowDropright />
          </li>
        ))}
      </ul>
    </div>
  );
}