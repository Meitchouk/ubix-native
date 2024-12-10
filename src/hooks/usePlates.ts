import { useState } from 'react';

export const usePlates = () => {
    const [plates, setPlates] = useState([
        { id: 1, plateNumber: 'ABC123', ownerName: 'John Doe' },
        { id: 2, plateNumber: 'XYZ789', ownerName: 'Jane Smith' },
    ]);

    const addPlate = (plate: { id: number; plateNumber: string; ownerName: string; }) => {
        setPlates([...plates, { ...plate, id: plates.length + 1 }]);
    };

    return { plates, addPlate };
};
