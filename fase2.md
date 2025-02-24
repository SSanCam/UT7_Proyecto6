* # Fase 2: Proyecto Arte 2D. 

--> [Enlace](https://docs.google.com/document/d/1M06P6n2zRPqyfYxvvwOTKkZrGGO719xsxR0WcdYOJwA/edit?usp=sharing) al documento en Drive.

## 1. Historia de Mantine.

* Mantine es una biblioteca de componentes para React enfocada en proporcionar una excelente experiencia tanto para desarrolladores como para usuarios. Su desarrollo comenzó en enero de 2021, y la versión 1.0 fue lanzada el 3 de mayo de 2021. Desde entonces, se han publicado más de 200 actualizaciones, reflejando un compromiso constante con la mejora y adaptación a las necesidades de la comunidad. 

* El proyecto es mantenido principalmente por Vitaly Rtishchev, junto con la colaboración de más de 300 contribuyentes. Esta participación activa de la comunidad ha sido clave en la incorporación de nuevas características y componentes, basándose en el feedback y las necesidades expresadas por los usuarios. 

* Mantine se distingue por su enfoque en la compatibilidad con navegadores modernos y su ciclo de lanzamientos regular. Las versiones menores suelen publicarse mensualmente, mientras que las mayores se planifican aproximadamente cada seis meses o un año, asegurando así una evolución constante y estructurada de la biblioteca. 

--- 

## 2. Instalación/forma de uso.

Mantine se instala principalmente mediante gestores de paquetes como npm o  yarn, aunque también hay otras formas de incorporarlo en un proyecto, dependiendo del entorno y los requisitos. Las diferentes maneras que he encontrado:

 ### 1️⃣ Instalación mediante npm o yarn:

La forma estándar de instalar Mantine en un proyecto React:

```bash
# Con npm
npm install @mantine/core @mantine/hooks @emotion/react
# Con yarn
yarn add @mantine/core @mantine/hooks @emotion/react
```

* **@mantine/core** → Contiene todos los componentes de UI (botones, modales, inputs, etc.).
* **@mantine/hooks** → Incluye hooks útiles para gestionar estados, eventos y comportamiento.
* **@emotion/react** → Es una dependencia necesaria para el sistema de estilos de Mantine.

Esta opción es la mejor si usas un gestor de paquetes y deseas control total sobre las dependencias.

### 2️⃣ Uso desde un CDN (sin instalación)

Un CDN (Content Delivery Network o Red de Distribución de Contenidos) es una red de servidores distribuidos geográficamente que almacenan y entregan archivos estáticos como JavaScript, CSS, imágenes y videos de manera más rápida y eficiente.

En el caso de Mantine, puedes cargar la biblioteca directamente desde un CDN (servidor externo que lo tiene almacenado) sin necesidad de instalar nada en tu computadora o proyecto. En el head de nuestro archivo html, incorporamos la siguiente línea:

```html 
<script src="https://unpkg.com/@mantine/core"></script>
```

🛑 Limitaciones:
1. No es ideal para producción porque depende de una conexión externa.
2. No puedes personalizar el tema con MantineProvider.
3. Solo funciona en entornos simples sin un bundler (como Vite o Webpack).


### 3️⃣ Usando Mantine en un proyecto con Next.js

Si se trabaja con Next.js, la instalación es la misma que en React, pero se recomienda añadir SSR (Server-Side Rendering) con @mantine/next:
```bash
npm install @mantine/core @mantine/hooks @mantine/next @emotion/react
```
Luego se configura Mantine en _app.jsx

```jsx
import { MantineProvider } from '@mantine/core';
function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  );
}      
export default MyApp;
```

✅ Ventaja: Soporte optimizado para SSR en aplicaciones con Next.js.

### 4️⃣ Creando un proyecto con plantillas de Mantine.

Se puede hacer un inicio rápido, sin configurarlo todo manualmente, usando la plantilla oficial:

```bash 
npx create-mantine-app my-project
cd my-project
npm install
npm run dev
```

Lo que hace que se genere una estructura de proyecto lista con Mantine.

---

## 3. Uso más adecuado/generalizado.

El uso más generalizado son significa que sea el más adecuado. Sus dos usos más extendidos son:

## 1.  Dashboards, SaaS y Paneles de Administración

Es adecuado para éste tipo de proyectos por que:

* Los dashboards requieren componentes estructurados como tablas, gráficos, tarjetas, formularios y modales. Mantine proporciona estos elementos listos para usar con un diseño moderno.

* Aplicaciones SaaS (Software as a Service) suelen manejar grandes volúmenes de datos y necesitan interfaces bien organizadas y responsivas. Mantine ofrece una base sólida para estos sistemas.

* En paneles de administración, la prioridad es la usabilidad y la eficiencia. Mantine permite crear interacciones fluidas y accesibles, optimizando la experiencia del usuario.

## 2. Aplicaciones con React que requieren personalización de UI

A diferencia de otras bibliotecas que imponen un estilo muy definido (como Material UI), Mantine ofrece una base visual neutra fácilmente adaptable a cualquier identidad de marca.

Su sistema de temas personalizables permite ajustar colores, tipografías y estilos globales sin modificar cada componente individualmente.
Ideal para proyectos donde se busca un diseño único sin partir desde cero.

Otros usos comunes, pero menos adecuados de Mantine son:

    ❌ Landing Pages y sitios web estáticos: Puede usarse, pero es innecesario cargar una librería tan grande solo para páginas simples. Alternativas: Tailwind CSS, Bootstrap.

    ❌ Aplicaciones híbridas (React + Vanilla JS): Mantine está diseñado exclusivamente para React, por lo que no es ideal para proyectos donde se mezclan tecnologías. Alternativas: Bootstrap, Material UI.

    ❌ Proyectos donde el rendimiento es crítico: Aunque Mantine es eficiente, en aplicaciones con carga ultrarrápida, puede ser mejor usar una solución más ligera. Alternativas: Preact, SolidJS.

## 4. Ventajas e inconvenientes.

✅ Ventajas

* Extensa colección de componentes listos para usar.

* Sistema de theming y personalización avanzada.

* Hooks personalizados para mejorar la lógica de estado.

* Soporte nativo para SSR (Next.js) y compatibilidad con Vite.

* Documentación clara y comunidad en crecimiento.

❌ Inconvenientes

* No es la opción más ligera.

* Exclusivo para React (no compatible con otros frameworks).

* Comunidad más pequeña que Material UI o Bootstrap.

* Aprendizaje inicial si no estás acostumbrado a librerías de UI.

## 5. Extensivo ejemplos de uso y sintaxis de la herramienta.

### 1. Configuración básica:

Instalación 

```bash 
npm install @mantine/core @mantine/hooks @emotion/react
```

Configuración en React 

```jsx 
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <h1>Hola, Mantine</h1>
    </MantineProvider>
  );
}

export default App;
```

**withGlobalStyles** → Aplica estilos base globales.
**withNormalizeCSS** → Normaliza estilos en diferentes navegadores.

### 2. Uso de componentes básicos.

Mantine incluye una variedad de componentes que pueden usarse sin necesidad de configuraciones adicionales.

* Botón con estilos definidos:

```jsx
import { Button } from '@mantine/core';

function Demo() {
  return <Button color="blue" radius="xl" size="lg">¡Haz clic aquí!</Button>;
}
```

**color="blue"** → Cambia el color del botón.
**radius="xl"** → Aplica bordes redondeados grandes.
**size="lg"** → Ajusta el tamaño del botón.

* Inputs y formularios:

Mantine ofrece componentes optimizados para formularios.

```jsx
import { TextInput, PasswordInput, Button } from '@mantine/core';

function LoginForm() {

  return (
    <div>
      <TextInput label="Correo Electrónico" placeholder="tucorreo@email.com" required />
      <PasswordInput label="Contraseña" placeholder="••••••" required />
      <Button color="green" fullWidth mt="sm">Ingresar</Button>
    </div>
  );
}
```

**TextInput y PasswordInput** → Campos de entrada estilizados.  
**fullWidth** → Botón ocupa todo el ancho disponible.  
**mt="sm"** → Aplica margen superior pequeño.

*  Notificaciones personalizadas:

```jsx
import { showNotification } from '@mantine/notifications';
import { Button } from '@mantine/core';

function NotificacionDemo() {
  return (
    <Button onClick={() => showNotification({ title: "Éxito", message: "Operación completada" })}>
      Mostrar Notificación
    </Button>
  );
}
```

**showNotification** → Muestra una alerta emergente con título y mensaje.


### 3. Personalización de estilos:

Mantine permite modificar los estilos globales y personalizar componentes.

* Theming global (Colores, tipografía)

```jsx
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider theme={{ primaryColor: "cyan" }}>
      <h1>Hola, Mantine</h1>
    </MantineProvider>
  );
}

export default App;
```

**primaryColor: "cyan"** → Cambia el color principal de toda la app.

* Uso de estilos dinámicos:

```jsx
import { Button } from '@mantine/core';

function CustomButton() {
  return (
    <Button styles={(theme) => ({
      root: { backgroundColor: theme.colors.red[6], color: "white" }
    })}>
      Botón Personalizado
    </Button>
  );
}
```

**styles** -> Personaliza estilos del componente.

### 4. Hooks de Mantine:

Mantine ofrece hooks avanzados para facilitar la gestión del estado y eventos.

* Manejo del portapapeles:

```jsx
	import { useClipboard } from '@mantine/hooks';
import { Button } from '@mantine/core';
function ClipboardDemo() {
  const clipboard = useClipboard();
  return (
    <Button onClick={() => clipboard.copy("Texto copiado!")}>Copiar</Button>
  );
}
```

**useClipboard** → Facilita copiar contenido al portapapeles.

* Uso de Debounce (Retraso en eventos):

```jsx
	import { useState } from 'react';
import { useDebouncedValue } from '@mantine/hooks';

function DebounceDemo() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 500); // Retraso de 500ms

  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} />
      <p>Valor en tiempo real: {value}</p>
      <p>Valor con debounce: {debounced}</p>
    </div>
  );
}
```

**useDebouncedValue** → Reduce la cantidad de actualizaciones rápidas en un input.

### 5. Integración con Next.js

Si usas Next.js, Mantine tiene soporte nativo con @mantine/next.

* Instalación:

```bash
	npm install @mantine/core @mantine/next
```

* Configuración en _app.js:
  
```jsx
import { MantineProvider } from '@mantine/core';
function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
export default MyApp;
```

**Next.js** maneja la carga optimizada de Mantine para mejorar el rendimiento.

## 6. Conclusiones.

Mantine se presenta como una biblioteca de componentes para React que combina facilidad de uso, personalización avanzada y compatibilidad con herramientas modernas. Su amplio catálogo de componentes listos para usar permite desarrollar interfaces sofisticadas sin esfuerzo, lo que lo hace ideal para dashboards, paneles administrativos y aplicaciones SaaS, donde la organización y la accesibilidad son clave. Además, su sistema de theming y su integración con Emotion.js facilitan la personalización, permitiendo adaptar la apariencia de la aplicación sin limitaciones.


A diferencia de otras bibliotecas como Material UI, Mantine no impone un diseño rígido, sino que brinda total libertad para modificar colores, tipografías y estilos globales. Su compatibilidad con Next.js y Vite lo convierte en una excelente opción para proyectos que requieren Server-Side Rendering (SSR) y optimización de rendimiento. Sin embargo, al ser una biblioteca más reciente, su comunidad es más pequeña y cuenta con menos recursos de terceros. Además, aunque es eficiente, no es la opción más ligera en comparación con alternativas como Chakra UI o Preact.


En conclusión, Mantine es una alternativa moderna y versátil para quienes buscan una solución flexible y altamente personalizable en React. Su facilidad de uso y su enfoque en la experiencia del desarrollador lo hacen ideal para proyectos donde la accesibilidad y la responsividad son esenciales. No obstante, su elección dependerá del contexto y de las necesidades específicas de cada aplicación, siendo una gran opción para quienes trabajan exclusivamente en el ecosistema de React.
