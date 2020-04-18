var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var login=require('./routes/login');
var api=require('./routes/api');
var home=require('./routes/User');
var verification=require('./MiddleWare/verification');
var logout=require('./routes/logout');
var app = express();

// view engine setup
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/',express.static(path.join(__dirname,'public','index')));
app.use('/login',verification)
app.use('/login',login);
app.use('/api',api);
app.use('/logout',logout);
app.use('/user',home);



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
