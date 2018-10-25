require('./config/config')
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT;

let tareas= [];
//Middleware
// Informacion detallada en el teminal
app.use(morgan('dev'));
// Obtine los datos de las peticiones POST
// en eun atributo llamado body que hace parte de request
app.use(bodyParser.urlencoded({
  extended: true
}))

// Configurar cookie session


// Configurar a EJS Template Engine
app.set('view engine', 'ejs')

// Compartir recursos
app.use('/public', express.static('public'))

// Ruta Principal
app.get('/', function (request, response) {
  response.render('formulario.ejs', {
    tareas: tareas
  })
})

// Adicionar tarea del formulario ejs

app.post('/adicionar', function(request,response){
   let tarea = request.body.nuevaTarea;
   tareas.push (tarea);
   console.log(tareas)
  // console.log(request.body)
  response.redirect('/')
})

app.get('/borrar/:indice', function(request,response) {
  let id= request.params.indice;
  tareas.splice(id,1);
  response.redirect('/')
})


app.listen(port, function () {
  console.log('Escuchando olimpica estereo escuchando olimpica esteereo se metioo', port)
})