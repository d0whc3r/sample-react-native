import React from 'react';
import { View } from 'react-native';
import ImageDetail from '../components/image-detail/image-detail.component';

const ImageScreen: React.FC = () => {
  const images = [
    { title: 'Forest', image: require('../../assets/forest.jpg'), score: 9 },
    { title: 'Beach', image: require('../../assets/beach.jpg'), score: 7 },
    { title: 'Mountain', image: require('../../assets/mountain.jpg'), score: 10 }
  ];
  return (
    <View>
      {images.map(({ image, title, score }) => (
        <ImageDetail key={title} title={title} image={image} score={score} />
      ))}
    </View>
  );
};

export default ImageScreen;
