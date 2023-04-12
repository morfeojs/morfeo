import { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Morfeo | NextJS',
  description: '',
  icons: {
    icon: ['/favicon.ico'],
  },
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Card direction="left">
        <Card direction="right">
          <Card direction="left">
            <Card direction="right">
              <Card direction="left">
                <Card direction="right">
                  <Button>Build time Morfeo is here!</Button>
                </Card>
              </Card>
            </Card>
          </Card>
        </Card>
      </Card>
    </main>
  );
}
