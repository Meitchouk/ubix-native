import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { FAB, Divider } from 'react-native-paper';
import PageHeader from '../src/components/PageHeader';
import ColombianPlateCard, { PlateType } from '../src/components/PlateCard';

const plates: { number: string; type: PlateType }[] = [
    { number: 'lmk081', type: 'particular' },
    // { number: 'XYZ789', type: 'publico' },
    // { number: 'DEF456', type: 'oficial' },
    // { number: 'GHI789', type: 'diplomatico' },
    // { number: 'JKL012', type: 'remolque' },
    // { number: 'MNO345', type: 'carga' },
    // { number: 'PQR678', type: 'clasico' },
    // { number: 'STU901', type: 'particular' },
    // { number: 'VWX234', type: 'oficial' },
    // { number: 'YZA567', type: 'publico' },
];

export default function PlatesList() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <PageHeader
                title="My Plates"
                showBackButton={false}
                backgroundColor="#6200ee"
                titleStyle={{ color: '#fff' }}
                containerStyle={{ borderBottomColor: 'transparent' }}
            />
            <FlatList
                data={plates}
                keyExtractor={(item) => item.number}
                renderItem={({ item }) => (
                    <View>
                        <ColombianPlateCard
                            plateNumber={item.number}
                            type={item.type}
                            onPress={() => router.push(`/plates/detail?plateNumber=${item.number}`)}
                        />
                        <Divider style={styles.divider} />
                    </View>
                )}
                contentContainerStyle={styles.listContent}
            />
            <FAB
                style={styles.fab}
                icon="plus"
                label="Add Plate"
                onPress={() => router.push('/add-plate')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    listContent: {
        paddingHorizontal: 40,
        paddingBottom: 80,
    },
    divider: {
        marginVertical: 10,
        color: '#ccc',
    },
    fab: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        backgroundColor: '#6200ee',
    },
});
