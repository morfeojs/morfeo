import './App.css';
import { Card } from './components/Card';
import { Button } from './components/Button';

function App() {
  return (
    <div className="main">
      <Card direction="left">
        <Card direction="right">
          <Card direction="left">
            <Card direction="right">
              <Card direction="left">
                <Button>Morfeo build time is here</Button>
              </Card>
            </Card>
          </Card>
        </Card>
      </Card>
    </div>
  );
}

export default App;
