import './ImageList.css';
import React from "react";
import ImageCard from './ImageCard';

const ImageList = (props) => {
  // const images = props.images.map((image) => {
  //   return (
  //     <img key={image.id} alt={image.description} src={image.urls.regular} />
  //   );
  // });

  // Destructuring not required after creating ImageCard 
    const images = props.images.map((image) => {
      return <ImageCard key={image.id} image={image}/>;
    });
  return <div className='image-list'>{images}</div>;
};

export default ImageList;
