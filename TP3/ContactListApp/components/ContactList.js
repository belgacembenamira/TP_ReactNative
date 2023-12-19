/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 19/12/2023 - 11:04:32
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
// ContactList.js
import React from "react";
import { FlatList, Text, View, Pressable, StyleSheet } from "react-native";

const ContactList = ({
  contacts,
  onContactPress,
  onContactDelete,
  onContactEdit,
}) => {
  const styles = StyleSheet.create({
    contactContainer: {
      marginBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
      paddingBottom: 8,
    },
    contactText: {
      fontSize: 16,
      marginBottom: 4,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    button: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    deleteButton: {
      backgroundColor: "red",
      padding: 8,
      borderRadius: 5,
    },
    deleteButtonText: {
      color: "white",
    },
  });

  return (
    <FlatList
      data={contacts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.contactContainer}>
          <Text style={styles.contactText}>{item.name}</Text>
          <Text style={styles.contactText}>{item.email}</Text>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => onContactPress(item)}
            >
              <Text>Edit</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.deleteButton,
                { opacity: pressed ? 0.5 : 1 },
              ]}
              onPress={() => onContactDelete(item.id)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </Pressable>
          </View>
        </View>
      )}
    />
  );
};

export default ContactList;
