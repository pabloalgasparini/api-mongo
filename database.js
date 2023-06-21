const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
    // Resto del código de tu servidor
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
