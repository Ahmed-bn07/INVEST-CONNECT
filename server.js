// Importation de l'application express
const PORT = process.env.PORT || 8000;
const app = require('./backend/app');
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});