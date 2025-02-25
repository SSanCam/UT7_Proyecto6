import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider 
    withGlobalStyles 
    withNormalizeCSS 
    theme={{ 
      primaryColor: "red",  // 🔴 Definimos el color principal
      colors: {
        red: ["#ffe5e5", "#ffb3b3", "#ff8080", "#ff4d4d", "#ff1a1a", "#e60000", "#cc0000", "#b30000", "#990000", "#800000"],
        blue: ["#e0f7fa", "#b2ebf2", "#80deea", "#4dd0e1", "#26c6da", "#00bcd4", "#00acc1", "#0097a7", "#00838f", "#006064"]
      }
    }}
  > 
    <Notifications />
    <App />
  </MantineProvider>
);
