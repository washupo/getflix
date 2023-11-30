import { useEffect, useState } from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="chemin/vers/votre/logo.png" alt="Logo" className="h-8" />
        </div>
        {/* Bouton S'identifier */}
        <button className="text-white bg-blue-500 px-4 py-2 rounded-md">S'identifier</button>
      </header>

      {/* Contenu principal */}
      <main className="flex flex-col items-center justify-center flex-1">
        {/* Image plein écran */}
        <img src="chemin/vers/votre/image.jpg" alt="Image de fond" className="w-full" />

        {/* Texte central */}
        <div className="text-center mt-8">
          <h1 className="text-4xl font-bold">Films et séries en illimité, et bien plus</h1>
          <p className="text-sm mt-4">Où que vous soyez. Annulez à tout moment.</p>
          <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md">S'inscrire</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4">
        {/* Contenu du footer */}
        {/* ... */}
      </footer>
    </div>
  );
};

function App() {
  const [message, setMessage] = useState("");

  // Fetching message from backend on mount
  useEffect(() => {
    fetch("http://localhost:4000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      {/* Le reste de votre application ici */}
      <LandingPage />
    </div>
  );
}

export default App;
export { LandingPage };
