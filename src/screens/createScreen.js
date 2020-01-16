import React, { useContext, useState } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';


const CreateScreen = () => {
    const [title, setTitle] = useState('');
    const [content,setContent] = useState('');

    return (
        <View>
            <Text style={Styles.label}>Enter Title </Text>
            <TextInput style={Styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
            <Text style={Styles.label}>Enter Content </Text>
            <TextInput style={Styles.input} value={content} onChangeText={(text) => setContent(text)}/>
            <Button title="Add Blog Post"/>
        </View>
    )

}

const Styles = StyleSheet.create({
    input:{
        fontSize: 18,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 15,
        margin: 5,
        padding: 5
    },
    label:{
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default CreateScreen;
