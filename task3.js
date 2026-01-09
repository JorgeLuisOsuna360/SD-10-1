export function ageCalculator(year, month, day) {
    const fechaNacimiento = new Date(year, month - 1, day);

    const fechaActual = new Date();

    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();
    const mesNacimiento = fechaNacimiento.getMonth();
    const diaNacimiento = fechaNacimiento.getDate();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }

    return edad;
}