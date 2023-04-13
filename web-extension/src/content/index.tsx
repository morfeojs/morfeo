import { createRoot } from 'react-dom/client';
import { Content } from './Content';

const container = document.createElement('div');
container.id = 'morfeo-web-extension-content-script';

document.body.appendChild(container);

const root = createRoot(container);
root.render(<Content />);
