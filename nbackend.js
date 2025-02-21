const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3002;
app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error("Hiba az adatbázis megnyitásakor:", err.message);
  } else {
    console.log("Kapcsolódva az SQLite adatbázishoz.");
    db.run(
      `CREATE TABLE IF NOT EXISTS plants (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        perennial BOOLEAN NOT NULL,
        category TEXT NOT NULL,
        price INTEGER NOT NULL CHECK(price > 0)
      )`
    );
  }
});

app.get("/plants", (req, res) => {
  db.all("SELECT * FROM plants", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post("/plants", (req, res) => {
  const { name, perennial, category, price } = req.body;
  if (!name || !category || price <= 0) {
    return res.status(400).json({ error: "Hiányzó vagy érvénytelen adat!" });
  }

  db.run(
    "INSERT INTO plants (name, perennial, category, price) VALUES (?, ?, ?, ?)",
    [name, perennial, category, price],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ id: this.lastID, name, perennial, category, price });
    }
  );
});

app.put("/plants/:id", (req, res) => {
  const { price } = req.body;
  const { id } = req.params;

  if (!price || price <= 0) {
    return res.status(400).json({ error: "Invalid price!" });
  }

  db.run(
    "UPDATE plants SET price = ? WHERE id = ?",
    [price, id],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: "Sikeres frissítés!" });
    }
  );
});

app.delete("/plants/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM plants WHERE id = ?", id, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Növény törölve!" });
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
