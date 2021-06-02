import { config } from '../builders';
import { makeComponentSlice, makeSlice } from './makeSlice';

export function makeSlices() {
  const body = document.getElementById('content');
  body.innerHTML = '';
  const slices = Object.keys(config);
  slices.sort((first, second) => {
    return config[first].priority - config[second].priority;
  });
  slices.forEach(slice => makeSlice(slice));
  makeComponentSlice();
}
