import { Request, Response } from "express";

import {
  CreateProductType,
  UpdateProductBodyType,
  UpdateProductParamasType,
  UpdateProductQueryType,
} from "../schemas/product.schema";

import { productsService, updateService } from "../services/products.services";

export const createProduct = (
  req: Request<unknown, unknown, CreateProductType>,
  res: Response
) => {
  try {
    // podemos acceder a body.name y body.price
    // porque en schema creamos un tipo (CreateProductType)
    console.log(req.body.name);
    console.log(req.body.price);

    const response = productsService(req.body);

    res.json(response);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updateProduct = (
  req: Request<
    UpdateProductParamasType,
    unknown,
    UpdateProductBodyType,
    UpdateProductQueryType
  >,
  res: Response
) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const { title } = req.query;

  try {
    const response = updateService(id, { name, price }, title);

    res.json(response);
  } catch (error) {
    return res.status(500).json(error);
  }
};
