import express from "express";
import authRoutes from "./routes/auth.routes";
import productsRoutes from "./routes/products.routes";

const app = express();

app.use(express.json());
app.use(authRoutes);
app.use(productsRoutes);

app.listen(3000, () => {
  console.log("Server listening on port", 3000);
});
