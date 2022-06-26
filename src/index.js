const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.listen(PORT, () => {
  console.log(`listening to port on http://localhost:${PORT}`);
});
