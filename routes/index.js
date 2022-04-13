import express from 'express';
import {obtenerNombres, mostrarNombres, paginaInicio} from '../controllers/paginaLista.js';



const router = express.Router();


router.get('/', obtenerNombres);


export default router;