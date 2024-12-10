export type RootStackParamList = {
    PlatesScreen: undefined; // No recibe parámetros
    PlateDetailScreen: { plateId: string }; // Recibe `plateId`
    AddPlateScreen: undefined; // No recibe parámetros
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
