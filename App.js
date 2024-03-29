import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/componentes/Home/index.js';
import About from './src/componentes/About/index.js';
import Leveling from './src/componentes/Play/Leveling/index.js';
import Hard from './src/componentes/Play/Hard/index.js';
import Medium from './src/componentes/Play/Medium/index.js';
import Easy from './src/componentes/Play/Easy/index.js';
import FeedbackYes from './src/componentes/Feedback/FeedbackYes.js';
import FeedbackNo from './src/componentes/Feedback/FeedbackNo.js';
import Store from './src/componentes/Store/index.js';
import ChildInfoScreen from './src/componentes/Infor/index.js';
import WelcomeScreen from './src/componentes/Welcome/index.js';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={About} options={{ headerShown: true }} />
        <Stack.Screen name="Store" component={Store} options={{ headerShown: true }} />
        <Stack.Screen name="Leveling" component={Leveling} options={{ headerShown: false }} />
        <Stack.Screen name="Hard" component={Hard} options={{ headerShown: false }} />
        <Stack.Screen name="Easy" component={Easy} options={{ headerShown: false }} />
        <Stack.Screen name="Medium" component={Medium} options={{ headerShown: false }} />
        <Stack.Screen name="FeedbackYes" component={FeedbackYes} options={{ headerShown: false }} />
        <Stack.Screen name="FeedbackNo" component={FeedbackNo} options={{ headerShown: false }} />
        <Stack.Screen name="ChildInfoScreen" component={ChildInfoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
