const jwt = require("jsonwebtoken");

const generarJWT = ( uid, name ) => {
    return new Promise( (resolve, reject) => {

        const payload = { uid, name };

        jwt.sign(payload, process.env.SECRET_JWT_SEET, {
            expiresIn: '2h'
        }, (err, token) => {

            if( err ){
                console.log(error);
                reject('No se pudo generar el token');
            };

            resolve( token );
        });

    })

}

module.exports = {
    generarJWT
}