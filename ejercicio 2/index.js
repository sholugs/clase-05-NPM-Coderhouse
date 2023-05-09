import moment from 'moment';

const hoy = moment();
//Colocar la fecha en formato YYYY-MM-DD
const fecha_nacimiento = moment('1994-08-12', 'YYYY-MM-DD'); //Prueba metiendo después el mes 200
if (fecha_nacimiento.isValid()) {
    console.log(`Desde mi nacimiento, han pasado ${hoy.diff(fecha_nacimiento, 'days')} días`);
} else {
    console.error("No se puede proseguir ya que la fecha es inválida")
}

// Pueden buscar la documentación de moment y experimentar con la librería, recuerden hacer npm install o npm i