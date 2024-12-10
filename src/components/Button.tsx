import React from 'react';
import { Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';

type ButtonProps = {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    disabled?: boolean;
    style?: object;
};

const Button: React.FC<ButtonProps> = ({ title, onPress, disabled = false, style = {} }) => {
    return (
        <TouchableOpacity
            style={[styles.button, disabled ? styles.disabled : styles.enabled, style]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    enabled: {
        backgroundColor: '#007AFF',
    },
    disabled: {
        backgroundColor: '#ccc',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Button;
