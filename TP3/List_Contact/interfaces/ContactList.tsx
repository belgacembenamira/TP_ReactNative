import { Contact } from "./Contact";

/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 25/11/2023 - 03:41:59
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2023
    * - Author          : belgacem
    * - Modification    : 
**/
export interface ContactListProps {
    contacts: Contact[];
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
  }