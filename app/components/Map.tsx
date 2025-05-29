import { useEffect } from "react";
import {
    PermissionsAndroid,
    Platform,
    StyleSheet,
    View
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

function Map() {

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
    );

}

export default Map;

const styles = StyleSheet.create({
    mapContainer: {
        height: '50%',
        width: '100%',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
});
