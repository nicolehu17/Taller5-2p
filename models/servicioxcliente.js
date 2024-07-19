// models/servicioxcliente.js
module.exports = (sequelize, DataTypes) => {
  const ServicioxCliente = sequelize.define('ServicioxCliente', {
    codigocliente: DataTypes.INTEGER,
    codigoservicio: DataTypes.INTEGER
  }, {});

  ServicioxCliente.associate = function(models) {
    ServicioxCliente.belongsTo(models.Cliente, { foreignKey: 'codigocliente' });
    ServicioxCliente.belongsTo(models.Servicio, { foreignKey: 'codigoservicio' });
  };

  return ServicioxCliente;
};
