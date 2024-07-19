var express = require('express');
var router = express.Router();
var db = require('../models');
const { Sequelize, Op } = require('sequelize');
const { Cliente, Servicio, ServicioxCliente } = db;

// GET home page
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/servicios', async function (req, res, next) {
  try {
    const clientId = req.query.clientId;
    const filter = req.query.filter || '';

    let whereClause = {};
    if (filter) {
      whereClause = {
        [Op.or]: [
          { '$Cliente.nombre$': { [Op.like]: `%${filter}%` } },
          { '$Cliente.apellido$': { [Op.like]: `%${filter}%` } },
          { '$Servicio.descripcion$': { [Op.like]: `%${filter}%` } }
        ]
      };
    }

    let data;
    if (clientId) {
      data = await db.ServicioxCliente.findAll({
        where: { codigocliente: clientId },
        include: [
          { model: db.Cliente, where: { id: clientId } },
          { model: db.Servicio }
        ]
      });
    } else {
      data = await db.ServicioxCliente.findAll({
        include: [
          { model: db.Cliente, where: whereClause },
          { model: db.Servicio }
        ]
      });
    }

    res.render('servicios', { data, filter, clientId });
  } catch (err) {
    console.error('Error en la consulta:', err);
    next(err);
  }
});


module.exports = router;
