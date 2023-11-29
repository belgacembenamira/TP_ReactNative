/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 25/11/2023 - 04:04:08
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import { Contact } from "./Contact";


export interface ContactFormProps {
  onSubmit: (contact: Contact) => void;
  initialContact?: Contact | null; // Permettre null en plus de Contact et undefined
}
