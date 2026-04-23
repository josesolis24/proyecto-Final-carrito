import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default function FuncionamientoScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>← Volver</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        ⚙️ Funcionamiento
      </Text>

      <View style={styles.card}>

        <Text style={styles.subtitle}>1. Detección</Text>
        <Text style={styles.text}>
          Los sensores infrarrojos detectan la línea mediante contraste de color.
        </Text>

        <Text style={styles.subtitle}>2. Procesamiento</Text>
        <Text style={styles.text}>
          El ESP32 interpreta las señales recibidas.
        </Text>

        <Text style={styles.subtitle}>3. Control</Text>
        <Text style={styles.text}>
          El driver L298N regula los motores según la información procesada.
        </Text>

        <Text style={styles.subtitle}>4. Corrección</Text>
        <Text style={styles.text}>
          El sistema ajusta la dirección si detecta desviación.
        </Text>

        <Text style={styles.subtitle}>5. Movimiento continuo</Text>
        <Text style={styles.text}>
          Este proceso se repite constantemente de forma automática.
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#0f172a',
    padding: 20
  },

  back: {
    color: '#38bdf8',
    marginBottom: 10
  },

  title: {
    fontSize: 26,
    color: '#38bdf8',
    fontWeight: 'bold',
    marginBottom: 15
  },

  card: {
    backgroundColor: '#1e293b',
    padding: 18,
    borderRadius: 15
  },

  subtitle: {
    color: '#38bdf8',
    fontWeight: 'bold',
    marginTop: 10
  },

  text: {
    color: '#e2e8f0',
    lineHeight: 22
  }

});