/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 19/12/2023 - 11:04:17
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
// App.js
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import ContactList from './components/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'user1', email: 'user1@example.com' },
    { id: 2, name: 'user2', email: 'user2@example.com' },
    // Ajoutez d'autres contacts ici
  ]);

  const [originalContacts, setOriginalContacts] = useState([...contacts]);
  const [newContact, setNewContact] = useState({ name: '', email: '' });
  const [searchText, setSearchText] = useState('');
  const [sortKey, setSortKey] = useState('name');

  const handleAddContact = () => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: prevContacts.length + 1, ...newContact },
    ]);
    setNewContact({ name: '', email: '' });
  };

  const handleDeleteContact = (contactId) => {
    Alert.alert(
      'Delete Contact',
      'Are you sure you want to delete this contact?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            const updatedContacts = contacts.filter(
              (contact) => contact.id !== contactId
            );
            setContacts(updatedContacts);
            setOriginalContacts(updatedContacts);
          },
        },
      ]
    );
  };

  const handleEditContact = (editedContact) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === editedContact.id ? { ...editedContact } : contact
      )
    );
  };

  const handleSearchContact = () => {
    const filteredContacts = originalContacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchText.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchText.toLowerCase())
    );

    setContacts(filteredContacts);
  };

  const handleSortContacts = (key) => {
    setSortKey(key);
    const sortedContacts = [...contacts].sort((a, b) =>
      a[key].localeCompare(b[key])
    );
    setContacts(sortedContacts);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 8,
      paddingHorizontal: 8,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 16,
    },
    button: {
      flex: 1,
      marginHorizontal: 4,
    },
    sortButton: {
      backgroundColor: '#4CAF50',
      padding: 8,
      borderRadius: 5,
    },
    sortButtonText: {
      color: 'white',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name or Email"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onEndEditing={handleSearchContact}
      />

      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.sortButton,
            { opacity: pressed ? 0.5 : 1 },
          ]}
          onPress={() => handleSortContacts('createdAt')}
        >
          <Text style={styles.sortButtonText}>Sort by Date</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.sortButton,
            { opacity: pressed ? 0.5 : 1 },
          ]}
          onPress={() => handleSortContacts('status')}
        >
          <Text style={styles.sortButtonText}>Sort by Status</Text>
        </Pressable>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={newContact.name}
        onChangeText={(text) => setNewContact({ ...newContact, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={newContact.email}
        onChangeText={(text) => setNewContact({ ...newContact, email: text })}
      />
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.sortButton,
            { opacity: pressed ? 0.5 : 1 },
          ]}
          onPress={handleAddContact}
        >
          <Text style={styles.sortButtonText}>Add Contact</Text>
        </Pressable>
      </View>

      <ContactList
        contacts={contacts}
        onContactPress={(contact) => {
          Alert.alert('Edit Contact', `Editing ${contact.name}`);
        }}
        onContactDelete={(contactId) => handleDeleteContact(contactId)}
        onContactEdit={(editedContact) => handleEditContact(editedContact)}
      />
    </ScrollView>
  );
};

export default App;
