'use strict';
module.exports = (sequelize, DataTypes) => {
  const Servicio = sequelize.define('Servicio', {
    descripcion: DataTypes.STRING,  // Asegúrate de que esta columna exista en la base de datos
    precio: DataTypes.FLOAT
  }, {});
  
  Servicio.associate = function(models) {
    Servicio.hasMany(models.ServicioxCliente, { foreignKey: 'codigoservicio' });
  };

  return Servicio;
};
