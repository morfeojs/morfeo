import { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Main } from '@/components/Main';
import { createUseStyle } from '@morfeo/css';
import { Link } from '@/components/Link';

export const metadata: Metadata = {
  title: 'Morfeo | NextJS',
  description: '',
};

const useStyle = createUseStyle({
  componentName: 'Card',
  p: 'm',
  my: 'xl',
});

export default function AnotherPage() {
  const { className, style } = useStyle();
  return (
    <Main>
      <div className={className} style={style}>
        <Button>Here is another page</Button>
      </div>
      <Link href="/">{'<- '}Go back</Link>
    </Main>
  );
}
