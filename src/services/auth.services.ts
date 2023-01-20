export const authService = (body: any) => {
  console.log("service: ", body);

  const datosUsuario = body;

  return datosUsuario;
};
