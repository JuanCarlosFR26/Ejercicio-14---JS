import express from 'express';
import router from './routes/index.js';


const app = express();

// Agregando Router
app.use('/', router);

// Habilitar HTML
app.set('view engine', 'html')
app.use(express.static('public'));
app.use('/static', express.static('public'));

// Puerto y host para la app
const host = '127.0.0.1' || '0.0.0.0';

// Definir puerto
const port = 3307 || 3000;

app.listen(port, host, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`)
})