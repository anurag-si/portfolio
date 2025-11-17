import { TravelLocation } from '@/types/travel';
import chamba1 from '../app/photos/Chamba/Chamba1.jpeg';
import chamba3 from '../app/photos/Chamba/Chamba3.jpeg';
import chamba4 from '../app/photos/Chamba/Chamba4.jpeg';
import chamba5 from '../app/photos/Chamba/Chamba5.jpeg';
import mumbai1 from '../app/photos/Mumbai/Mum1.jpeg';
import mumbai2 from '../app/photos/Mumbai/Mum2.jpeg';
import mumbai3 from '../app/photos/Mumbai/Mum3.jpeg';
import mumbai4 from '../app/photos/Mumbai/Mum4.jpeg';
import mumbai5 from '../app/photos/Mumbai/Mum5.jpeg';

export const travelLocations: TravelLocation[] = [
  {
    id: 'chamba',
    name: 'Chamba',
    date: '2023',
    images: [
      {
        type: 'image',
        src: chamba1,
        date: '2023',
        description: 'Chamba, Himachal Pradesh'
      },
      {
        type: 'video',
        src: '/photos/Chamba/Chamba.MOV',
        date: '2023',
        description: 'Chamba, Himachal Pradesh'
      },
      {
        type: 'image',
        src: chamba3,
        date: '2023',
        description: 'Chamba, Himachal Pradesh'
      },
      {
        type: 'image',
        src: chamba4,
        date: '2023',
        description: 'Chamba, Himachal Pradesh'
      },
      {
        type: 'video',
        src: '/photos/Chamba/Chamba2.MOV',
        date: '2023',
        description: 'Chamba, Himachal Pradesh'
      },
      {
        type: 'image',
        src: chamba5,
        date: '2023',
        description: 'Chamba, Himachal Pradesh'
      }
    ],
    alt: 'Chamba, Himachal Pradesh'
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    date: '2023',
    images: [
      {
        type: 'image',
        src: mumbai1,
        date: '2023',
        description: 'Mumbai, Maharashtra'
      },
      {
        type: 'image',
        src: mumbai2,
        date: '2023',
        description: 'Mumbai, Maharashtra'
      },
      {
        type: 'image',
        src: mumbai3,
        date: '2023',
        description: 'Mumbai, Maharashtra'
      },
      {
        type: 'image',
        src: mumbai4,
        date: '2023',
        description: 'Mumbai, Maharashtra'
      },
      {
        type: 'image',
        src: mumbai5,
        date: '2023',
        description: 'Mumbai, Maharashtra'
      }
    ],
    alt: 'Mumbai, Maharashtra'
  }
];

