import { useCurrentTheme } from '@morfeo/react';
import {
  Box,
  Main,
  Footer,
  Header,
  Page,
  Section,
  Container,
  Typography,
  Hr,
  Grid,
  Card,
  Button,
  List,
  Input,
  Label,
  InputFeedback,
  Checkbox,
  CheckboxLabel,
  CheckboxContainer,
  InputContainer,
} from './components';
import { GroupButtonContainer } from './components/Forms/GroupButtonContainer';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from './components/Table';

import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('typescript', typescript);
hljs.highlightAll();

const Comps = () => {
  const [currentTheme, setCurrentTheme] = useCurrentTheme();
  const themeSymbol = currentTheme === 'light' ? '☼' : '☽';

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Page>
      <Header variant="fixed">
        <Box style={{ mr: 'xs' }}>
          <Button
            variant="round"
            style={{ fontSize: 'xl' }}
            onClick={toggleTheme}
          >
            {themeSymbol}
          </Button>
        </Box>
      </Header>
      <Main>
        <Section variant="quarter.primary" />
        <Section>
          <Container>
            <Box style={{ pb: 'l' }}>
              <Typography variant="h1">Welcome to morfeo</Typography>
              <Typography variant="h5">
                And its own preset-default component library
              </Typography>
            </Box>
            <Box>
              <Typography variant="p">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est:
                <List>
                  <List variant="item.outlinedBullet">Neque porro</List>
                  <List variant="item.outlinedBullet">qui dolorem</List>
                  <List variant="item.outlinedBullet">quia dolor</List>
                </List>
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </Typography>
              <Typography variant="blockQuote">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta.
              </Typography>
              <Hr />
              <Typography variant="h2">Est qui pro quo</Typography>
              <Typography variant="p">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur?
              </Typography>
              <pre>
                <Typography className="language-typescript" variant="code">
                  import morfeo from '@morfeo/core';
                </Typography>
              </pre>
              <Typography variant="p3">
                *Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium
              </Typography>
            </Box>
          </Container>
        </Section>
        <Section>
          <Container>
            <Typography variant="h2">Grid...</Typography>
            <Typography variant="h6">
              ...grid items, cards and a lot of buttons
            </Typography>
            <Box style={{ height: 'l' }} />
          </Container>
          <Container variant="gridGutter">
            <Grid>
              <Grid variant="item.6">
                <Card style={{ width: '100', p: 'xs' }}>
                  <Typography variant="h3">Wow</Typography>
                  <Hr variant="reduced.primary" />
                  <Typography variant="p">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque.
                  </Typography>
                  <Box style={{ mr: 'xs' }}>
                    <Button onClick={toggleTheme}>Toggle Theme</Button>
                  </Box>
                </Card>
              </Grid>
              <Grid variant="item.6">
                <Card style={{ width: '100', p: 'xs' }}>
                  <Typography variant="h3">Wow</Typography>
                  <Hr variant="reduced.primary" />
                  <Typography variant="p">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque.
                  </Typography>
                  <Box style={{ mr: 'xs' }}>
                    <Button variant="primary" onClick={toggleTheme}>
                      Toggle Theme
                    </Button>
                  </Box>
                </Card>
              </Grid>
              <Grid variant="item">
                <Card variant="hoverable" style={{ width: '100', p: 'xs' }}>
                  <Typography variant="h3">Hover me</Typography>
                  <Hr variant="reduced.primary" />
                  <Typography variant="p3">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </Typography>
                  <Button variant="small.primary" onClick={toggleTheme}>
                    Toggle Theme
                  </Button>
                </Card>
              </Grid>
              <Grid variant="item">
                <Card variant="hoverable" style={{ width: '100', p: 'xs' }}>
                  <Typography variant="h3">Hover me</Typography>
                  <Hr variant="reduced.primary" />
                  <Typography variant="p3">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </Typography>
                  <Button variant="small.secondary" onClick={toggleTheme}>
                    Toggle Theme
                  </Button>
                </Card>
              </Grid>
              <Grid variant="item">
                <Card variant="hoverable" style={{ width: '100', p: 'xs' }}>
                  <Typography variant="h3">Hover me</Typography>
                  <Hr variant="reduced.primary" />
                  <Typography variant="p3">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </Typography>
                  <Button variant="small.warning" onClick={toggleTheme}>
                    Toggle Theme
                  </Button>
                </Card>
              </Grid>
              <Grid variant="item">
                <Card variant="hoverable" style={{ width: '100', p: 'xs' }}>
                  <Typography variant="h3">Hover me</Typography>
                  <Hr variant="reduced.primary" />
                  <Typography variant="p3">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </Typography>
                  <Button variant="small.error" onClick={toggleTheme}>
                    Toggle Theme
                  </Button>
                </Card>
              </Grid>
              <Grid variant="item">
                <Card variant="warning" style={{ width: '100', p: 'xs' }}>
                  <Typography variant="h3">Waarn!</Typography>
                  <Hr variant="reduced" />
                  <Typography variant="p3">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </Typography>
                  <Box
                    variant="row"
                    style={{ justifyContent: 'space-between' }}
                  >
                    <Button variant="round.small" onClick={toggleTheme}>
                      O
                    </Button>
                  </Box>
                </Card>
              </Grid>
              <Grid variant="item">
                <Card variant="success" style={{ width: '100', p: 'xs' }}>
                  <Typography variant="h3">OK!</Typography>
                  <Hr variant="reduced" />
                  <Typography variant="p3">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </Typography>
                  <Button variant="round.small.primary" onClick={toggleTheme}>
                    O
                  </Button>
                </Card>
              </Grid>
              <Grid variant="item">
                <Card variant="error" style={{ width: '100', p: 'xs' }}>
                  <Typography variant="h3" style={{ color: 'white' }}>
                    Wroong!
                  </Typography>
                  <Hr variant="reduced" style={{ borderColor: 'white' }} />
                  <Typography variant="p3" style={{ color: 'white' }}>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </Typography>
                  <Button variant="round.small.warning" onClick={toggleTheme}>
                    A
                  </Button>
                </Card>
              </Grid>
              <Grid variant="item">
                <Card variant="primary" style={{ width: '100', p: 'xs' }}>
                  <Typography variant="h3" style={{ color: 'white' }}>
                    Morfeus!
                  </Typography>
                  <Hr variant="reduced" style={{ borderColor: 'white' }} />
                  <Typography variant="p3" style={{ color: 'white' }}>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </Typography>

                  <Button variant="round.small.secondary" onClick={toggleTheme}>
                    O
                  </Button>
                </Card>
              </Grid>
              <Grid variant="item.6">
                <Card
                  variant="outlined.warning"
                  style={{ width: '100', p: 'xs' }}
                >
                  <Typography variant="h3">Blah!</Typography>
                  <Hr variant="reduced" />
                  <Typography variant="p3">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </Typography>
                  <Button variant="round" onClick={toggleTheme}>
                    O
                  </Button>
                </Card>
              </Grid>
              <Grid variant="item.6">
                <Card
                  variant="outlined.success"
                  style={{ width: '100', p: 'xs' }}
                >
                  <Typography variant="h3">Bluh!</Typography>
                  <Hr variant="reduced" />
                  <Typography variant="p3">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </Typography>
                  <Button variant="round.primary" onClick={toggleTheme}>
                    O
                  </Button>
                </Card>
              </Grid>
              <Grid variant="item.6">
                <Card
                  variant="outlined.error"
                  style={{ width: '100', p: 'xs' }}
                >
                  <Typography variant="h3">Bleh!</Typography>
                  <Hr variant="reduced" />
                  <Typography variant="p3">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </Typography>
                  <Button variant="round.warning" onClick={toggleTheme}>
                    O
                  </Button>
                </Card>
              </Grid>
              <Grid variant="item.6">
                <Card
                  variant="outlined.primary"
                  style={{ width: '100', p: 'xs' }}
                >
                  <Typography variant="h3">Bloh!</Typography>
                  <Hr variant="reduced" />
                  <Typography variant="p3">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </Typography>
                  <Button variant="round.secondary" onClick={toggleTheme}>
                    O
                  </Button>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Section>
        <Section>
          <Container>
            <Typography variant="h2">Subscribe</Typography>
            <Typography variant="h6">
              To get notified when something happens
            </Typography>
            <Box style={{ height: 'l' }} />
          </Container>
          <Container>
            <InputContainer style={{ width: '25' }} variant="column">
              <Label>Full Name</Label>
              <Input placeholder="John Doe" />
            </InputContainer>
            <InputContainer style={{ width: '25' }} variant="column">
              <Label>Birth Date</Label>
              <Input variant="warning" type="date" />
              <InputFeedback variant="warning">
                The date couldn't be today
              </InputFeedback>
            </InputContainer>
            <InputContainer style={{ width: '25' }} variant="column">
              <Label>Email</Label>
              <Input
                style={{ width: '100' }}
                autoComplete="false"
                placeholder="john@mail.com"
                type="email"
                variant="error"
              />
              <InputFeedback variant="error">
                The email is not valid!
              </InputFeedback>
            </InputContainer>
            <InputContainer style={{ width: '25' }} variant="column">
              <Label>Password</Label>
              <Input type="password" />
            </InputContainer>
            <CheckboxContainer style={{ width: '25' }} variant="row">
              <Checkbox />
              <CheckboxLabel>Are you sure?</CheckboxLabel>
            </CheckboxContainer>
            <Button variant="primary">Subscribe now!</Button>
            <Box style={{ height: 'xs' }} />
            <GroupButtonContainer>
              <Button style={{ bg: 'primary' }} variant={'group' as any}>
                Group
              </Button>
              <Button variant={'group' as any}>Some</Button>
              <Button style={{ bg: 'success' }} variant={'group' as any}>
                Buttons
              </Button>
            </GroupButtonContainer>
          </Container>
        </Section>
        <Section>
          <Container>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeadCell>Feature</TableHeadCell>
                  <TableHeadCell style={{ textAlign: 'center' }}>
                    Morfeo
                  </TableHeadCell>
                  <TableHeadCell style={{ textAlign: 'center' }}>
                    Styled System
                  </TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Create a Theme</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>✅</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>✅</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Create a desing language</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>✅</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>✅</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Multi-theming by default</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>✅</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>❌</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Multi-platform</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>✅</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>✅</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Works without js</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>✅</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>❌</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Web Extension</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>✅</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>❌</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CLI</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>✅</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>❌</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Components in the theme</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>✅</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>❌</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Container>
        </Section>
      </Main>
      <Footer variant="primary" />
    </Page>
  );
};

function App() {
  return <Comps />;
}

export default App;
