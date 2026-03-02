'use client';
import { useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';

export default function Page() {
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
          <img 
            src="https://media.giphy.com/media/5YuoNNBoTtAxy7Ert9/giphy.gif" 
            alt="Giphy animation"
            className="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
          <h1 className="text-4xl font-bold text-[#ad1457]">
            Сайн уу, Чандаа Чамд зориулж хийсэн сайтад тавтай морил!
          </h1>
          <p className="text-lg text-[#880e4f]">
            тэгээд чи сайн код хийж ороод ирсэн ш дээ. Тэрэн шиг зөндөө их код байна. Энд жагсаалтыг үлдээ, сонирхоноос орж эхлээд үзээрэй.
          </p>
          <p className="text-lg text-[#880e4f]">
            yg ene daraallaar orood haraarai chandaa - 0302 unuudr  0505 one piece  4545 tort 6767 you know 6969 belegnii detail 1234 hamgiin suuld in orooroi
          </p>

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



