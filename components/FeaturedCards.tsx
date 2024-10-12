import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, ListRenderItemInfo } from 'react-native';

const CARD_WIDTH = Dimensions.get('window').width * 0.8;
const CARD_HEIGHT = CARD_WIDTH * 1.2; // Adjust this ratio as needed

interface FeaturedItem {
  id: string;
  image: any; // Using 'any' for image source type, but you could create a more specific type
}

const FeaturedCards: React.FC = () => {
  const featuredItems: FeaturedItem[] = [
    { id: '1', image: require('../assets/ushuaia.png') },
    { id: '2', image: require('../assets/man.png') },
    { id: '3', image: require('../assets/museum.png') },
    { id: '4', image: require('../assets/ushuaia.png') },
    { id: '5', image: require('../assets/man.png') },
    { id: '6', image: require('../assets/museum.png') },
    // Add more items as needed
  ];

  const renderCard = ({ item }: ListRenderItemInfo<FeaturedItem>) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>À la une</Text>
      <FlatList<FeaturedItem>
        data={featuredItems}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20} // Card width + margin
        decelerationRate="fast"
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
    color: '#000',
  },
  listContent: {
    paddingHorizontal: 10,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 5, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default FeaturedCards;