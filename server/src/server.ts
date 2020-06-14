import express from "express";
import cors from 'cors';

import path from 'path';
import routes from "./routes";
import {errors} from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes); 

//funcao especifica do express que eh utilizada para servir arquivos estaticos 
//de uma pasta especifica
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(errors());

app.listen(3330, function () {
  console.log("Servidor rodando...");
});
