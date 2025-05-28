import React, { useEffect } from 'react';
import {
  PermissionsAndroid,
  Platform,
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


export default function HomeScreen() {

  const Initial_region = {
    latitude: -23.563385776094893,
    longitude: -46.65387766209701,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };


  async function requestLocationPermission() {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  }


  useEffect(() => {
    requestLocationPermission();
  }, []);


  return (
    <View style={styles.section}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={Initial_region}
          showsUserLocation
          showsMyLocationButton
        >
          <Marker
            coordinate={{
              latitude: Initial_region.latitude,
              longitude: Initial_region.longitude,
            }}
          />
        </MapView>
      </View>


      <View style={styles.infoContainer}>
        <Text style={styles.label}>Bairro: Jardim Paulista</Text>
        <Text style={styles.label}>Cidade: São Paulo</Text>
        <Text style={styles.label}>Situação: Sem energia</Text>
        <View style={styles.buttonWrapper}>
          <Button title="Registrar apagão" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  section: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapContainer: {
    height: '50%',
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  infoContainer: {
    backgroundColor:"lightgrey",
    flex: 1,
    padding: 20,
    gap:10,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  buttonWrapper: {
    marginTop: 20,
    width: '80%',
  },
});
