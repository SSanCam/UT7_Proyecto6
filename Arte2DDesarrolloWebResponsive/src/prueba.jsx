import { TextInput, PasswordInput, Button } from '@mantine/core'; // Importar los componentes de Mantine

function LoginForm() {
    return (
        <div>
            <TextInput label="Correo Electrónico" placeholder="tucorreo@email.com" required />
            <PasswordInput label="Contraseña" placeholder="••••••" required />
            <Button color="green" fullWidth mt="sm">Ingresar</Button>
        </div>
    );
}

export default LoginForm; // Exportar el componente si lo vas a usar en otro archivo
