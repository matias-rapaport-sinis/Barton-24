import Image from "next/image";
import styles from "./page.module.css";
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button variant="barton" >Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button>{' '}
        <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button>{' '}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
     </main>
     </div>
  );
}
