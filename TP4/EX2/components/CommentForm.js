/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 20/12/2023 - 12:03:26
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/12/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button, View, Text, StyleSheet } from 'react-native';

const CommentForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data); // Faire quelque chose avec les données du formulaire
    setIsFormSubmitted(true);
    // Ajoutez ici votre logique pour traiter la soumission du formulaire
  };

  const inputProps = {
    style: styles.input,
    placeholderTextColor: 'gray',
  };

  return (
    <View style={styles.container}>
      {/* Nom */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nom</Text>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              {...inputProps}
              placeholder="Entrez votre nom"
            />
          )}
          name="name"
          rules={{ required: 'Le nom est requis' }}
        />
        {errors.name && isFormSubmitted && (
          <Text style={styles.error}>{errors.name.message}</Text>
        )}
      </View>

      {/* Commentaire */}
      <View style={styles.formGroup}>
        <Text style={styles.label}>Commentaire</Text>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              {...inputProps}
              style={[styles.input, styles.multilineInput]}
              multiline
              placeholder="Entrez votre commentaire"
            />
          )}
          name="comment"
          rules={{ required: 'Le commentaire est requis' }}
        />
        {errors.comment && isFormSubmitted && (
          <Text style={styles.error}>{errors.comment.message}</Text>
        )}
      </View>

      {/* Gestion des erreurs générales */}
      {Object.keys(errors).length > 0 && isFormSubmitted && (
        <Text style={styles.error}>Veuillez corriger les erreurs ci-dessus.</Text>
      )}

      {/* Message de succès */}
      {isFormSubmitted && Object.keys(errors).length === 0 && (
        <Text style={styles.successMessage}>Formulaire soumis avec succès !</Text>
      )}

      {/* Bouton Soumettre */}
      <Button title="Soumettre" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
    borderRadius: 4,
    color: 'black',
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
  successMessage: {
    color: 'green',
    marginBottom: 8,
  },
});

export default CommentForm;
