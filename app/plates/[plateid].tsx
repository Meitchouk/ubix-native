import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Chip, Title, Caption, Subheading, Divider } from 'react-native-paper';
import { useLocalSearchParams } from 'expo-router';
import PageHeader from 'src/components/PageHeader';
import dateTimeUtils from 'src/utils/dateTimeUtils';
import { getTrafficTickets } from 'src/api/platesApi';

const mockTrafficTicket = {
    media: 'physical',
    document: 'ABC123456',
    sanctionType: 'Speeding',
    status: 'Unpaid',
    details: {
        number: '56789',
        type: 'Traffic Violation',
        date: '2024-11-26',
        time: '14:30',
        address: 'Main Street, City Center',
        code: 'S123',
        description: 'Exceeded speed limit by 20 km/h.',
        fled: false,
        secretary: 'Municipal Transit Secretary',
    },
    amount: {
        value: 200,
        interes: 15,
        cost: 10,
    },
    resolution: {
        date: '2024-11-28',
        number: 'R123456',
    },
};

export default function PlateDetails() {
    const { plateNumber } = useLocalSearchParams() as { plateNumber: string };
    const [isLoading, setIsLoading] = useState(true);

    const fetchTrafficTickets = async () => {
        const result = await getTrafficTickets(plateNumber);
        if (result.success) {
            console.log(result.data);
        } else {
            console.error(result.message);
        }
    }

    useEffect(() => {
        fetchTrafficTickets();
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 1500); // Simular carga
        return () => clearTimeout(timeout);
    }, []);

    const renderSkeletonCard = () => (
        <Card style={styles.card}>
            <Card.Content>
                <View style={[styles.skeletonBlock, { width: '50%', height: 20, marginBottom: 12 }]} />
                <View style={[styles.skeletonBlock, { width: '80%', height: 15, marginBottom: 10 }]} />
                <View style={[styles.skeletonBlock, { width: '70%', height: 15 }]} />
            </Card.Content>
        </Card>
    );

    if (isLoading) {
        return (
            <View style={styles.container}>
                <PageHeader
                    title="Loading..."
                    showBackButton
                    backButtonIcon="arrow-back"
                    backgroundColor="#6200ee"
                    titleStyle={{ color: '#fff' }}
                />
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    {renderSkeletonCard()}
                    {renderSkeletonCard()}
                    {renderSkeletonCard()}
                    {renderSkeletonCard()}
                </ScrollView>
            </View>
        );
    }

    const { media, document, sanctionType, status, details, amount, resolution } = mockTrafficTicket;

    return (
        <View style={styles.container}>
            <PageHeader
                title={`Plate ${plateNumber} Details`}
                showBackButton
                backButtonIcon="arrow-back"
                backgroundColor="#6200ee"
                titleStyle={{ color: '#fff' }}
            />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* General Information */}
                <Card style={styles.card}>
                    <Card.Content>
                        <Title style={styles.sectionTitle}>General Information</Title>
                        <View style={styles.row}>
                            <Caption>Media:</Caption>
                            <Chip style={styles.chip}>{media === 'physical' ? 'Physical' : 'Virtual'}</Chip>
                        </View>
                        <View style={styles.row}>
                            <Caption>Document:</Caption>
                            <Subheading style={styles.value}>{document}</Subheading>
                        </View>
                        <View style={styles.row}>
                            <Caption>Sanction Type:</Caption>
                            <Subheading style={styles.value}>{sanctionType}</Subheading>
                        </View>
                        <View style={styles.row}>
                            <Caption>Status:</Caption>
                            <Chip style={status === 'Unpaid' ? styles.unpaidChip : styles.paidChip}>
                                {status}
                            </Chip>
                        </View>
                    </Card.Content>
                </Card>

                {/* Details */}
                <Card style={styles.card}>
                    <Card.Content>
                        <Title style={styles.sectionTitle}>Details</Title>
                        {[
                            { label: 'Number', value: details.number },
                            { label: 'Type', value: details.type },
                            { label: 'Date', value: dateTimeUtils.formatDate(details.date || '') },
                            { label: 'Time', value: dateTimeUtils.formatTime(details.time || '00:00') },
                            { label: 'Address', value: details.address || 'N/A' },
                            { label: 'Code', value: details.code || 'N/A' },
                            { label: 'Description', value: details.description || 'N/A' },
                            { label: 'Fled', value: details.fled ? 'Yes' : 'No' },
                            { label: 'Secretary', value: details.secretary || 'N/A' },
                        ].map((item, index) => (
                            <View key={index} style={styles.row}>
                                <Caption>{item.label}:</Caption>
                                <Subheading style={styles.value}>{item.value}</Subheading>
                            </View>
                        ))}
                    </Card.Content>
                </Card>

                {/* Amount Information */}
                <Card style={[styles.card, styles.amountCard]}>
                    <Card.Content>
                        <Title style={styles.sectionTitle}>Amount Information</Title>
                        <View style={styles.row}>
                            <Caption>Value:</Caption>
                            <Subheading style={styles.value}>${amount.value.toFixed(2)}</Subheading>
                        </View>
                        <View style={styles.row}>
                            <Caption>Interest:</Caption>
                            <Subheading style={styles.value}>${amount.interes.toFixed(2)}</Subheading>
                        </View>
                        <View style={styles.row}>
                            <Caption>Additional Cost:</Caption>
                            <Subheading style={styles.value}>${amount.cost.toFixed(2)}</Subheading>
                        </View>
                        <Divider style={styles.divider} />
                        <View style={styles.row}>
                            <Text style={styles.totalLabel}>Total:</Text>
                            <Text style={styles.total}>${(amount.value + amount.interes + amount.cost).toFixed(2)}</Text>
                        </View>
                    </Card.Content>
                </Card>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    scrollContent: {
        padding: 16,
    },
    card: {
        marginVertical: 12,
        borderRadius: 12,
        elevation: 3,
        backgroundColor: '#ffffff',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6200ee',
        marginBottom: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 6,
    },
    value: {
        fontSize: 16,
        color: '#333',
    },
    chip: {
        backgroundColor: '#e3f2fd',
    },
    unpaidChip: {
        backgroundColor: '#ffebee',
        color: '#d32f2f',
    },
    paidChip: {
        backgroundColor: '#e8f5e9',
        color: '#388e3c',
    },
    divider: {
        marginVertical: 8,
    },
    amountCard: {
        backgroundColor: '#f8f2ff',
    },
    skeletonHeader: {
        width: '100%',
        height: 60,
        marginBottom: 16,
    },
    skeletonCard: {
        width: '100%',
        height: 1000,
        borderRadius: 12,
        marginBottom: 16,
    },
    placeholderCard: {
        width: '90%',
        borderRadius: 12,
        backgroundColor: '#e0e0e0',
        marginBottom: 16,
    },
    skeletonBlock: {
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        marginBottom: 8,
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555',
    },
    total: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6200ee',
    },
});
