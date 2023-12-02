class Auto extends Vehiculo {//terrestre - profesional
    constructor(id, modelo, anoFab, velMax, cantPue, cantAsie) {
        super(id, modelo, anoFab, velMax);
        this.cantPue = cantPue;
        this.cantAsie = cantAsie;
    }
    
    toString() {
        return (
        super.toString() +
        `, cantidadPuertas: ${this.cantPue}, asientos: ${this.cantAsie}`
        );
    }

    toJson() {
        const vehiculoJson = super.toJson();
        const terrestreJson = JSON.stringify({
        cantPue: this.cantPue,
        cantAsie: this.cantAsie,
        });
        return Object.assign(JSON.parse(vehiculoJson), JSON.parse(terrestreJson));
    }
    
    update(data){
        super.update(data);
        this.cantPue = Number(data.cantPue);
        this.cantAsie = Number(data.cantAsie);
    }
}