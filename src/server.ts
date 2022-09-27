import { app } from ".";
import { db } from "./database/db";
const PORT = 3000;

app.listen(PORT, async() => {
    await db.sync()
    console.log(`iniciado no http://localhost:${PORT}`);
});