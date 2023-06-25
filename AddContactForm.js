import React from "react";
import { KeyboardAvoidingView, Button, TextInput, StyleSheet, View } from "react-native";



export default class AddContactForm extends React.Component{
    state = {
        name: '',
        phone: '',
        isFormValid: false
    }

    componentDidUpdate(prevProps, prevState){
        if (this.state.name !== prevState.name || this.state.phone !== prevState.phone)
        {
            this.validateForm()
        }
    }

    validateForm = () => {
        if (+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length > 0)
        {
            this.setState({isFormValid: true})
        }
        else{
            this.setState({isFormValid: false})
        }

    }

    validateForm2 = () => {
        if (+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length > 0)
        {
            this.setState({isFormValid: true})
        }
        else{
            this.setState({isFormValid: false})
        }

    }

    getHandler = key => val => {
            this.setState({[key]: val})
        }


    handleNameChange = name => {
        this.setState({name}, this.validateForm)
    }

    handlePhoneChange = phone => {
        if (phone.length <= 10)
        {
            this.setState({phone}, this.validateForm)
        }
        
    }

    handleSubmit = ()=> {
        if (+this.state.phone >= 0 && this.state.phone.lenght === 10 && this.state.name.length > 0)
        {
            this.props.onSubmit({...this.state})
        }
        
    }

    render(){
        return (
            <KeyboardAvoidingView Behaviour='padding' style={styles.container}>
                <TextInput value={this.state.name} 
                style={styles.input} 
                onChangeText={this.handleNameChange}/>

                <TextInput value={this.state.phone} 
                style={styles.input} 
                onChangeText={this.handlePhoneChange} 
                keyboardType="numeric"/>
                <Button title='Submit' onPress={this.handleSubmit} disabled={!this.state.isFormValid}/>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        minWidth: 100,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3
    }
})