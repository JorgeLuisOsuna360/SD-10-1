export class FriendAge {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }

    returnAge() {
        const fechaNacimiento = new Date(this.year, this.month - 1, this.day);
        const fechaActual = new Date();
        let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
        const mesActual = fechaActual.getMonth();
        const diaActual = fechaActual.getDate();
        const mesNacimiento = fechaNacimiento.getMonth();
        const diaNacimiento = fechaNacimiento.getDate();
        
        if(mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
            edad--;
        }
        
        return `${this.name} tiene ${edad} hoy!`;
    }
}