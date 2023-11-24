/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 24/11/2023 - 23:36:11
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/11/2023
    * - Author          : belgacem
    * - Modification    : 
**/

// Importation des modules nécessaires de React et React Native
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Importation du composant StatusBar du module Expo pour gérer la barre d'état
import { StatusBar } from 'expo-status-bar';

// Définition du composant principal de l'application
export default function App() {
  // Retourne la structure de l'interface utilisateur
  return (
    <View style={styles.container}>
      {/* Affiche le texte "TP1 react native" */}
      <Text>TP1 react native</Text>
      
      {/* Composant StatusBar pour ajuster le style de la barre d'état (auto signifie utiliser le style par défaut) */}
      <StatusBar style="auto" />
    </View>
  );
}

// Définition des styles pour les composants de l'interface utilisateur
const styles = StyleSheet.create({
  // Style du conteneur principal
  container: {
    flex: 1,
    backgroundColor: '#fff', // Couleur de fond blanche
    alignItems: 'center', // Centrage des éléments horizontalement
    justifyContent: 'center', // Centrage des éléments verticalement
    fontSize: 20, // Taille de police globale de 20 pixels
  },
});
