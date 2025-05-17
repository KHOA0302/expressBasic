// server.js
const app = require("./src/app");
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});
