var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')

var endpoint = 'https://api.wheretheiss.at/v1/satellites/25544'

xhr.get(endpoint, function (err, data) {
  if (err) { console.error(err) }
  data = JSON.parse(data.body);
  console.log(data.body)
  var target = document.getElementsByTagName('main')[0]
  target.innerHTML = greeting({name: data.body.name, id: data.body.id})
})
