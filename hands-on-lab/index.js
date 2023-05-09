import UserManager from "./manager/userManager.js";

const userManager = new UserManager();

const env = async () => {
    let users = await userManager.getUsuarios();
    console.log(users) // []
    let user = {
        nombre: 'Marisol',
        apellido: 'Cadena',
        nombre_usuario: 'MomoRompe',
        contrasena: '123'
    }
    await userManager.crearUsuario(user);
    let segundaConsultaUsers = await userManager.getUsuarios();
    console.log(segundaConsultaUsers); // Revisar contraseña hasheada.
    await userManager.validarUsuario('MomoRompe', '123') // Logueado
    await userManager.validarUsuario('MomoRompe', '1234')//Contraseña inválida
}
env();

//creamos el package.json en esta ocasión para usar el type module y así importar con import/export

//Esta funcion env al ejecutarla guardará en Users.json los valores de let user pero con la contraseña hasheada y el salt

//El json inicia con un array vacio pero con las pruebas se llenará con nuevos usuarios, vayan probando por ustedes mismos.