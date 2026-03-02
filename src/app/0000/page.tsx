'use client';

import { useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';

// Жагсаалтын өгөгдлийн бүтэц
interface ScheduleItem {
  id: string;
  title: string;
  isLast?: boolean;
}

const scheduleData: ScheduleItem[] = [
  { id: "0302", title: "Өнөөдөр" },
  { id: "0505", title: "One Piece" },
  { id: "4545", title: "Торт" },
  { id: "6767", title: "You know..." },
  { id: "6969", title: "Бэлэгний деталь" },
  { id: "1224", title: "tony tony chopper" },
  { id: "1234", title: "Хамгийн сүүлд нь ороорой", isLast: true },
];

export default function Page() {
  const [isClicked, setIsClicked] = useState(false);

  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ad1457', '#fecdd3', '#ff4081']
    });
    setIsClicked(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fff5f7] font-sans p-6">
      <main className="flex w-full max-w-2xl flex-col items-center justify-center bg-[#ffe4e6] rounded-[3rem] py-12 px-8 shadow-2xl border-4 border-[#fecdd3] text-center animate-in fade-in zoom-in duration-700">
        
        {/* Зургийн хэсэг */}
        <div className="flex flex-col items-center gap-6 w-full">
          <img 
            src="https://media.giphy.com/media/5YuoNNBoTtAxy7Ert9/giphy.gif" 
            alt="Giphy animation"
            className="w-48 h-48 object-cover rounded-2xl shadow-lg border-4 border-white"
          />
          
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-[#ad1457] leading-tight">
              Сайн уу, Чандаа! <br/> 
              <span className="text-2xl">Чамд зориулсан сайтад тавтай морил ✨</span>
            </h1>
            <p className="text-lg text-[#880e4f] max-w-md mx-auto">
              Тэгээд чи сайн код хийж ороод ирсэн шүү дээ. Тэрэн шиг зөндөө их код байна. 
              Энд жагсаалтыг үлдээе, сонирхоод үзээрэй.
            </p>
          </div>

          {/* Салют буудуулах товчлуур */}
          <button 
            onClick={handleConfetti}
            className="px-6 py-2 bg-white text-[#ad1457] rounded-full font-bold shadow-sm hover:shadow-md transition-all active:scale-95 border border-pink-200"
          >
            {isClicked ? "Дахиад салют уу? 🎈" : "Энд дараарай! 🎉"}
          </button>

          {/* Хөтөлбөрийн дараалал (Card) */}
          <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl border-l-8 border-[#880e4f] text-left">
            <h2 className="text-xl font-bold text-[#880e4f] mb-4 flex items-center gap-2">
              📅 Хөтөлбөрийн дараалал
            </h2>
            
            <ul className="space-y-3">
              {scheduleData.map((item) => (
                <li 
                  key={item.id} 
                  className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                    item.isLast ? "mt-4 pt-3 border-t border-pink-100 opacity-80 italic" : "hover:bg-pink-50"
                  }`}
                >
                  <span className={`font-mono px-2 py-1 rounded text-sm ${
                    item.isLast ? "bg-gray-100 text-gray-500" : "bg-[#fce4ec] text-[#880e4f] font-bold"
                  }`}>
                    {item.id}
                  </span>
                  <span className={`text-[#880e4f] ${item.id === "0302" ? "font-bold underline decoration-dotted" : ""}`}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Буцах товч */}
          <Link 
            href="/" 
            className="mt-6 px-10 py-3 bg-[#ad1457] text-white font-bold rounded-full shadow-lg hover:bg-[#880e4f] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            ← Буцах
          </Link>
        </div>
        
      </main>
    </div>
  );
}


