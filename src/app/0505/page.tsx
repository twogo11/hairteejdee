'use client';

import Link from 'next/link'; // Link санг оруулж ирнэ

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#fff5f7] p-6 font-sans">
      
      <div className="flex flex-col items-center max-w-lg w-full">
        
        {/* Зургийн дээд талын текст */}
        <h1 className="mb-6 text-3xl font-black text-[#880e4f] tracking-tight text-center">
          "Хэрвээ чи One Piece-ийн дүр байсан бол..." 🌸
          <span className="block text-lg font-medium text-[#880e4f] mt-2 italic">
            Таны дүр: Boa Hancock
          </span>
        </h1>

        {/* Зураг */}
        <div className="relative w-full rounded-[2rem] overflow-hidden shadow-xl border-4 border-white mb-8">
          <img 
            src="https://i.pinimg.com/736x/0d/35/46/0d3546764fd444a5f3b7d33f71a29e63.jpg" 
            alt="cute" 
            className="w-full h-auto"
          />
        </div>

        {/* БУЦАХ ТОВЧ: Үндсэн нүүр рүү "/" чиглүүлнэ */}
        <Link 
          href="/" 
          className="px-8 py-3 bg-[#ad1457] text-white font-bold rounded-full shadow-lg hover:bg-[#880e4f] transition-all duration-300 hover:scale-105 active:scale-95"
        >
          ← Буцах
        </Link>

      </div>
    </div>
  );
}