/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 25/11/2023 - 04:00:14
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 25/11/2023
    * - Author          : belgacem
    * - Modification    : 
**/
export type Contact = {
  id: number;
  name: string;
  email: string;
  status: string;
  createdDate: Date; // Utilisation de la classe Date pour la propriété createdDate
};
