import noImage from '../assets/no-image-placeholder.webp';

const getCropImgURL = (imgURL: string) => {
  if (!imgURL) return noImage;
  let target = 'media/';
  let targetIndex = imgURL.indexOf(target) + target.length;
  return (
    imgURL.slice(0, targetIndex) + 'crop/600/400/' + imgURL.slice(targetIndex)
  );
};

export default getCropImgURL;
