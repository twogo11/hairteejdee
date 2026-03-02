'use client';
import { useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';

export default function Page() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
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
        
        <div className="flex flex-col items-center gap-8 w-full">
          
          <h1 className="text-4xl font-bold text-[#ad1457]">
            tony tony chopper
          </h1>
          

          {/* YouTube Бичлэг оруулах хэсэг */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-2 border-[#fb7185]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/feoCpaaRkb4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
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