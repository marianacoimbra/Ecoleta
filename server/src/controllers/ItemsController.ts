import { Request, Response } from "express";
import knex from "../database/connection";

class ItemsController {
  //por padrao index eh usado para a listagem
  
  async index(request: Request, response: Response) {
    //SELECT * FROM items
    const items = await knex("items").select("*");

    //quando as informacoes do banco nao estao exatamente com o formato que eu preciso retornar pra o usuario
    //serializacao de dados pra um novo formato
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://localhost:3330/uploads/${item.image}`,
      };
    });
    return response.json(serializedItems);
  }
}

export default ItemsController;
