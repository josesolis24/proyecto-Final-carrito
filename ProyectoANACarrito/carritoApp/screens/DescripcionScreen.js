import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function DescripcionScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>
        📄 Descripción del Proyecto
      </Text>

      <View style={styles.card}>

        <Text style={styles.subtitle}>¿Qué es?</Text>
        <Text style={styles.text}>
          El carrito seguidor de línea es un robot autónomo capaz de seguir una trayectoria marcada en el suelo mediante sensores infrarrojos.
        </Text>

        <Text style={styles.subtitle}>¿Qué problema resuelve?</Text>
        <Text style={styles.text}>
          Permite automatizar el desplazamiento en rutas definidas, evitando la intervención humana en tareas repetitivas.
        </Text>

        <Text style={styles.subtitle}>¿Para qué fue desarrollado?</Text>
        <Text style={styles.text}>
          Fue desarrollado como un proyecto educativo para aplicar conocimientos de programación, electrónica y automatización.
        </Text>

        <Text style={styles.subtitle}>Objetivo general</Text>
        <Text style={styles.text}>
          Diseñar e implementar un sistema capaz de seguir una línea de manera autónoma utilizando sensores y control de motores.
        </Text>

        <Text style={styles.subtitle}>Funcionamiento general</Text>
        <Text style={styles.text}>
          El carrito utiliza sensores que detectan la línea en el suelo. Esta información es procesada por un microcontrolador, que ajusta el movimiento de los motores para mantener la trayectoria.
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
    marginTop: 10,
    marginBottom: 5
  },

  text: {
    color: '#e2e8f0',
    lineHeight: 22
  }

});