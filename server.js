const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve todos os arquivos estáticos de dentro da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota de fallback para redirecionar para a página inicial
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando! Abra seu navegador em: http://localhost:${PORT}`);
});