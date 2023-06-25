import React from 'react';
import { Button, ScrollView, Stylesheet, Text,View, StyleSheet, FlatList, SectionList } from 'react-native';
import { Constants } from 'expo-constants';
import contacts, {compareNames} from './contacts';
import Row from './Row';
import ContactList from './ContactList';
import AddContactForm from './AddContactForm';



export default class App extends React.Component {
  state = {
    showContacts: true,
    showForm: false,
    contacts : contacts
  }

  addContact = newContact => {
    this.setState(prevState => ({contacts: [...prevState.contacts, newContact], showForm: false}))
  }

  toggleContacts = () => {
    this.setState(prevState => ({
      showContacts: !prevState.showContacts
    }))
  }

  toggleForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm
    }))
  }

  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames)
      }))
  }
  


  render() {
    if (this.state.showForm) return <AddContactForm onSubmit={this.addContact}/>
    return (
      <View style={styles.container}>
        <Button title='toggle contacts' onPress={this.toggleContacts} />
        <Button title="Add Contact" onPress={this.toggleForm} />
        {this.state.showContacts && (
          <ContactList 
           contacts={this.state.contacts}/>
        )}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 5
  },
});
