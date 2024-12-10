# Ubix - Native

Application developed in React Native, designed to consult and visualize clearly and efficiently the active fines associated with a vehicle license plate in Colombia. This tool allows users to easily access information about traffic violations, facilitating the management and tracking of their vehicle obligations.

## Project Structure

This project uses a modular and scalable structure. Below is an explanation of each folder's purpose and usage.

```plaintext
app/
app/
├── plates/
│   ├── [plateId].tsx         # Detalles de una placa
├── add-plate.tsx             # Pantalla para agregar placas
├── index.tsx                 # Pantalla principal (lista de placas)
├── _layout.tsx               # (opcional, se puede eliminar)
src/
├── api/                 # Lógica para interactuar con la API
│   ├── apiClient.ts
│   └── platesApi.ts
├── assets/              # Archivos estáticos (fuentes, imágenes)
│   ├── fonts/
│   └── images/
├── components/          # Componentes reutilizables
│   ├── Button.tsx
│   ├── Input.tsx
│   └── PlateCard.tsx
├── constants/           # Constantes globales
│   └── Colors.ts
├── hooks/               # Hooks personalizados
│   ├── usePlateDetails.ts
│   └── usePlates.ts
├── types/               # Tipos globales
│   └── router.d.ts
.gitignore
app.json
etc
```

## Folder Details

### 1. **navigation**

- **Purpose:** Contains all navigation-related logic and layouts.
- **Usage:** Configures navigators (tabs, stack, etc.) and reusable modal layouts.

### 2. **screens**

- **Purpose:** Groups all the main screens of the application.
- **Usage:** Each screen is represented as a separate file.

### 3. **components**

- **Purpose:** Stores reusable UI components for use across the app.
- **Usage:** Examples include buttons, headers, and text components.

### 4. **hooks**

- **Purpose:** Contains reusable hooks for encapsulating logic.
- **Usage:** Examples include hooks for theme handling or fetching data.

### 5. **constants**

- **Purpose:** Stores global constants such as color palettes or configuration values.

### 6. **assets**

- **Purpose:** Static resources like fonts and images.
- **Usage:** Fonts are stored in `assets/fonts/`, and images in `assets/images/`.

## 🚀 About Me

I am a passionate Fullstack Developer from Nicaragua 🚀, currently focused on developing applications using React Native. With a solid foundation in both frontend and backend development, I specialize in creating seamless, user-friendly mobile experiences. My approach combines modern technologies and best practices to optimize system performance and enhance user engagement. I thrive in collaborative environments and am always eager to learn and adapt to new challenges in the dynamic world of mobile app development.
