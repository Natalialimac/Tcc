import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/componentes/Home/index.js';
import About from './src/componentes/About/index.js';
import Leveling from './src/componentes/Play/Leveling/index.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Leveling" component={Leveling} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
