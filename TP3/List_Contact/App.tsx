/**
 * @description      : Point d'entrée principal de l'application React Native avec React Navigation
 * @author           : belgacem
 * @group            : 
 * @created          : 25/11/2023 - 03:40:31
 * 
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 25/11/2023
 * - Author          : belgacem
 * - Modification    : 
**/

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ContactListScreen from "./components/ContactListScreen";
import ContactFormScreen from "./components/ContactFormScreen";


const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ContactList" component={ContactListScreen} />
        <Stack.Screen name="ContactForm" component ={ContactFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
