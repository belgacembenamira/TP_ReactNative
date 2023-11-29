/**
 * @description      : Types pour la navigation et les contacts
 * @author           : belgacem
 * @group            : 
 * @created          : 25/11/2023 - 01:55:39
 * 
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 25/11/2023
 * - Author          : belgacem
 * - Modification    : 
**/

// Import de la classe Date
export type RootStackParamList = {
  ContactList: undefined;
  ContactForm: { initialContact: Contact | null };
};

export type Contact = {
  id: number;
  name: string;
  email: string;
  status: string;
  createdDate: Date; // Utilisation de la classe Date pour la propriété createdDate
};
