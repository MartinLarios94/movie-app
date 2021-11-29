import React, {useContext, useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import GradientBackground from '../components/gradient-background';
import HorizontalSlider from '../components/horizontal-slider';
import MovieCarousel from '../components/movie-carousel';
import useMovie from '../hooks/useMovies';
import {getItemColors} from '../helpers/getColors';
import {GradientContext} from '../context/GradientContext';

const HomeScreen = () => {
  const {setMainColors} = useContext(GradientContext);
  const {width} = useWindowDimensions();
  const {nowPlaying, popular, topRated, upComing, isLoading} = useMovie();
  const {top} = useSafeAreaInsets();

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary = 'blue', secondary = 'white'] = await getItemColors(uri);
    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          <View style={{height: 440}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}) => <MovieCarousel movie={item} />}
              itemWidth={300}
              sliderWidth={width}
              inactiveSlideOpacity={1}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          <HorizontalSlider title="Popular" movie={popular} />
          <HorizontalSlider title="Top Rated" movie={topRated} />
          <HorizontalSlider title="Upcoming" movie={upComing} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default HomeScreen;
