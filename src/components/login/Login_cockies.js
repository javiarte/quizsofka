// módulo express
var express = require('express');
 // módulo de sesión
var cookieParser = require('cookie-parser');
var session = require('express-session');
 // módulo redis
var redis   = require('redis');
var client  = redis.createClient('6379', '127.0.0.1'); // Escuche en el puerto 6379 por defecto,'127.0.0.1'Para su IP local (no es necesario modificarla de forma predeterminada)
var RedisStore = require('connect-redis')(session);
 
 // ejecutar express
var app = express();
 // Ejecuta el método cookieParser
app.use(cookieParser());
 
 // error de enlace de redis
client.on("error", function(error) {
    console.log(error);
});
 
 
 // Configurar sesión
var identityKey = 'skey';
app.use(session({
    name: identityKey,
    secret: 'sessiontest', // Se utiliza para firmar cookies relacionadas con la identificación de la sesión
         store: new RedisStore (), // (use la sesión de almacenamiento de redis)
    saveUninitialized: false, // Si desea guardar automáticamente las sesiones no inicializadas, se recomiendafalse
    resave: false, // Si desea volver a guardar la sesión cada vez, se recomiendafalse
    cookie: {
                 maxAge: 10 * 60 * 1000 // Período de validez, la unidad es milisegundos, aquí son 10 minutos
    }
}));
 
 // Comprueba si la sesión es normal
app.use(function (req, res, next) {
    if (!req.session) {
        return next(new Error('error de sesión'))
    }else {
                 console.log (req.session) // Imprime la sesión actual normalmente
    }
         next () // Normalmente carga el siguiente middleware
})