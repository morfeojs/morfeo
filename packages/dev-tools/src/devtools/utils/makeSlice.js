import { config, components } from '../builders';
import { makeRow } from './makeRow';

const body = document.getElementById('content');

function onCollapse(button, collapsible) {
  if (!collapsible) {
    return;
  }

  if (collapsible.classList.contains('collapsed')) {
    collapsible.classList.remove('collapsed');
    button.innerHTML = `▲`;
  } else {
    collapsible.classList.add('collapsed');
    button.innerHTML = `▼`;
  }
}

export function makeSlice(slice, direction = 'row', populate = true) {
  const sliceConfig = config[slice];
  const container = document.createElement('div');
  const title = document.createElement('h2');
  const collapse = document.createElement('button');
  const row = document.createElement('div');

  container.classList.add('slice');
  collapse.classList.add('collapse');
  row.classList.add(direction, 'dynamic');

  row.setAttribute('id', slice);

  title.innerHTML = slice;
  collapse.innerHTML = `▲`;

  collapse.addEventListener('click', () => onCollapse(collapse, row));

  container.appendChild(title);
  container.appendChild(collapse);
  container.appendChild(row);

  body.appendChild(container);

  if (populate && sliceConfig) {
    makeRow(row, sliceConfig);
  }

  return row;
}

export function makeComponentSlice() {
  const container = makeSlice('components', 'column', false);
  components(container);
}
