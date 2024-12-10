import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type BadgeProps = {
    count: number;
    color?: string;
};

const Badge: React.FC<BadgeProps> = ({ count, color = '#FF3B30' }) => {
    return (
        <View style={[styles.badge, { backgroundColor: color }]}>
            <Text style={styles.text}>{count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    badge: {
        minWidth: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 6,
    },
    text: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default Badge;
