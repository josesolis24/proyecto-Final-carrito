import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

export default function ComponentesScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>← Volver</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        🔧 Componentes y Materiales
      </Text>

      {/* ESP32 */}
      <View style={styles.card}>
        <Image source={require('../assets/esp32.jpeg')} style={styles.img} />
        <View style={styles.info}>
          <Text style={styles.name}>ESP32</Text>
          <Text style={styles.text}>
            Microcontrolador principal que procesa la información y controla el sistema.
          </Text>
        </View>
      </View>

      {/* DRIVER */}
      <View style={styles.card}>
        <Image source={require('../assets/driver.jpeg')} style={styles.img} />
        <View style={styles.info}>
          <Text style={styles.name}>Driver L298N</Text>
          <Text style={styles.text}>
            Controla los motores, permitiendo regular velocidad y dirección.
          </Text>
        </View>
      </View>

      {/* Sensores */}
      <View style={styles.card}>
        <Image source={require('../assets/sensor.jpeg')} style={styles.img} />
        <View style={styles.info}>
          <Text style={styles.name}>Sensores Infrarrojos</Text>
          <Text style={styles.text}>
            Detectan la línea mediante contraste de colores.
          </Text>
        </View>
      </View>

      {/* Motores */}
      <View style={styles.card}>
        <Image source={require('../assets/motor.jpeg')} style={styles.img} />
        <View style={styles.info}>
          <Text style={styles.name}>Motores</Text>
          <Text style={styles.text}>
            Generan el movimiento del carrito.
          </Text>
        </View>
      </View>

      {/* Batería */}
      <View style={styles.card}>
        <Image source={require('../assets/pila.jpeg')} style={styles.img} />
        <View style={styles.info}>
          <Text style={styles.name}>Batería</Text>
          <Text style={styles.text}>
            Suministra energía a todo el sistema.
          </Text>
        </View>
      </View>

      {/* Chasis */}
      <View style={styles.card}>
        <Image source={require('../assets/chasis.jpeg')} style={styles.img} />
        <View style={styles.info}>
          <Text style={styles.name}>Chasis</Text>
          <Text style={styles.text}>
            Base estructural donde se montan los componentes.
          </Text>
        </View>
      </View>

      {/* Llantas */}
      <View style={styles.card}>
        <Image source={require('../assets/rueda.jpeg')} style={styles.img} />
        <View style={styles.info}>
          <Text style={styles.name}>Llantas</Text>
          <Text style={styles.text}>
            Permiten el desplazamiento y estabilidad del carrito.
          </Text>
        </View>
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
    flexDirection: 'row',
    backgroundColor: '#1e293b',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center'
  },

  img: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15
  },

  info: {
    flex: 1
  },

  name: {
    color: '#38bdf8',
    fontWeight: 'bold',
    marginBottom: 5
  },

  text: {
    color: '#e2e8f0',
    lineHeight: 20
  }

});