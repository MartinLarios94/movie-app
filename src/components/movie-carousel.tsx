import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface movieProps {
  movie: Movie;
  width?: number;
  height?: number;
}

const MovieCarousel: React.FC<movieProps> = ({
  movie,
  width = 300,
  height = 420,
}) => {
  const {navigate} = useNavigation();
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <TouchableOpacity
      onPress={() => navigate('DetailsScreen', movie)}
      style={{
        ...styles.contentImage,
        width,
        height,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}
      activeOpacity={0.8}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contentImage: {
    width: 300,
    height: 420,
    marginHorizontal: 8,
  },
  image: {
    flex: 1,
    borderRadius: 20,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
  },
});

export default MovieCarousel;
