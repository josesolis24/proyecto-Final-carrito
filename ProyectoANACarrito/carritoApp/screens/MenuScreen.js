import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';

export default function MenuScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>
        📋 Menú del Proyecto
      </Text>

      {/* 👇 PRIMERO EQUIPO */}
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Equipo')}>
        <Text style={styles.btnText}>👥 Equipo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Descripcion')}>
        <Text style={styles.btnText}>📄 Descripción</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Componentes')}>
        <Text style={styles.btnText}>🔧 Componentes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Funcionamiento')}>
        <Text style={styles.btnText}>⚙️ Funcionamiento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Galeria')}>
        <Text style={styles.btnText}>🖼️ Galería</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Conclusiones')}>
        <Text style={styles.btnText}>🧠 Conclusiones</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Creditos')}>
        <Text style={styles.btnText}>📌 Créditos</Text>
      </TouchableOpacity>

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
    marginBottom: 20
  },

  btn: {
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10
  },

  btnText: {
    color: '#e2e8f0',
    fontSize: 16
  }

});