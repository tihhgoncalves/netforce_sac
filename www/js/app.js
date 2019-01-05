var $$ = Dom7;

var app = new Framework7({
    root: '#app',
    name: 'Netforce SAC',
    id: 'br.com.taticadesucesso.netforce_sac',
  });

var mainView = app.views.create('.view-main');

$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});