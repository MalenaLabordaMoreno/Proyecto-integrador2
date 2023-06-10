var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session'); //defini la variable session

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let productosRouter = require ('./routes/productos');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); //linea importante de motor de vistas, dice donde esta views
app.set('view engine', 'ejs'); //vamos a usar el motor de vistas ejs

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //recursos estaticos, van en carpeta public

app.use(session( 
  {
  secret: 'cafestoreba',
  saveUninitialized: true,
  resave: false
  }
  ));

//Pasar datos de session a las vistas. Usando un middleware de aplicación.
app.use(function(req, res, next){
  if(req.session.user != undefined){
    res.locals.user = req.session.user
    return next();
  }
  return next();
})

app.use('/', indexRouter); // la usamos para home y creditos 
app.use('/users', usersRouter);
app.use('/productos', productosRouter); // ruta troncal. la usamos para productos. 

//Session se inicia antes de las rutas

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
