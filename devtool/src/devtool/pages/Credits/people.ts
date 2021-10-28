import { Author } from '../../../_shared/types';
import lucaCoverImage from '../../../_shared/assets/images/luca.jpeg';
import mauroCoverImage from '../../../_shared/assets/images/mauro.jpeg';
import andreaCoverImage from '../../../_shared/assets/images/andrea.jpeg';
import gabrieleCoverImage from '../../../_shared/assets/images/gabriele.jpeg';

export const authors: Author[] = [
  {
    name: 'Mauro Erta',
    url: 'https://github.com/mauroerta',
    image: mauroCoverImage,
    contributions: ['💻', '📖', '🤔'],
  },
  {
    name: 'Andrea Porceddu',
    url: 'https://github.com/andreaSimonePorceddu',
    image: andreaCoverImage,
    contributions: ['💻', '📖', '🤔'],
  },
  {
    name: 'Luca Cacciarru',
    url: 'https://github.com/lucacacciarru',
    image: lucaCoverImage,
    contributions: ['🎨', '🤔'],
  },
  {
    name: 'Gabriele Angius',
    url: 'https://github.com/gabrieleAngius',
    image: gabrieleCoverImage,
    contributions: ['🎨', '🤔'],
  },
];
