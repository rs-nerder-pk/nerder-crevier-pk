import Button from "@/components/UI/Button";
import Gauge from "@/components/UI/icons/Gauge";
import Link from "next/link";
import styles from "./MainMenu.module.scss";

export default function MainMenu() {
  return (
    <nav className={styles.Menu}>
      <ul className="flex divide-x divide-blue-400 uppercase items-center">
        <li>
          <Link href="/fleet-cards">Fleet Cards</Link>
        </li>
        <li>
          <Link href="/gift-cards">Gift Cards</Link>
        </li>
        <li className="flex-1 flex justify-end">
          <Button
            href="/stations"
            size="sm"
            variant="tertiary"
            startIcon={<Gauge />}
          >
            Find a Service Station
          </Button>
        </li>
      </ul>
    </nav>
  );
}
