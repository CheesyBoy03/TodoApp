import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3949ab',
        paddingTop: 15,
        paddingBottom: 7,
    },
    text: {
        color: '#fff',
        fontSize: 24,
    }
});