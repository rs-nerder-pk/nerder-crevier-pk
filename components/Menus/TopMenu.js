import Link from 'next/link';
import styles from './TopMenu.module.scss';
export default function TopMenu() {
  return (
    <nav>
      <ul className="flex text-blue">
        <li className={styles.Link}>
          <Link href="/">About Us</Link>
        </li>
        <li className={styles.Link}>
          <Link href="/">Careers</Link>
        </li>
        <li className={styles.Link}>
          <Link href="/">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
