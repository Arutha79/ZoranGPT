// ✅ server.js pour ZoranGPT — prêt à recevoir une connexion depuis ConnecteurGPT avec compatibilité Railway

const express = require("express");
const app = express();

app.use(express.json());

// 🔗 Route GET de test
app.get("/", (req, res) => {
  res.send("OK " + (process.env.GPT_NAME || "ZoranGPT"));
});

// 🔌 Route POST pour gérer la connexion
app.post("/", (req, res) => {
  const { intention, contenu } = req.body;

  if (intention === "connexion") {
    console.log("🔌 Connexion acceptée depuis Prisma via ConnecteurGPT");
    return res.json({
      statut: "✅ Connexion établie avec ZoranGPT",
      contenu
    });
  }

  res.status(400).json({ erreur: "Intention non reconnue." });
});

// 🟢 Lancement du serveur (Railway exige process.env.PORT)
const PORT = process.env.PORT;
if (!PORT) throw new Error("❌ PORT manquant — Railway ne peut pas démarrer ZoranGPT");

app.listen(PORT, () => {
  console.log(`🚀 ZoranGPT en ligne sur le port ${PORT}`);
});
