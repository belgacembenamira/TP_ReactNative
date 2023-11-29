import { Contact } from "./Contact";

/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 25/11/2023 - 03:41:17
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2023
    * - Author          : belgacem
    * - Modification    : 
**/
export interface ContactItemProps {
    contact: Contact;
    onEdit: () => void;
    onDelete: () => void;
  }