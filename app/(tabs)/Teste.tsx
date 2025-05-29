import React, { useEffect } from 'react';
import {
  PermissionsAndroid,
  Platform,
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import MapView, { Polygon, PROVIDER_GOOGLE } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';

export default function Teste() {
  const initialRegion = {
    latitude: -23.56,
    longitude: -46.65,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const redZones = [
  [
    { latitude: -23.561, longitude: -46.655 },
    { latitude: -23.561, longitude: -46.648 },
    { latitude: -23.567, longitude: -46.648 },
    { latitude: -23.567, longitude: -46.655 },
  ],
  [
    { latitude: -23.568, longitude: -46.655 },
    { latitude: -23.568, longitude: -46.648 },
    { latitude: -23.574, longitude: -46.648 },
    { latitude: -23.574, longitude: -46.655 },
  ],
  [
    { latitude: -23.561, longitude: -46.663 },
    { latitude: -23.561, longitude: -46.656 },
    { latitude: -23.567, longitude: -46.656 },
    { latitude: -23.567, longitude: -46.663 },
  ],
  [
    { latitude: -23.568, longitude: -46.663 },
    { latitude: -23.568, longitude: -46.656 },
    { latitude: -23.574, longitude: -46.656 },
    { latitude: -23.574, longitude: -46.663 },
  ],
  [
    { latitude: -23.575, longitude: -46.655 },
    { latitude: -23.575, longitude: -46.648 },
    { latitude: -23.581, longitude: -46.648 },
    { latitude: -23.581, longitude: -46.655 },
  ],
];

const orangeZones = [
  [
    { latitude: -23.561, longitude: -46.641 },
    { latitude: -23.561, longitude: -46.634 },
    { latitude: -23.567, longitude: -46.634 },
    { latitude: -23.567, longitude: -46.641 },
  ],
  [
    { latitude: -23.568, longitude: -46.641 },
    { latitude: -23.568, longitude: -46.634 },
    { latitude: -23.574, longitude: -46.634 },
    { latitude: -23.574, longitude: -46.641 },
  ],
  [
    { latitude: -23.575, longitude: -46.641 },
    { latitude: -23.575, longitude: -46.634 },
    { latitude: -23.581, longitude: -46.634 },
    { latitude: -23.581, longitude: -46.641 },
  ],
  [
    { latitude: -23.561, longitude: -46.626 },
    { latitude: -23.561, longitude: -46.619 },
    { latitude: -23.567, longitude: -46.619 },
    { latitude: -23.567, longitude: -46.626 },
  ],
  [
    { latitude: -23.568, longitude: -46.626 },
    { latitude: -23.568, longitude: -46.619 },
    { latitude: -23.574, longitude: -46.619 },
    { latitude: -23.574, longitude: -46.626 },
  ],
];



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
    <View style={styles.page}>
      <View style={styles.mapWrapper}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegion}
          showsUserLocation
          showsMyLocationButton
        >
         {redZones.map((zone, index) => (
  <Polygon
    key={`red-${index}`}
    coordinates={zone}
    fillColor="rgba(255,0,0,0.5)"
    strokeColor="#FF0000"
  />
))}

{orangeZones.map((zone, index) => (
  <Polygon
    key={`orange-${index}`}
    coordinates={zone}
    fillColor="rgba(255,165,0,0.5)"
    strokeColor="#FFA500"
  />
))}

 </MapView>

        {/* 📋 Card flutuante */}
        <View style={styles.overlayCard}>
         
          <Text style={styles.cardTitle}><MaterialIcons size={16} name='holiday-village'/> Vila nova Conceição</Text>
          <View style={styles.cardRow}>
            <MaterialIcons name="error-outline" size={16} color="#D9534F" />
            <Text style={styles.cardText}>
              Status da energia: <Text style={styles.cardTextBold}>Apagão</Text>
            </Text>
          </View>
          <Text style={styles.cardSub}>20 técnicos mobilizados · Estimado para 16h20</Text>
        </View>
      </View>

      {/* 🔦 Dica + Botão */}
      <View style={styles.bottom}>
        <View style={styles.tipBox}>
          <MaterialIcons name="highlight" size={20} color="#3A76F0" />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.tipTitle}>Acenda lanternas ou velas</Text>
            <Text style={styles.tipText}>
              Use lanternas a pilha ou velas para obter iluminação temporária.
            </Text>
          </View>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Registrar novo apagão</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  mapWrapper: {
    height: '60%',
    width: '100%',
    position: 'relative',
  },
  map: {
    flex: 1,
  },
  overlayCard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  cardText: {
    fontSize: 14,
    color: '#444',
  },
  cardTextBold: {
    fontWeight: 'bold',
  },
  cardSub: {
    fontSize: 12,
    color: '#666',
  },
  bottom: {
    flex:1,
    padding: 20,
    gap: 20,
    justifyContent: 'center',
  },
  tipBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#EAF0FF',
    borderRadius: 12,
    padding: 16,
  },
  tipTitle: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 2,
  },
  tipText: {
    fontSize: 13,
    color: '#444',
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  },
});
