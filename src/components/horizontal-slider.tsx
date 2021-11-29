import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import MovieCarousel from './movie-carousel';

interface horizontalSliderProps {
  title?: string;
  movie: Movie[];
}

const HorizontalSlider: React.FC<horizontalSliderProps> = ({title, movie}) => {
  return (
    <View style={{...styles.container, height: title ? 260 : 220}}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={movie}
        renderItem={({item}) => (
          <MovieCarousel movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 260,
  },
  title: {fontSize: 30, fontWeight: 'bold', marginLeft: 10},
});

export default HorizontalSlider;
