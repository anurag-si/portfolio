import chamba1 from '../app/photos/Chamba/Chamba1.jpeg';

export type ImageSrc = typeof chamba1;
export type VideoSrc = string;

export interface TravelMedia {
  type: 'image' | 'video';
  src: ImageSrc | VideoSrc;
  date: string;
  description?: string;
}

export interface TravelLocation {
  id: string;
  name: string;
  date: string;
  images: TravelMedia[];
  alt: string;
}

