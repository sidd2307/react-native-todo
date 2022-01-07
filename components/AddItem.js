import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// packages import
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function AddItem(props) {

    const [text, setText] = useState('')

    const onChange = (textValue) => setText(textValue)

    return (
        <View>
            <TextInput placeholder='Add Item...' style={styles.input} onChangeText={onChange} />
            <TouchableOpacity style={styles.btn} onPress={() => props.addItem(text)}>
                <Text style={styles.btnText}>
                    <Icon name='plus' size={20} />
                    Add Item
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        margin: 5,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    },
});
