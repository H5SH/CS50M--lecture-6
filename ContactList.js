import React from "react"
import { SectionList, Text } from "react-native"
import Row from "./Row"
import contacts from "./contacts"


renderItem = obj => <Row {...obj.item} />
renderSectionHeader = obj => <Text>{obj.section.title}</Text>


const ContactList = props => {
    const ContactsByletter = props.contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase()
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact],
        }
    }, {})

   const sections = Object.keys(ContactsByletter).sort().map(letter => ({
    title: letter,
    data: ContactsByletter[letter]
   }))


    return (
<SectionList
        renderItem = {this.renderItem}
        renderSectionHeader={this.renderSectionHeader}
        sections={sections}
        />
)}


export default ContactList