import app from "../Backend/app.js";
import { connectDB } from "./db.js";

connectDB();
app.listen(4000);
console.log("sercer on port", 4000);
