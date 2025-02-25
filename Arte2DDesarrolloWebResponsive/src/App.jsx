import { Button } from '@mantine/core';

function ThemeDemo() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Botón con Theme Mantine</h2>
      <Button
        styles={(theme) => ({
          root: { backgroundColor: theme.colors.red[6], color: "white" }
        })}
      >
        Este botón debe ser rojo
      </Button>
    </div>
  );
}

export default ThemeDemo;
