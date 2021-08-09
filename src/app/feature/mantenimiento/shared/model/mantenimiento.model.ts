export class Mantenimiento {
    id: number;
    placa: string;
    cilindraje: number;
    fecha: string;
    tarifa: number;
    estado: string;
    constructor(id: number, placa: string, cilindraje: number, fecha: string, tarifa: number, estado: string) {
        this.id = id;
        this.placa = placa;
        this.cilindraje = cilindraje;
        this.fecha = fecha;
        this.tarifa = tarifa;
        this.estado = estado;
    }
}
