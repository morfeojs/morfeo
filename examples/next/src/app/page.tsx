import { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Main } from '@/components/Main';
import { Link } from '@/components/Link';

export const metadata: Metadata = {
  title: 'Morfeo | NextJS',
  description: '',
  icons: {
    icon: ['/favicon.ico'],
  },
};

export default function Home() {
  return (
    <Main>
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
      <Link href="/another-page">Go to another page</Link>
    </Main>
  );
}
