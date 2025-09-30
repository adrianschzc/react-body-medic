# react-body-medic

Componente de **React** que renderiza un modelo de cuerpo humano (vista frontal y posterior) y permite detectar la parte seleccionada mediante un callback (`onSelect`).  

Este paquete está pensado para aplicaciones **médicas, de salud o educativas**, donde sea necesario identificar partes del cuerpo y registrar información asociada (ej. notas médicas).

---

## 🚀 Instalación

```bash
npm install react-body-medic
# o con pnpm
pnpm add react-body-medic
# o con yarn
yarn add react-body-medic

## 📦 Uso básico

El siguiente ejemplo muestra cómo integrar el componente en tu aplicación y capturar la parte del cuerpo seleccionada:

```tsx
import { useState } from "react";
import { HumanBody } from "react-body-medic";
import "react-body-medic/dist/index.css"; // Importa los estilos de la librería

export default function App() {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <h1>Parte seleccionada: {selected}</h1>
      <HumanBody onSelect={setSelected} />
    </div>
  );
}

