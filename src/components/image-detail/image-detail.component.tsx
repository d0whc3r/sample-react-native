import React from 'react';
import { Image, ImageRequireSource, Text, View } from 'react-native';

interface ImageDetailProps {
  title: string;
  image: ImageRequireSource;
  score: number;
}

const ImageDetail: React.FC<ImageDetailProps> = ({ title, image, score }) => {
  return (
    <View>
      <Image source={image} />
      <Text>Title: {title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  );
};

export default ImageDetail;
