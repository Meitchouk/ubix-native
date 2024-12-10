export const usePlateDetails = (plateId: number) => {
    const plates = [
        { id: 1, plateNumber: 'ABC123', ownerName: 'John Doe', fines: [{ id: 1, description: 'Speeding' }] },
        { id: 2, plateNumber: 'XYZ789', ownerName: 'Jane Smith', fines: [{ id: 2, description: 'Parking Violation' }] },
    ];

    const plate = plates.find((p) => p.id === plateId);
    const fines = plate ? plate.fines : [];

    return { plate, fines };
};
