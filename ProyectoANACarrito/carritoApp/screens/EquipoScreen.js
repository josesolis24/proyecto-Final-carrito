import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default function EquipoScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>← Volver</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        👥 Nuestro Equipo
      </Text>

      <Text style={styles.subtitleGlobal}>
        Conoce a los integrantes del proyecto
      </Text>

      {/* 🔹 TARJETAS */}
      <View style={styles.card}>
        <Image source={require('../assets/legaspi.jpeg')} style={styles.avatar} />
        <Text style={styles.name}>Jesús Iván Legaspi Ibarra</Text>
        <Text style={styles.role}>💻 Electrónico</Text>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/solis.jpg')} style={styles.avatar} />
        <Text style={styles.name}>José Emiliano Solís Fierro</Text>
        <Text style={styles.role}>🔌 Programación</Text>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/nayeli.jpeg')} style={styles.avatar} />
        <Text style={styles.name}>Nayeli Santillán Lares</Text>
        <Text style={styles.role}>🎨 Diseño</Text>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/alondra.jpeg')} style={styles.avatar} />
        <Text style={styles.name}>Alondra Gonzales Medina</Text>
        <Text style={styles.role}>🛠️ Apoyo</Text>
      </View>

      {/* 🔹 DESCRIPCIÓN */}
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Sobre el equipo</Text>
        <Text style={styles.description}>
          Somos un equipo que desarrolló un carrito seguidor de línea,
          integrando conocimientos de programación, electrónica y diseño.
          Nuestro trabajo colaborativo permitió construir un sistema funcional,
          eficiente y orientado a la automatización.
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#0f172a',
    padding: 20,
    alignItems: 'center'
  },

  back: {
    color: '#38bdf8',
    alignSelf: 'flex-start',
    marginBottom: 10
  },

  title: {
    fontSize: 28,
    color: '#38bdf8',
    fontWeight: 'bold',
    marginBottom: 5
  },

  subtitleGlobal: {
    color: '#94a3b8',
    marginBottom: 20
  },

  card: {
    width: '100%',
    backgroundColor: '#1e293b',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#38bdf8'
  },

  name: {
    color: '#e2e8f0',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  role: {
    color: '#38bdf8',
    marginTop: 5
  },

  infoBox: {
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 12,
    marginTop: 10
  },

  infoTitle: {
    color: '#38bdf8',
    fontWeight: 'bold',
    marginBottom: 8
  },

  description: {
    color: '#e2e8f0',
    lineHeight: 20
  }

});