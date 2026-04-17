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
      router.push(`/${pin}`);
      const timer = setTimeout(() => setPin(''), 500);
      return () => clearTimeout(timer);
    }
  }, [pin, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fff5f7] p-6">
      <div className="w-full max-w-[340px] bg-[#ffe4e6] rounded-[3rem] shadow-2xl p-8 border-4 border-[#fecdd3]">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative bg-[#fff1f2] p-2 rounded-3xl border-2 border-[#fecdd3] overflow-hidden shadow-lg">
            <img 
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnMzZ25zaDFkc201OWRiNmNxaTY4cW5mOW50OXEwbDhqeDdrMGprZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgG50Fb7Mi0prBC/giphy.gif" 
              alt="Pink Vibe" 
              className="w-64 h-auto rounded-2xl"
            />
          </div>
          <h2 className="mt-6 text-xl font-black text-[#ad1457] tracking-[0.15em] uppercase text-center">
            zass qr unshuultsn naajin 
          </h2>
        </div>

        {/* Display Dots */}
        <div className="flex justify-center gap-6 mb-12">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                pin.length > i ? 'bg-[#db2777] scale-125' : 'bg-[#fca5a5]'
              }`}
            />
          ))}
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="h-16 w-16 flex items-center justify-center rounded-2xl bg-[#fff1f2] text-2xl font-bold text-[#ad1457] shadow-[4px_4px_0px_#fca5a5] active:translate-y-1 active:shadow-none border border-[#fecdd3]"
            >
              {num}
            </button>
          ))}
          
          <div className="h-16 w-16"></div>

          <button
            onClick={() => handleNumberClick('0')}
            className="h-16 w-16 flex items-center justify-center rounded-2xl bg-[#fff1f2] text-2xl font-bold text-[#ad1457] shadow-[4px_4px_0px_#fca5a5] active:translate-y-1 active:shadow-none border border-[#fecdd3]"
          >
            0
          </button>

          <button
            onClick={handleDelete}
            className="h-16 w-16 flex items-center justify-center rounded-2xl bg-[#ffe4e6] text-[#fb7185] active:scale-90 border border-[#fecdd3]"
          >
            <Delete size={26} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}