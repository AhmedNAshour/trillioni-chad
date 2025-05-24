
import { GalleryImage } from '@/data/galleryImages';

export const distributeImages = (images: GalleryImage[], numColumns: number): GalleryImage[][] => {
  const columns = Array.from({ length: numColumns }, () => [] as GalleryImage[]);
  images.forEach((image, index) => {
    columns[index % numColumns].push(image);
  });
  return columns;
};
