// src/images.d.ts
declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

// Puedes agregar otros tipos de imágenes que estés usando como SVG, GIF, etc.
