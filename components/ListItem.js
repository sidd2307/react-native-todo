import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// packages import
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function ListItem(props) {
    return (
        <TouchableOpacity style={styles.listitem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{props.item.text}</Text>
                <Icon name="remove" size={20} color="firebrick" onPress={() => props.deleteItem(props.item.id)} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listitem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 18,
        color: '#000000',
    }
});
