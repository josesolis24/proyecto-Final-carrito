import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/final.jpeg')}
        style={styles.image}
      />

      <Text style={styles.title}>
        🚗 Carrito Seguidor de Línea
      </Text>

      <Text style={styles.team}>
        Equipo: Los PAWPatrol
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Menu')}
      >
        <Text style={styles.buttonText}>
          Access
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  image: {
    width: '100%',
    height: 180,
    borderRadius: 15,
    marginBottom: 20
  },

  title: {
    fontSize: 26,
    color: '#38bdf8',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },

  team: {
    color: '#94a3b8',
    marginBottom: 30
  },

  button: {
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }

});