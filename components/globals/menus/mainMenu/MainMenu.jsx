import Link from 'next/link';
import styles from './MainMenu.module.scss';

export default function MainMenu() {
  return (
    <nav className={styles.Menu}>
      <ul className="flex divide-x divide-blue-400 uppercase">
        <li><Link href="/">Gift Cards</Link></li>
        <li>
          <Link href="/stations">Stations</Link>
        </li>
      </ul>
    </nav>
  );
}
