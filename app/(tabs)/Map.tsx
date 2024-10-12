import React from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import MapView from 'react-native-maps';

const MapScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Feather name="menu" size={24} color="black" style={styles.menuIcon} />
        <View style={styles.searchBar}>
          <Feather name="search" size={20} color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Recherchez"
            placeholderTextColor="gray"
          />
        </View>
      </View>
      <View style={styles.categoryIcons}>
        <View style={[styles.iconButton, { backgroundColor: '#FF6B6B' }]}>
          <Feather name="coffee" size={24} color="white" />
        </View>
        <View style={[styles.iconButton, { backgroundColor: '#4ECDC4' }]}>
          <Feather name="shopping-bag" size={24} color="white" />
        </View>
        <View style={[styles.iconButton, { backgroundColor: '#45B649' }]}>
          <Feather name="map-pin" size={24} color="white" />
        </View>
        <View style={[styles.iconButton, { backgroundColor: '#3498DB' }]}>
          <Feather name="home" size={24} color="white" />
        </View>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  menuIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  categoryIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;