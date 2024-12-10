import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

type InputProps = {
    value: string;
    placeholder: string;
    onChangeText: (text: string) => void;
    error?: string;
};

const Input: React.FC<InputProps> = ({ value, placeholder, onChangeText, error }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, error && styles.inputError]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
    },
    inputError: {
        borderColor: '#FF3B30',
    },
    errorText: {
        marginTop: 4,
        color: '#FF3B30',
        fontSize: 12,
    },
});

export default Input;
