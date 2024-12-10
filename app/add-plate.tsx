import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import PageHeader from '../src/components/PageHeader';

export default function AddPlate() {
    const [plateNumber, setPlateNumber] = useState('');
    const router = useRouter();

    const handleAddPlate = () => {
        console.log(`New plate added: ${plateNumber}`);
        setPlateNumber('');
        router.push('/'); // Vuelve a la pantalla principal
    };

    return (
        <View style={styles.container}>
            <PageHeader title="Add Plate" />
            <View style={styles.content}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Plate Number"
                    value={plateNumber}
                    onChangeText={setPlateNumber}
                />
                <Button title="Add Plate" onPress={handleAddPlate} />
                <Button title="Cancel" onPress={() => router.push('/')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    content: {
        padding: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 16,
        borderRadius: 4,
    },
});
