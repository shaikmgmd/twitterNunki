import cors from "cors";
import express from "express";
import { ControllerCore } from "./controllers";
import { SearchController } from "./controllers/search";
import { UserController } from "./controllers/user";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();

app.use(express.json());
app.use(cors());

[new SearchController(), new UserController()].forEach(
  (controller: ControllerCore) => {
    app.use("/", controller.router);
  }
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API is now running on port ${PORT}`));
