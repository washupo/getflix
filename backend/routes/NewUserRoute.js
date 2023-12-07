// // Route pour enregistrer un nouvel utilisateur
// app.post('/users', async (req, res) => {
//     try {
//       const { username, email, password } = req.body;
  
//       // Créer une nouvelle instance du modèle User
//       const newUser = new User({ username, email, password });
  
//       // Enregistrer l'utilisateur dans la base de données
//       const savedUser = await newUser.save();
  
//       res.status(201).json(savedUser);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Erreur lors de l\'enregistrement de l\'utilisateur.' });
//     }
//   });