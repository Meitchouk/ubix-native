import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type EmptyStateProps = {
    message: string;
    imageSource?: any;
};

const EmptyState: React.FC<EmptyStateProps> = ({ message, imageSource }) => {
    return (
        <View style={styles.container}>
            {imageSource && <Image source={imageSource} style={styles.image} />}
            <Text style={styles.message}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 16,
    },
    message: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
    },
});

export default EmptyState;
