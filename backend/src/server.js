// server.js
import app from "../../backend/src/index";
import dotenv from "dotenv/config";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
