import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela Inicial da Stack</Text>
      {/* <Button title="Ir para detalhes" onPress={() => router.push('/(stack)/details')} /> */}
    </View>
  );
}
