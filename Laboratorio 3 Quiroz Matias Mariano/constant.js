const inputsDefault = [
  { name: "Id", id: "id", type: "number",min: 0 },
  { name: "Modelo", id: "modelo", type: "text" },
  { name: "Año de Fabricacion", id: "anoFabricacion", type: "number", min: 1985 },
  { name: "Velocidad Maxima", id: "velMax", type: "number", min: 0 },
];

const inputsCamion = [
  { name: "Carga", id: "carga", type: "number", min: 0},
  { name: "Autonomia", id: "autonomia", type: "number", min: 0},
];

const inputsAuto = [
  { name: "Cantidad de puertas", id: "cantidadPuertas", type: "number", min: 1},
  { name: "Cantidad de asientos", id: "asientos", type: "number", min: 1},
  
];

const inputsActions = [
  { name: "Modificar", id: "edit"},
  { name: "Eliminar", id: "delete"},
];

const hearderActions = [
  { name: "Acciones", id: "actions"},
];
