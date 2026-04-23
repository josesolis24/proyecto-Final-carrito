import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen'; // 👈 AGREGAR

import EquipoScreen from './screens/EquipoScreen';
import DescripcionScreen from './screens/DescripcionScreen';
import ComponentesScreen from './screens/ComponentesScreen';
import FuncionamientoScreen from './screens/FuncionamientoScreen';
import GaleriaScreen from './screens/GaleriaScreen';
import ConclusionesScreen from './screens/ConclusionesScreen';
import CreditosScreen from './screens/CreditosScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Inicio" component={HomeScreen} />

        {/* 👇 NUEVA PANTALLA */}
        <Stack.Screen name="Menu" component={MenuScreen} />

        <Stack.Screen name="Equipo" component={EquipoScreen} />
        <Stack.Screen name="Descripcion" component={DescripcionScreen} />
        <Stack.Screen name="Componentes" component={ComponentesScreen} />
        <Stack.Screen name="Funcionamiento" component={FuncionamientoScreen} />
        <Stack.Screen name="Galeria" component={GaleriaScreen} />
        <Stack.Screen name="Conclusiones" component={ConclusionesScreen} />
        <Stack.Screen name="Creditos" component={CreditosScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}