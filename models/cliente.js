'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    cedula: DataTypes.STRING
  }, {});

  Cliente.associate = function(models) {
    Cliente.hasMany(models.ServicioxCliente, { foreignKey: 'codigocliente' });
  };

  return Cliente;
};
