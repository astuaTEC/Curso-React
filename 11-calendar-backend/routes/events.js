
/*
    Rutas de eventos
    host + /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();
router.use( validarJWT ); // Todas pasan por la validacion del JWT

// Obtener eventos
router.get('/', getEventos);

// Crear un nuevoo evento
router.post(
    '/', 
    [ //! Middlewares
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'Fecha de finalizacion es obligatoria').custom( isDate ),
        validarCampos
    ],
    crearEvento);

// Actualizar evento
router.put(
    '/:id',
    [ //! Middlewares
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'Fecha de finalizacion es obligatoria').custom( isDate ),
        validarCampos
    ],
    actualizarEvento);

// Borrar evento
router.delete('/:id', eliminarEvento);


module.exports = router;