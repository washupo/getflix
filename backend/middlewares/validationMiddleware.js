// Middleware de validation des données
function validationMiddleware(req, res, next) {
  const { username, password } = req.body;
  //const { username, name, email, password } = req.body;
  // if (!username || !name || !email || !password)

  // Exemple simple de validation, ajustez selon vos besoins
  if (!username || !password) {
    return res.status(400).json({ message: 'Tous les champs doivent être remplis.' });
  }

  next();
}

module.exports = validationMiddleware;
