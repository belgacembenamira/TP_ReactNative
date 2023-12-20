/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 20/12/2023 - 11:20:26
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const CommandeForm = () => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [isProductNameValid, setIsProductNameValid] = useState(true);
  const [isQuantityValid, setIsQuantityValid] = useState(true);
  const [isPriceValid, setIsPriceValid] = useState(true);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    setIsSubmitEnabled(validateForm());
  }, [productName, quantity, price]);

  const validateForm = () => {
    const isProductNameValid = !!productName;
    const isQuantityValid = !isNaN(parseFloat(quantity)) && parseFloat(quantity) > 0;
    const isPriceValid = !isNaN(parseFloat(price)) && parseFloat(price) > 0;

    setIsProductNameValid(isProductNameValid);
    setIsQuantityValid(isQuantityValid);
    setIsPriceValid(isPriceValid);

    return isProductNameValid && isQuantityValid && isPriceValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Process the submission logic here

      setProductName('');
      setQuantity('');
      setPrice('');
      setIsFormSubmitted(true);

      Alert.alert('Succès', 'Commande soumise avec succès!');
    } else {
      setIsFormSubmitted(false);
    }
  };

  return (
    <View style={styles.container}>
      {!isFormSubmitted && (
        <>
          <Text style={styles.label}>Nom du Produit:</Text>
          <TextInput
            style={[styles.input, !isProductNameValid && styles.inputError]}
            value={productName}
            onChangeText={text => setProductName(text)}
            placeholder="Entrez le nom du produit"
          />

          <Text style={styles.label}>Quantité:</Text>
          <TextInput
            style={[styles.input, !isQuantityValid && styles.inputError]}
            value={quantity}
            onChangeText={text => setQuantity(text)}
            keyboardType="numeric"
            placeholder="Entrez la quantité"
          />

          <Text style={styles.label}>Prix:</Text>
          <TextInput
            style={[styles.input, !isPriceValid && styles.inputError]}
            value={price}
            onChangeText={text => setPrice(text)}
            keyboardType="numeric"
            placeholder="Entrez le prix"
          />

          <TouchableOpacity
            style={[styles.button, !isSubmitEnabled && styles.buttonDisabled]}
            onPress={handleSubmit}
            disabled={!isSubmitEnabled}
          >
            <Text style={styles.buttonText}>Soumettre</Text>
          </TouchableOpacity>
        </>
      )}

      {isFormSubmitted && (
        <View style={styles.successMessage}>
          <Text style={styles.successText}>Commande soumise avec succès!</Text>
        </View>
      )}

      {!isFormSubmitted && !isSubmitEnabled && (
        <View style={styles.errorMessage}>
        <Text style={styles.errorText}>
          Veuillez remplir tous les champs correctement. Assurez-vous que :
          {"\n\n"}
          - Le nom du produit est renseigné.
          {"\n"}
          - La quantité est un nombre positif.
          {"\n"}
          - Le prix est un nombre positif.
        </Text>
      </View>
      
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  inputError: {
    borderColor: 'red',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  successMessage: {
    marginTop: 16,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
  },
  successText: {
    color: 'white',
    fontSize: 16,
  },
  errorMessage: {
    marginTop: 16,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
  },
  errorText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CommandeForm;
