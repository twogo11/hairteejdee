'use client';
import { useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      // Салют буудуулах эффект
      const duration = 3000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ['#ad1457', '#fecdd3', '#ff4081']
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ['#ad1457', '#fecdd3', '#ff4081']
        });
      }, 250);

      setIsClicked(true);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fff5f7] font-sans p-4 sm:p-6">
      <main className={`flex w-full ${!isClicked ? 'max-w-md' : 'max-w-2xl'} flex-col items-center justify-center bg-[#ffe4e6] rounded-[2rem] shadow-2xl border-4 border-[#fecdd3] transition-all duration-700 ease-in-out relative overflow-hidden`}>
        
        {/* Чимэглэлийн элементүүд (Арын фоны хээ) */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-[#ad1457] opacity-5 rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#ad1457] opacity-5 rounded-tl-full"></div>

        <div className="flex flex-col items-center w-full py-10 px-6 sm:px-10 z-10">
          
          {/* Зураг ба Захидлын хэсэг */}
          <div className="w-full flex flex-col items-center">
            
            {!isClicked ? (
              /* --- ЭХНИЙ ЗУРАГ (CLICK ME) --- */
              <div 
                onClick={handleClick}
                className="cursor-pointer group relative flex flex-col items-center animate-in fade-in zoom-in duration-500"
              >
                <div className="relative overflow-hidden rounded-3xl border-4 border-[#ad1457] shadow-xl transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
                  <img 
                    src="https://i.pinimg.com/736x/15/c4/c5/15c4c56b132a7e1ab53372783f5af8ec.jpg"
                    alt="Эхний зураг" 
                    className="max-w-[280px] sm:max-w-xs w-full h-auto object-cover"
                  />
                  {/* Дээр нь гарах бүрхүүл */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-300"></div>
                </div>
                
                <div className="mt-6 bg-white/60 backdrop-blur-sm px-6 py-2 rounded-full border border-[#ad1457]/30 shadow-sm animate-bounce">
                  <p className="text-[#ad1457] font-bold text-sm tracking-wide">
                    Намайг дар! ✨
                  </p>
                </div>
              </div>
            ) : (
              /* --- ЗАХИДАЛ (TEXT CONTENT) --- */
              <div className="w-full animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-inner border border-white/50 text-left">
                  <h2 className="text-2xl font-bold text-[#880e4f] mb-6 text-center">
                    Happy Birthday! 🎂
                  </h2>
                  
                  <div className="space-y-4 text-[#4a041d] text-sm sm:text-base leading-relaxed overflow-y-auto max-h-[60vh] pr-2 scrollbar-thin scrollbar-thumb-[#ad1457] scrollbar-track-transparent">
                    <p className="font-semibold">Hi Chandaa,</p>
                    
                    <p>
                      I want to start by wishing you a very Happy Birthday! As I write this, I’m sitting here, happily sacrificing my sleep to finish this gift for you. My only goal is to see you happy and make sure you have the most wonderful day.
                    </p>
                    
                    <p>
                      You might wonder why I’m doing all this... well, I’ve always felt that if I were born a woman in another multiverse, I would be exactly like you. In my mind, you are the female version of myself. There are so many reasons and stories behind that thought, haha.
                    </p>
                    
                    <p>
                      One of the things I cherish most about us is how our conversations stay just between the two of us. That shared privacy is what makes our bond so incredibly close and special. There is an energy and a feeling when I'm with you that I just can't find anywhere else.
                    </p>
                    
                    <p>
                      To be honest, when I hear about how your "friends" treat you or the things they say, I can't help but think they are blind. I don't understand how anyone could treat a girl like you that way. You deserve so much more. You have such a beautiful soul and existence—honestly, you're almost too good for this world.
                    </p>
                    
                    <p>
                      I know sometimes you’re hard on yourself regarding your looks, trying to measure up to artificial beauty standards. But please, don’t. Chandaa, you are truly stunning. You are a <span className="font-bold text-[#ad1457]">"Chandmani"</span> (a precious jewel) born from your parents.
                    </p>
                    
                    <p>
                      Lastly, I have one request: please don’t feel pressured to do something big for my birthday in return. If you stress yourself out or get upset trying to "repay" the gesture, it would make me feel very uneasy. The way you interact with me every day, the way we talk, and the unique connection we share—that is your gift to me.
                    </p>
                    
                    <p>
                      Happy Birthday once again! May this year be your year. Today was a beautiful day, and I wish you nothing but the best of health and all the happiness in the world.
                    </p>
                    
                    <p className="pt-4 font-bold text-right text-[#880e4f]">
                      - M. Tuguldur
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Буцах товч */}
          <Link 
            href="/" 
            className="mt-8 px-8 py-3 bg-[#ad1457] text-white font-bold rounded-full shadow-lg hover:bg-[#880e4f] hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base z-20"
          >
            ← Буцах
          </Link>
        </div>
      </main>
    </div>
  );
}