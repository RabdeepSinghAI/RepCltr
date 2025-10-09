export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold tracking-widest">REPCLTR</h1>
        <div className="space-x-8 text-lg">
<button className="hover:text-gray-400">Home</button>
<button className="hover:text-gray-400">Shop</button>
<button className="hover:text-gray-400">About</button>
<button className="hover:text-gray-400">Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-32 px-4">
        <h2 className="text-6xl md:text-7xl font-extrabold tracking-wide mb-6">
          REP. REPEAT. RELENTLESS.
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mb-10">
          Premium gym wear built for those who live by consistency.<br/>
          Designed for comfort, crafted for performance.
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition-all">
          Shop Now
        </button>
      </section>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 pb-20">
        {["Hoodies", "Tees", "Pump Covers", "Joggers", "Shorts", "Caps"].map((item) => (
          <div
            key={item}
            className="bg-gray-900 rounded-2xl p-6 flex flex-col justify-center items-center hover:bg-gray-800 transition-all"
          >
            <div className="h-48 w-48 bg-gray-700 rounded-xl mb-4" />
            <h3 className="text-xl font-semibold">{item}</h3>
            <p className="text-gray-400 text-sm mt-2">Coming Soon</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Repcltr. All Rights Reserved.
      </footer>
    </div>
  );
}

