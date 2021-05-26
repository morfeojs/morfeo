import { create } from 'jss';
import { morfeoJSSPreset } from './morfeoJSS';

const jss = create();

jss.setup(morfeoJSSPreset);

export default jss;
