import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type PageHeaderProps = {
    title: string; // Título del encabezado
    showBackButton?: boolean; // Mostrar el botón de regreso
    onBackPress?: () => void; // Acción personalizada al presionar el botón de regreso
    backButtonIcon?: keyof typeof Ionicons.glyphMap; // Icono del botón de regreso, restringido a nombres válidos
    backgroundColor?: string; // Color de fondo del encabezado
    titleStyle?: TextStyle; // Estilo personalizado para el título
    containerStyle?: ViewStyle; // Estilo personalizado para el contenedor
};

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    showBackButton = true,
    onBackPress,
    backButtonIcon = 'arrow-back',
    backgroundColor = '#f4f4f4',
    titleStyle,
    containerStyle,
}) => {
    const router = useRouter();

    const handleBackPress = () => {
        if (onBackPress) {
            onBackPress();
        } else {
            router.back();
        }
    };

    return (
        <View style={[styles.container, { backgroundColor }, containerStyle]}>
            {showBackButton && (
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={handleBackPress}
                    accessibilityLabel="Go back"
                >
                    <Ionicons name={backButtonIcon} size={24} color="#333" />
                </TouchableOpacity>
            )}
            <Text style={[styles.title, titleStyle]}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        elevation: 3, // Sombra para Android
        shadowColor: '#000', // Sombra para iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    backButton: {
        marginRight: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default PageHeader;
