import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';

interface castItemProps {
  author: Cast;
}

const CastItem: React.FC<castItemProps> = ({author}) => {
  const uri = `https://image.tmdb.org/t/p/w500${author.profile_path}`;
  return (
    <View style={styles.container}>
      {author.profile_path && (
        <Image
          source={{uri}}
          style={{width: 50, height: 50, borderRadius: 10}}
        />
      )}
      <View style={styles.authorInfo}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{author.name}</Text>
        <Text style={{fontSize: 16, opacity: 0.7}}>{author.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginRight: 25,
    paddingRight: 15,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
  },
  authorInfo: {
    marginLeft: 10,
    marginVertical: 5,
  },
});

export default CastItem;
