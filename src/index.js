import express from "express";
import morgan from "morgan";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(morgan("dev"));
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/search", async (req, res) => {
  console.log(req.url.split);
  const searchImages = async (search) => {
    return fetch(
      `https://api.unsplash.com/search/photos/?query=${search}&client_id=${process.env.ACCESS_TOKEN}`
    )
      .then((response) => response.json())
      .then((data) => {
        return data.results;
      });
  };

  res.json(await searchImages("zelda"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
