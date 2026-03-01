'use client';
import { useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      // Салют буудуулах эффект
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ad1457', '#fecdd3', '#ff4081']
      });
      setIsClicked(true);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fff5f7] font-sans p-6">
      <main className="flex w-full max-w-2xl flex-col items-center justify-center bg-[#ffe4e6] rounded-[3rem] py-16 px-10 shadow-2xl border-4 border-[#fecdd3] text-center animate-in fade-in zoom-in duration-700">
        
        

        {/* Зургийн хэсэг */}
        <div className="flex flex-col items-center gap-8">
          
          {/* Peak Day текст */}
          <h1 className="text-6xl font-bold text-[#ad1457] tracking-wider animate-bounce">
            PEAK DAY
          </h1>

          {/* GIF нэмэх */}
          <div className="w-full max-w-md">
            <img 
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3NpZnN3eTU1b3luYTF2amh5NjU4ZHhjOXN3bGwwM3lvaXR1eWI0ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XsRbLNGt71qiPHnGCB/giphy.gif" 
              alt="Giphy animation"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Буцах товч */}
          <Link 
            href="/" 
            className="mt-4 px-8 py-3 bg-[#ad1457] text-white font-bold rounded-full shadow-lg hover:bg-[#880e4f] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            ← Буцах
          </Link>
        </div>
        
      </main>
    </div>
  );
}