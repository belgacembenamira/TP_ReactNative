/**
 * @description      : Écran pour le formulaire de contact
 * @author           : belgacem
 * @group            : 
 * @created          : 25/11/2023 - 03:43:59
 * 
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 25/11/2023
 * - Author          : belgacem
 * - Modification    : 
**/

import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Contact } from "../interfaces/Contact";
import { RootStackParamList } from "../interfaces/RootStackParamList";
import React from "react";
import { ContactForm } from "./ContactForm";

type ContactFormScreenRouteProp = RouteProp<RootStackParamList, 'ContactForm'>;
type ContactFormScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ContactForm'>;

interface ContactFormScreenProps {
  route: ContactFormScreenRouteProp;
  navigation: ContactFormScreenNavigationProp;
}

const ContactFormScreen: React.FC<ContactFormScreenProps> = ({ route, navigation }) => {
  const { initialContact } = route.params;

  return (
    <ContactForm
      initialContact={initialContact}
      onSubmit={(contact: Contact) => {
        // Gérer la logique de soumission
        console.log('Contact soumis :', contact);

        // Naviguer vers ContactList après la soumission (ajuster si nécessaire)
        navigation.goBack();
      }}
    />
  );
};

export default ContactFormScreen;
