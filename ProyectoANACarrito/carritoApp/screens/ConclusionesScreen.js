import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ConclusionesScreen() {
  return (

    <SafeAreaView style={styles.safe}>

      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.title}>
          🧠 Conclusiones
        </Text>

        <View style={styles.card}>

          <Text style={styles.text}>
            • Aprendimos sobre programación, sensores y la importancia del trabajo en equipo para lograr un proyecto funcional.
          </Text>

          <Text style={styles.text}>
            • Una de las principales dificultades fue la calibración de los sensores, ya que requería precisión para detectar correctamente la línea.
          </Text>

          <Text style={styles.text}>
            • Comprendimos cómo interactúan el hardware y el software para resolver problemas del mundo real.
          </Text>

          <Text style={styles.text}>
            • Este proyecto nos permitió desarrollar habilidades en lógica de programación y control de sistemas automatizados.
          </Text>

          <Text style={styles.text}>
            • Reforzamos la importancia de la prueba y error para mejorar el funcionamiento del carrito.
          </Text>

          <Text style={styles.text}>
            • Finalmente, demostramos cómo la tecnología puede aplicarse para automatizar tareas de manera eficiente.
          </Text>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safe: {
    flex: 1,
    backgroundColor: '#0f172a'
  },

  container: {
    flexGrow: 1,
    padding: 20
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

  text: {
    color: '#e2e8f0',
    lineHeight: 22,
    marginBottom: 12
  }

});