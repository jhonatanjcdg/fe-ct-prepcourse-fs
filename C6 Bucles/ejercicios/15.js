function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  return numero==1? "Lunes" : numero==2? "Martes" : numero==3? "Miercoles" : numero==4? "Jueves" : numero==5? "Viernes" : numero==6? "Sabado" : numero==7? "Domingo" : "No es un dia de la semana"
}

module.exports = obtenerDiaSemana;