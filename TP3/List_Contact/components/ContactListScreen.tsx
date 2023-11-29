/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 25/11/2023 - 03:45:33
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ContactList from '../components/ContactList';
import { StackNavigationProp } from '@react-navigation/stack';
import { Contact } from '../interfaces/Contact';
import { RootStackParamList } from '../interfaces/RootStackParamList';

interface ContactListScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'ContactList'>; // Remplacez 'RootStackParamList' par le nom correct de votre pile de navigation
}

const ContactListScreen: React.FC<ContactListScreenProps> = ({ navigation }) => {
  // Utilisez le state pour stocker les contacts
  const [contacts, setContacts] = React.useState<Contact[]>([]);

  return (
    <View style={styles.container}>
      <Button
        title="Add Contact"
        onPress={() => navigation.navigate('ContactForm', { initialContact: null })}
      />
      <ContactList
        contacts={contacts}
        onEdit={(id: number) => {
          // Handle edit logic
          console.log('Edit contact with ID:', id);
        }}
        onDelete={(id: number) => {
          // Handle delete logic
          console.log('Delete contact with ID:', id);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default ContactListScreen;
