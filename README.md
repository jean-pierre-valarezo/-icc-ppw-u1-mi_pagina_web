# Programación y Plataformas Web (PPW)

---

#  Práctica 1 – Explorando los Estándares Web con HTML, CSS y JavaScript

**Asignatura:** Programación y Plataformas Web  
**Unidad:** 1.2 – Estándares Web  
**Estudiante:** Jean Pierre Valarezo
**Repositorio:** [https://github.com/jean-pierre-valarezo/-icc-ppw-u1-mi_pagina_web.git](https://github.com/jean-pierre-valarezo/-icc-ppw-u1-mi_pagina_web.git)  
**Página desplegada (GitHub Pages):** [ https://jean-pierre-valarezo.github.io/-icc-ppw-u1-mi_pagina_web/]( https://jean-pierre-valarezo.github.io/-icc-ppw-u1-mi_pagina_web/)  

---

## 🧱 Estructura HTML utilizada

| Componente | Descripción | Implementación |
|-------------|--------------|----------------|
| `<!DOCTYPE html>` | Declaración del documento HTML5 | Línea 1 |
| `<html lang="es">` | Idioma del documento | Español |
| `<header>` | Encabezado principal | Contiene `<h1>` y `<h2>` |
| `<section>` | Agrupa contenido principal | Dos secciones con `<h2>` |
| `<table>` | Muestra los elementos estudiados | Tres filas con `<th>` y `<td>` |
| `<footer>` | Pie de página | Nombre del estudiante y asignatura |

---

## 🧩 Nuevas etiquetas exploradas

| Etiqueta | Descripción | Implementación |
|-----------|--------------|----------------|
| `<figure>` | Contenedor para imagen con pie de foto | Logo HTML5 con `<figcaption>` |
| `<article>` | Contenedor para un contenido independiente, como una noticia, publicación o bloque con sentido propio dentro del sitio. | Se usa para mostrar un texto o bloque informativo que puede entenderse por sí solo  |

**Código usado:**
```html
<figure>
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="Logo HTML5">
  <figcaption>Logo de HTML5</figcaption>
</figure>

<progress value="70" max="100">70%</progress>
```
#  Práctica 2 – Adición de CSS y JavaScript
---

### 1. Archivos agregados

| Archivo     | Descripción                                                                                         | Ubicación                 |
| ----------- | --------------------------------------------------------------------------------------------------- | ------------------------- |
| `style.css` | Contiene todos los estilos visuales del sitio (colores, tipografía, márgenes, botones, tabla, etc.) | Carpeta raíz del proyecto |
| `script.js` | Contiene las funciones y eventos JavaScript que agregan comportamiento dinámico                     | Carpeta raíz del proyecto |

Estructura final del proyecto:

```
icc-ppw-u1-mi_pagina_web/
│
├── index.html
├── style.css
├── script.js
└── README.md
```


---

### 2. Implementación en HTML

Los nuevos archivos se enlazaron dentro del documento `index.html` de la siguiente forma:

**En el `<head>` (para el CSS):**

```html
<link rel="stylesheet" href="style.css">

```

**Antes de cerrar el `<body>` (para el JavaScript):**

```html
<script src="script.js"></script>

```

---

### 3. Estilos aplicados con CSS

* COMLETAR LA TABLA

| Elemento                    | Estilo implementado                                            | Descripción                             |
| --------------------------- | -------------------------------------------------------------- | --------------------------------------- |
| `body`                      | background-color: #f8fafc; font-family: Arial, sans-serif; margin:  0;  |     Define el color de fondo, la fuente general y elimina márgenes.    |
| `header`                    | background-color: #0d6efd; color: #ffffff; text-align: center; padding: 16px;| Aplica color principal, centra el texto y agrega relleno interno. |
| `table`                     |      border-collapse: collapse; width: 100%;                   |  Une los bordes y ajusta el ancho total de la tabla.                |
| `button`                    | background-color: #0d6efd; color: #ffffff; border-radius: 6px; cursor: pointer; transition: background-color 0.4s; | Da color, bordes redondeados, efecto hover y transición suave.  |
| `section`                   | margin: 16px; padding: 16px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); | Separa visualmente las secciones, agrega bordes redondeados y sombra.         |
| `progress`                  | `accent-color: #007bff; width: 100%;`                          | Personalización de la barra de progreso |


**Ejemplo en el código:**

AGREGAR DOS EJEMPLOS DE SU CODIGO CSS

```css
button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
```

---

###  4. Interactividad agregada con JavaScript

El archivo `script.js` incorpora dos acciones básicas:

1. **Agregar una nueva fila a la tabla al presionar el botón**

   ```javascript
   document.getElementById("agregarFila").addEventListener("click", () => {
     const tabla = document.querySelector("table");
     const nuevaFila = tabla.insertRow();
     nuevaFila.innerHTML = "<td>&lt;article&gt;</td><td>Sección independiente del contenido</td>";
   });
   ```

2. **Cambiar el color del título al pasar el mouse por encima**

   ```javascript
   const titulo = document.getElementById("titulo");
   titulo.addEventListener("mouseover", () => {
     titulo.style.color = "orange";
   });
   titulo.addEventListener("mouseout", () => {
     titulo.style.color = "white";
   });
   ```


## Capturas de pantalla del proyecto final

* Agregar su captura de pantalla del proyecto final funcionando en el navegador, de ambas versiones (sin y con CSS/JS)
Con css
 <img width="1884" height="911" alt="Captura de pantalla 2025-10-16 170127" src="https://github.com/user-attachments/assets/901799ba-a625-41a1-bd1e-69bd80c13654" />>)
Sin css
<img width="1418" height="632" alt="Captura de pantalla 2025-10-16 172032" src="https://github.com/user-attachments/assets/fb2d067f-02b8-49ab-9971-8173091f229a" />
>)
