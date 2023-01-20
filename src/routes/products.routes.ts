import { Router } from "express";

import {
  createProduct,
  updateProduct,
} from "../controllers/products.controllers";

import { schemaValidation } from "../middlewares/schemaValidator.middleware";
import {
  CreateProductSchema,
  UpdateProductSchema,
} from "../schemas/product.schema";

const router = Router();

router.post("/products", schemaValidation(CreateProductSchema), createProduct);
router.put(
  "/products/:id",
  schemaValidation(UpdateProductSchema),
  updateProduct
);

export default router;
