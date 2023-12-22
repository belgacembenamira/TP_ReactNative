/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 22/12/2023 - 22:52:34
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ContactList = () => {
  const navigation = useNavigation();

  const initialContacts = [
    { id: "1", name: "John Doe", email: "john@example.com", status: "Active" },
    {
      id: "2",
      name: "Jane Doe",
      email: "jane@example.com",
      status: "Inactive",
    },
  ];

  const [isAdding, setIsAdding] = useState(false);

  const handleAddModal = () => {
    setIsAdding(true);
    clearInputFields();
  };

  const handleAddContactModal = () => {
    setIsAdding(false);
    handleAddContact();
  };

  const handleCancelAddContactModal = () => {
    setIsAdding(false);
    clearInputFields();
  };


  

  const [contacts, setContacts] = useState(initialContacts);
  const [filteredContacts, setFilteredContacts] = useState(initialContacts);
  const [searchText, setSearchText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editContact, setEditContact] = useState(null);

  // State variables for the Add/Edit Contact modal
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    updateFilteredContacts();
  }, [contacts, searchText]);

  const handleAddContact = () => {
    if (!name || !email || !status) {
      alert("Please fill in all fields.");
      return;
    }

    const newContact = { id: String(new Date().getTime()), name, email, status };
    setContacts([...contacts, newContact]);
    clearInputFields();
  };

  const handleEditContact = () => {
    if (!name || !email || !status) {
      alert("Please fill in all fields.");
      return;
    }

    const updatedContacts = contacts.map(
      (contact) =>
        editContact && contact.id === editContact.id
          ? { ...contact, name, email, status }
          : contact
    );

    setContacts(updatedContacts);
    setIsEditing(false);
    setEditContact(null);
    clearInputFields();
  };

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    setEditContact(null);
  };

  const handleSearchContacts = (text) => {
    setSearchText(text);
    updateFilteredContacts();
  };

  const updateFilteredContacts = () => {
    let filtered = [...contacts];

    if (searchText) {
      filtered = filtered.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchText.toLowerCase()) ||
          contact.email.toLowerCase().includes(searchText.toLowerCase()) ||
          contact.status.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredContacts(filtered);
  };

  const clearInputFields = () => {
    setName("");
    setEmail("");
    setStatus("");
  };

  return (
  
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <Text style={styles.pageTitle}>Contact List</Text>

      <TouchableOpacity onPress={handleAddModal} style={styles.button}>
        <Text>Add Contact</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Filter by name, email, or status"
        onChangeText={(text) => handleSearchContacts(text)}
        style={styles.searchInput}
      />

      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, name, email, status } }) => (
          <View style={styles.contactItem}>
            <TouchableOpacity
              onPress={() => {
                setIsEditing(true);
                setEditContact({ id, name, email, status });
                setName(name);
                setEmail(email);
                setStatus(status);
              }}
            >
              <Text>{name}</Text>
              <Text>{email}</Text>
              <Text>{status}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeleteContact(id)}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Modal visible={isAdding} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add Contact</Text>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.inputField}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.inputField}
          />
          <TextInput
            placeholder="Status"
            value={status}
            onChangeText={(text) => setStatus(text)}
            style={styles.inputField}
          />
          <TouchableOpacity onPress={handleAddContactModal} style={styles.button}>
            <Text>Add Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCancelAddContactModal} style={styles.button}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal visible={isEditing} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>
            {isEditing ? "Edit Contact" : "Add Contact"}
          </Text>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.inputField}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.inputField}
          />
          <TextInput
            placeholder="Status"
            value={status}
            onChangeText={(text) => setStatus(text)}
            style={styles.inputField}
          />
          <TouchableOpacity onPress={isEditing ? handleEditContact : handleAddContact} style={styles.button}>
            <Text>{isEditing ? "Save Changes" : "Add Contact"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsEditing(false)} style={styles.button}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  contactItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
    paddingBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputField: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    width: "100%",
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
});

export default ContactList;
