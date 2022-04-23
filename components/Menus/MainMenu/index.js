import styles from './MainMenu.module.scss';
export default function MainMenu() {
  return (
    <nav className={styles.Menu}>
      <ul className="flex divide-x divide-blue-400">
        <li>Aviation</li>
        <li>Petroleum</li>
        <li>Fleet Cards</li>
        <li>Gift Cards</li>
        <li>Find A Station</li>
      </ul>
    </nav>
  );
}
