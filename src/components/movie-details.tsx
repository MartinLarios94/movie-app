import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieInterface';
import currencyFormatter from 'currency-formatter';
import CastItem from './cast-item';

interface MovieDetailsProps {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetails: React.FC<MovieDetailsProps> = ({movieFull, cast}) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text> {movieFull.vote_average}</Text>
          <Text style={{marginLeft: 5}}>
            - {movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>
        <Text style={{fontSize: 23, fontWeight: 'bold', marginTop: 10}}>
          Story
        </Text>
        <Text style={{fontSize: 15, textAlign: 'left'}}>
          {movieFull.overview}
        </Text>
        <Text style={{fontSize: 23, fontWeight: 'bold', marginTop: 10}}>
          Budget
        </Text>
        <Text style={{fontSize: 18}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 23,
            fontWeight: 'bold',
            marginTop: 10,
            marginHorizontal: 20,
          }}>
          Authors
        </Text>
        <FlatList
          data={cast}
          renderItem={({item}) => <CastItem author={item} />}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 70}}
        />
      </View>
    </>
  );
};

export default MovieDetails;
