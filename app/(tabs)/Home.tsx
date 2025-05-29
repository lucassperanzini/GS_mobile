import { } from "@react-navigation/elements";
import { Button, StyleSheet, Text, View } from "react-native";
import Map from "../components/Map";

function Home() {
    return (
        <View style={styles.section}>
            <Map />
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Bairro: Jardim Paulista</Text>
                <Text style={styles.label}>Cidade: São Paulo</Text>
                <Text style={styles.label}>Situação: Sem energia</Text>
                <View style={styles.buttonWrapper}>
                    <Button title="Registrar apagão" onPress={() => { }} />
                </View>
            </View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    section: {
        flex: 1,
        backgroundColor: '#fff',
    },
    infoContainer: {
        backgroundColor: "lightgrey",
        flex: 1,
        padding: 20,
        gap: 10,
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
