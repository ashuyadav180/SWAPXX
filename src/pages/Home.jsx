// src/pages/Home.jsx
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="relative h-screen w-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white overflow-hidden">
      <main className="flex flex-col items-center justify-center h-full text-center transform -translate-y-12">
        <motion.h1
          className="text-7xl md:text-9xl font-extrabold text-cyan-400 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Swap<span className="text-sky-500">X</span>
        </motion.h1>

        <p className="text-xl md:text-2xl text-gray-300">
          Last-minute ticket exchange. Sustainable. Swift. Smart.
        </p>
      </main>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-cyan-800/10 to-transparent pointer-events-none" />
    </div>
  );
}

export default Home;
