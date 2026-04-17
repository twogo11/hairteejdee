'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import confetti from 'canvas-confetti';

export default function WelcomePage() {
  const router = useRouter();

  useEffect(() => {
    // Хуудас ачаалагдах үед шууд салют буудна
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      // Хар цагаан өнгөний хослол
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ffffff', '#71717a']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ffffff', '#71717a']
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const startTest = () => {
    router.push('/shalgalt');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans p-4">
      {/* Үндсэн Карт */}
      <main className="flex w-full max-w-lg flex-col items-center justify-center bg-zinc-950 rounded-[3rem] py-12 px-8 shadow-2xl border border-zinc-800/50 text-center animate-in fade-in zoom-in duration-1000">
        
        {/* Зургийн хэсэг */}
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="w-full flex justify-center">
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHlsMWg2YWh4ZTV6cTg3eDllNGpoZzl2NmJyeDZ3eXVobnFodDNmdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qGvmdlfJ0FtBSwxqA3/giphy.gif" 
              alt="Welcome animation"
              className="w-32 md:w-40 h-auto rounded-xl shadow-sm" 
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Миний хийсэн сайтад тавтай морил!
            </h1>
            
            <div className="bg-zinc-900/40 p-6 rounded-3xl border border-zinc-800/30">
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed text-left font-light">
                Би бусад хүүхдүүд шиг ChatGPT-ээр бичүүлсэн захиа цаасан дээр бичиж өгч байснаас 
                танд зориулаад сайт хийвэл хамаагүй илүү гэж бодсон юм. 
                Юуны тулд 1 жил жинхэнэ код бичиж суулаа даа haha. 
                <br /><br />
                За за, таныг эхлээд 10 асуулттай жижиг асуултаар сорьж үзье гэж бодлоо. 
                Хэрвээ 8-аас дээш зөв хариулвал код гарч ирнэ. 
                Тэр кодыг хийгээд орж уншаарай. Танд амжилт!
              </p>
            </div>
          </div>

          {/* Үйлдэл хийх хэсэг */}
          <div className="flex flex-col w-full gap-5 mt-4">
            <button 
              onClick={startTest}
              className="group relative px-8 py-3.5 bg-white hover:bg-zinc-200 text-black font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
            >
              <span className="text-sm uppercase tracking-wider">Тест эхлүүлэх</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Чимэглэл */}
        <div className="mt-10 flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-zinc-800"></div>
          ))}
        </div>
      </main>
    </div>
  );
}