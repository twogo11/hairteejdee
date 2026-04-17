'use client';
import { useState, useEffect } from 'react';
import { Delete } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PasswordProtection() {
  const [pin, setPin] = useState('');
  const router = useRouter();

  const handleNumberClick = (num: string) => {
    if (pin.length < 4) {
      setPin(prev => prev + num);
    }
  };

  const handleDelete = () => {
    setPin(prev => prev.slice(0, -1));
  };

  useEffect(() => {
    if (pin.length === 4) {
      const timer = setTimeout(() => {
        router.push(`/${pin}`);
        setPin('');
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [pin, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4 font-sans selection:bg-white/20">
      {/* Main Container */}
      <div className="w-full max-w-[360px] bg-zinc-950 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,1)] p-8 border border-zinc-800/50">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-full aspect-video rounded-3xl overflow-hidden border border-zinc-800">
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3bGtrbnRzbzludjBnYmxvYzYwOXg5bnZqczRsZWR0Z296b3dxMzZjZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l2SpNdjtnTiigTi6Y/giphy.gif" 
              alt="Visual" 
              className="w-full h-full object-cover" // Бүх уусалт, өнгийг авч хаяв
            />
          </div>
          
          <h2 className="mt-8 text-lg font-bold text-white tracking-[0.15em] uppercase text-center">
            QR Уншуулсанд баярлалаа
          </h2>
          <p className="mt-2 text-zinc-500 text-sm font-medium tracking-wide">
            Нууц код нь <span className="text-white font-bold underline underline-offset-4">0000</span>
          </p>
        </div>

        {/* Display Dots */}
        <div className="flex justify-center gap-6 mb-12">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-400 ease-in-out ${
                pin.length > i 
                  ? 'bg-white scale-125 shadow-[0_0_15px_rgba(255,255,255,0.8)]' 
                  : 'bg-zinc-800'
              }`}
            />
          ))}
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-5 justify-items-center px-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="h-16 w-16 flex items-center justify-center rounded-full bg-zinc-900 text-2xl font-light text-zinc-100 shadow-sm active:scale-90 active:bg-white active:text-black transition-all duration-150 border border-zinc-800"
            >
              {num}
            </button>
          ))}
          
          <div className="h-16 w-16"></div>

          <button
            onClick={() => handleNumberClick('0')}
            className="h-16 w-16 flex items-center justify-center rounded-full bg-zinc-900 text-2xl font-light text-zinc-100 shadow-sm active:scale-90 active:bg-white active:text-black transition-all duration-150 border border-zinc-800"
          >
            0
          </button>

          <button
            onClick={handleDelete}
            className="h-16 w-16 flex items-center justify-center rounded-full text-zinc-500 active:scale-90 active:text-white transition-all duration-150"
          >
            <Delete size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Footer Text */}
        <div className="mt-10 text-center">
          <span className="text-[10px] text-zinc-700 uppercase tracking-[0.5em] font-medium">
            Authorized Only
          </span>
        </div>
      </div>
    </div>
  );
}