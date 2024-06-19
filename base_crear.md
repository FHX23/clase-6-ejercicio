# npm init -y

npm i express
agregar "type" module abajo del main el package.json
// const express = require('express') // Version CommonJS
import express from 'express';
npm install mongoose
npm install dotenv
npm install nodemon
agregar en scrip "start": "nodemon src/index.js",
"dev": "nodemon src/index.js"
const app = express()
const port = 3000 // 3000-5000

app.get('/', (request, response) => {
  response.send('Hello World!')
})

// <http://localhost:3000/>
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

- `Model.find()` : Encuentra todos los documentos que coinciden con los criterios de consulta especificados.
- `Model.findById()` : Encuentra un documento por su ID.
- `Model.findByIdAndDelete()` : Encuentra un documentos por su ID y lo elimina.
- `Model.findByIdAndUpdate()` : Encuentra un documento por su ID y lo actualiza.
- `Model.findOne()` : Encuentra un solo documento que coincide con los criterios de consulta especificados.
- `Model.deleteOne()` : Elimina un solo documento que coincide con los criterios de consulta especificados.
- `Model.findOneAndDelete()` : Encuentra un documento que coincide con los criterios de consulta especificados y lo elimina.
- `Model.finOneAndUpdate()` : Encuentra un documento que coincide con los criterios de consulta especificados y lo actualiza.
- `.save()` : Se utiliza para guardar un documento en la base de datos.  Si el documento aún no existe en la base de datos, lo insertará como un nuevo documento; si ya existe en la base de datos, actualizará el documento con los cambios realizados en la instancia del modelo.