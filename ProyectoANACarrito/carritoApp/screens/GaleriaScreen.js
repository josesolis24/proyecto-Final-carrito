import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

import { Video } from 'expo-av';

export default function GaleriaScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>← Volver</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        🖼️ Galería del Proyecto
      </Text>

      {/* 🔧 COMPONENTES */}
      <Text style={styles.section}>🔧 Componentes</Text>
      <View style={styles.grid}>

        <View style={styles.item}>
          <Image source={require('../assets/esp32.jpeg')} style={styles.img} />
          <Text style={styles.label}>ESP32</Text>
        </View>

        <View style={styles.item}>
          <Image source={require('../assets/sensor.jpeg')} style={styles.img} />
          <Text style={styles.label}>Sensor</Text>
        </View>

        <View style={styles.item}>
          <Image source={require('../assets/motor.jpeg')} style={styles.img} />
          <Text style={styles.label}>Motor</Text>
        </View>

        <View style={styles.item}>
          <Image source={require('../assets/driver.jpeg')} style={styles.img} />
          <Text style={styles.label}>Driver</Text>
        </View>

        <View style={styles.item}>
          <Image source={require('../assets/chasis.jpeg')} style={styles.img} />
          <Text style={styles.label}>Chasis</Text>
        </View>

        <View style={styles.item}>
          <Image source={require('../assets/rueda.jpeg')} style={styles.img} />
          <Text style={styles.label}>Rueda</Text>
        </View>

      </View>

      {/* 🛠️ PROCESO */}
      <Text style={styles.section}>🛠️ Proceso</Text>
      <View style={styles.grid}>

        <View style={styles.item}>
          <Image source={require('../assets/armado.jpeg')} style={styles.img} />
          <Text style={styles.label}>Armado</Text>
        </View>

        <View style={styles.item}>
          <Image source={require('../assets/conexion.jpeg')} style={styles.img} />
          <Text style={styles.label}>Conexiones</Text>
        </View>

      </View>

      {/* 🚗 RESULTADO */}
      <Text style={styles.section}>🚗 Resultado Final</Text>
      <View style={styles.grid}>

        <View style={styles.item}>
          <Image source={require('../assets/final.jpeg')} style={styles.img} />
          <Text style={styles.label}>Carrito terminado</Text>
        </View>

      </View>

      {/* 🎥 VIDEO */}
      <Text style={styles.section}>🎥 Funcionamiento en tiempo real</Text>

      <Video
        source={require('../assets/video.mp4')} // 👈 tu video aquí
        style={styles.video}
        useNativeControls
        resizeMode="contain"
        isLooping
      />

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

  section: {
    fontSize: 18,
    color: '#e2e8f0',
    marginTop: 15,
    marginBottom: 10,
    fontWeight: 'bold'
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  item: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 15
  },

  img: {
    width: '100%',
    height: 100,
    borderRadius: 10
  },

  label: {
    color: '#e2e8f0',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center'
  },

  video: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginTop: 10
  }

});