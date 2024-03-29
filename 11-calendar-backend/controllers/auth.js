const { response } = require('express');
const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async (req, res = response) => {

    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });

        if( usuario ){
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario ya existe con ese email'
            });
        }
        

        usuario = new Usuario(req.body);

        //! Encriptar contrasena
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync( password, salt );

        await usuario.save();
        //! Generar JWT
        const token =  await generarJWT( usuario.id, usuario.name);

        return res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });


    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }


}

const loginUsuario = async(req, res = response) => {

    const { email, password } = req.body;

    try {

        const usuario = await Usuario.findOne({ email });

        if( !usuario ){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario NO existe con ese email'
            });
        }
        //* Confirmar los passwords
        const validPassword = bcrypt.compareSync( password, usuario.password );

        if( !validPassword ){
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        //! Generar JWT
        const token =  await generarJWT( usuario.id, usuario.name);

        return res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })
        
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }

}

const revalidarToken = async(req, res = response) => {

    const uid = req.uid;
    const name = req.name;

    //! Generar un nuevo JWT

    const token = await generarJWT( uid, name);

    return res.json({
        ok: true,
        token,
        uid, name
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,

}