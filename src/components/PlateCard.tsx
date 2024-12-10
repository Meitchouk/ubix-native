import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export type PlateType =
    | 'particular'
    | 'publico'
    | 'oficial'
    | 'diplomatico'
    | 'remolque'
    | 'carga'
    | 'clasico';

type ColombianPlateCardProps = {
    plateNumber: string; // Número de la placa
    type: PlateType; // Tipo de placa
    onPress?: () => void; // Acción al presionar (opcional)
};

const ColombianPlateCard: React.FC<ColombianPlateCardProps> = ({
    plateNumber,
    type,
    onPress,
}) => {
    const plateStyles = stylesByType[type];
    const typeText = type.charAt(0).toUpperCase() + type.slice(1); // Capitalizar tipo de placa

    return (
        <View style={[styles.container, plateStyles.container]} onTouchEnd={onPress}>
            <View style={[styles.card, plateStyles.card]}>
                {/* Texto superior: tipo de placa */}
                <Text style={[styles.topText, plateStyles.text]}>{typeText}</Text>
                {/* Número de placa */}
                <Text style={[styles.plateNumber, plateStyles.text]}>{plateNumber}</Text>
                {/* Texto inferior: siempre "COLOMBIA" */}
                <Text style={[styles.bottomText, plateStyles.text]}>COLOMBIA</Text>
            </View>
        </View>
    );
};

const stylesByType = {
    particular: {
        container: { borderColor: '#000' },
        card: { backgroundColor: '#FFD700', borderColor: '#000' }, // Amarillo
        text: { color: '#000' }, // Negro
    },
    publico: {
        container: { borderColor: '#000' },
        card: { backgroundColor: '#FFF', borderColor: '#000' }, // Blanco
        text: { color: '#000' }, // Negro
    },
    oficial: {
        container: { borderColor: '#000' },
        card: { backgroundColor: '#FFF', borderColor: '#0000FF' }, // Blanco con caracteres azules
        text: { color: '#0000FF' }, // Azul
    },
    diplomatico: {
        container: { borderColor: '#FFF' },
        card: { backgroundColor: '#0000FF', borderColor: '#FFF' }, // Azul
        text: { color: '#FFF' }, // Blanco
    },
    remolque: {
        container: { borderColor: '#000' },
        card: { backgroundColor: '#008000', borderColor: '#FFF' }, // Verde
        text: { color: '#FFF' }, // Blanco
    },
    carga: {
        container: { borderColor: '#000' },
        card: { backgroundColor: '#FF0000', borderColor: '#FFF' }, // Rojo
        text: { color: '#FFF' }, // Blanco
    },
    clasico: {
        container: { borderColor: '#000' },
        card: { backgroundColor: '#000080', borderColor: '#FFF' }, // Azul con franja blanca
        text: { color: '#FFF' }, // Blanco
    },
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 8,
        overflow: 'hidden',
    },
    card: {
        borderWidth: 4,
        borderRadius: 8,
        width: 300,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    topText: {
        position: 'absolute',
        top: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    plateNumber: {
        fontSize: 60,
        fontWeight: 'bold',
        letterSpacing: 2,
        textShadowColor: 'rgba(0, 0, 0, 0.7)', // Sombra en el texto
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
    },
    bottomText: {
        position: 'absolute',
        bottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default ColombianPlateCard;
