import { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Main } from '@/components/Main';
import { morfeo } from '@morfeo/css';
import { Link } from '@/components/Link';

export const metadata: Metadata = {
  title: 'Morfeo | NextJS',
  description: '',
};

const Card = morfeo.component('Card', {
  p: 'm',
  my: 'xl',
});

export default function AnotherPage() {
  return (
    <Main>
      <Card>
        <Button>Here is another page</Button>
      </Card>
      <Link href="/">{'<- '}Go back</Link>
    </Main>
  );
}
