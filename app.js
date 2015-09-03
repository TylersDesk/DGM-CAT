var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');

var mongoose = require('mongoose');
var Week = require('./model/Week.js');
var Reading = require('./model/Reading.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));


app.get('/partials/:name', function(req,res){
  var requestedPartial = req.params.name;
  res.render('partials/' + requestedPartial);
});

/**
 * Database Stuff
 */
// mongoose.connect('mongodb://localhost/dgm3760');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));

// var someReading = new Reading({url:"someSillyUrl",title:"This is my title"});

// someReading.save(function(err,doc){
//   if (err) console.log(err);
//   console.log('Reading is ', doc);

//   var weekOne = new Week({
//     week:4,
//     readings: someReading._id
//   });

//   weekOne.save(function(err,doc){
//     if (err) console.log(err);
//     console.log(doc);
//   });

// });



/**
* Routing 
*/

app.use('/', routes);
app.all('/*', function ( req, res ) {
    console.log('All');
    res
        .status( 200 )
        .set( { 'content-type': 'text/html; charset=utf-8' } )
        .render('index' );
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
