class Camion extends Vehiculo { //futbolista aereo
    constructor(id, modelo, anoFab, velMax, carga, autonomia) {
      super(id, modelo, anoFab, velMax);
      this.carga = carga;
      this.autonomia = autonomia;
    }
  
    toString() {
      return (
        super.toString() + `, carga: ${this.carga}, Autonomia: ${this.autonomia}`
      );
    }
  
    toJson() {
      const vehiculoJson = super.toJson();
      const aereoJson = JSON.stringify({
        carga: this.carga,
        autonomia: this.autonomia,
      });
      return Object.assign(JSON.parse(vehiculoJson), JSON.parse(aereoJson));
    }
  
    update(data){
      super.update(data);
      this.carga = Number(data.carga);
      this.autonomia = Number(data.autonomia);
    }
  }