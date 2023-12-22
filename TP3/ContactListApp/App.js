/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 22/12/2023 - 22:34:18
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ContactList from './components/ContactList'; // Assurez-vous de mettre le bon chemin d'accès

const App = () => {
  return (
    <NavigationContainer>
      <ContactList />
    </NavigationContainer>
  );
};

export default App;
