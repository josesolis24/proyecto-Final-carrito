import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function CreditosScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>← Volver</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        📌 Créditos
      </Text>

      {/* INTEGRANTES */}
      <Text style={styles.section}>👥 Integrantes</Text>

      <View style={styles.card}>
        <Text style={styles.name}>Jesús Iván Legaspi Ibarra</Text>
        <Text style={styles.role}>Electrónica y conexiones</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.name}>José Emiliano Solís Fierro</Text>
        <Text style={styles.role}>Programación del sistema</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.name}>Nayeli Santillán Lares</Text>
        <Text style={styles.role}>Diseño y documentación</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.name}>Alondra Gonzales Medina</Text>
        <Text style={styles.role}>Apoyo en desarrollo y pruebas</Text>
      </View>

      {/* INFORMACIÓN ACADÉMICA */}
      <Text style={styles.section}>📚 Información Académica</Text>

      <View style={styles.card}>
        <Text style={styles.info}>Grupo: 5A</Text>
        <Text style={styles.info}>Materia: Apps Moviles</Text>
        <Text style={styles.info}>Docente: Ing. Ana Laura Lara Chairez</Text>
        <Text style={styles.info}>Cuatrimestre: 5</Text>
        <Text style={styles.info}>Fecha de entrega:24/04/2026</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
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

  section: {
    color: '#e2e8f0',
    fontSize: 18,
    marginTop: 15,
    marginBottom: 10,
    fontWeight: 'bold'
  },

  card: {
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10
  },

  name: {
    color: '#38bdf8',
    fontWeight: 'bold'
  },

  role: {
    color: '#e2e8f0'
  },

  info: {
    color: '#e2e8f0',
    marginBottom: 5
  }

});