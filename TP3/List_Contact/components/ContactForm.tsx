/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 25/11/2023 - 04:05:25
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2023
    * - Author          : belgacem
    * - Modification    : 
**/

import { useState } from "react";
import { View, TextInput, Button,Text } from "react-native";
import { Contact } from "../interfaces/Contact";
import { ContactFormProps } from "../interfaces/ContactFormProps";


export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, initialContact }) => {
  const [name, setName] = useState(initialContact?.name || '');
  const [email, setEmail] = useState(initialContact?.email || '');
  const [status, setStatus] = useState(initialContact?.status || '');

  const handleSubmit = () => {
    const contact: Contact = {
      id: initialContact?.id || Date.now(),
      name,
      email,
      status,
      createdDate: initialContact?.createdDate || new Date(),
    };

    onSubmit(contact);
  };

  return (
    <View>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Status:</Text>
      <TextInput value={status} onChangeText={setStatus} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};
