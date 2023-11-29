/**
 * @description      : Composant pour afficher un contact individuel dans la liste
 * @author           : belgacem
 * @group            : 
 * @created          : 25/11/2023 - 03:44:30
 * 
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 25/11/2023
 * - Author          : belgacem
 * - Modification    : 
**/
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ContactItemProps } from '../interfaces/ContactItem';

const ContactItem: React.FC<ContactItemProps> = ({ contact, onEdit, onDelete }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{contact.name}</Text>
      <Text style={styles.email}>{contact.email}</Text>
      <Text style={styles.status}>{contact.status}</Text>
      <TouchableOpacity style={styles.button} onPress={onEdit}>
        <Text style={styles.buttonText}>Modifier</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onDelete}>
        <Text style={styles.buttonText}>Supprimer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    color: 'gray',
  },
  status: {
    marginTop: 4,
    fontStyle: 'italic',
  },
  button: {
    marginTop: 8,
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ContactItem;
