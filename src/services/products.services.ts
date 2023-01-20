export const productsService = (body: any) => {
  console.log("service: ", body);

  const producto = body;

  return producto;
};

export const updateService = (id: string, body: any, query: any) => {
  const product = { id, body, query };

  return product;
};
