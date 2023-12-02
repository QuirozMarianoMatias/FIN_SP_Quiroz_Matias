class Vehiculo {
    constructor(id, modelo, anoFabricacion, velMax) {
        this.id = id;
        this.modelo = modelo;
        this.anoFabricacion = anoFabricacion;
        this.velMax = velMax;
    }

    toString() {
        return `ID: ${this.id}, Modelo: ${this.modelo}, Año de fabricacion: ${this.anoFabricacion}, Velociadad Maxima: ${this.velMax}`;
    }

    toJson() {
        return JSON.stringify({
            id: this.id,
            modelo: this.modelo,
            anoFabricacion: this.anoFabricacion,
            velMax: this.velMax
        });
    }

    update(data){
        this.modelo = data.modelo;
        this.anoFabricacion = Number(data.anoFabricacion);
        this.velMax = Number(data.velMax);
    }
}