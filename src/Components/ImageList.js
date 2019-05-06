import React from 'react';
import './styles/ImageList.css';
import ImageCard from './ImageCard';
const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return (
    <div className='image-list'>
      <br />
      {images}
    </div>
  );
};
export default ImageList;
