import { z } from "zod";

export const CreateProductSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be string",
      })
      .min(1),
    price: z
      .number({
        required_error: "Price is required",
        invalid_type_error: "Price must be number",
      })
      .nonnegative(),
  }),
});

export const UpdateProductSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    price: z.number().nonnegative().optional(),
  }),
  params: z.object({
    id: z.string().min(3),
  }),
  query: z.object({
    title: z.string(),
  }),
});

export type CreateProductType = z.infer<typeof CreateProductSchema>["body"];

export type UpdateProductBodyType = z.infer<typeof UpdateProductSchema>["body"];
export type UpdateProductParamasType = z.infer<
  typeof UpdateProductSchema
>["params"];
export type UpdateProductQueryType = z.infer<
  typeof UpdateProductSchema
>["query"];
