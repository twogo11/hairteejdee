'use client';
import { useState, useEffect } from 'react';
import { Delete, Lock } from 'lucide-react';

interface PasswordProtectionProps {
  onPasswordCorrect: () => void;
}

export default function PasswordProtection({ onPasswordCorrect }: PasswordProtectionProps) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const correctPin = '1234';

  const handleNumberClick = (num: string) => {
    if (pin.length < 4) {
      setPin(prev => prev + num);
      setError(false);
    }
  };

  const handleDelete = () => {
    setPin(prev => prev.slice(0, -1));
    setError(false);
  };

  useEffect(() => {
    if (pin.length === 4) {
      if (pin === correctPin) {
        onPasswordCorrect();
      } else {
        setError(true);
        setTimeout(() => {
          setPin('');
          setError(false);
        }, 800);
      }
    }
  }, [pin, onPasswordCorrect]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f1f3eb] p-6">
      {/* Card: Matcha Green Theme */}
      <div className={`w-full max-w-[340px] bg-[#dce3c8] rounded-[3rem] shadow-2xl p-8 border-4 border-[#c2cca3] transition-all duration-300 ${error ? 'animate-shake border-red-300' : ''}`}>
        
       {/* Header Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative group">
            {/* Арын гэрэлтсэн эффект */}
            <div className="absolute -inset-1 bg-[#b5bf93] rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            {/* GIF Container */}
            <div className="relative bg-[#f1f3eb] p-2 rounded-3xl border-2 border-[#c2cca3] overflow-hidden shadow-lg">
              <img 
                src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGxiNGkwZGJnMWZ0b255dWk4cW55OWtieGtkNTk1Y2p5ZHowdjlnZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/35PYDhkVkOPEEAKzkc/giphy.gif" 
                alt="Matcha Vibe GIF" 
                className="w-64 h-auto rounded-2xl"
              />
            </div>
          </div>

          {/* Шинэ текст хэсэг */}
          <h2 className="mt-6 text-xl font-black text-[#5c6645] tracking-[0.15em] uppercase text-center drop-shadow-sm">
            Guess whose birthday?
          </h2>
        </div>

        {/* Display Dots: Soft Matcha Shades */}
        <div className="flex justify-center gap-6 mb-12">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded-full transition-all duration-300 transform ${
                pin.length > i 
                  ? 'bg-[#5c6645] scale-125' 
                  : 'bg-[#c2cca3]'
              } ${error ? 'bg-red-500 animate-pulse' : ''}`}
            />
          ))}
        </div>

        {/* Keypad: Mobile Friendly Big Buttons */}
        <div className="grid grid-cols-3 gap-4 justify-items-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="h-16 w-16 flex items-center justify-center rounded-2xl bg-[#f1f3eb] text-2xl font-bold text-[#5c6645] shadow-[4px_4px_0px_#c2cca3] active:translate-y-1 active:shadow-none transition-all border border-[#c2cca3] hover:bg-[#e6e9da]"
            >
              {num}
            </button>
          ))}
          
          <div className="h-16 w-16"></div> {/* Empty space */}

          <button
            onClick={() => handleNumberClick('0')}
            className="h-16 w-16 flex items-center justify-center rounded-2xl bg-[#f1f3eb] text-2xl font-bold text-[#5c6645] shadow-[4px_4px_0px_#c2cca3] active:translate-y-1 active:shadow-none transition-all border border-[#c2cca3] hover:bg-[#e6e9da]"
          >
            0
          </button>

          <button
            onClick={handleDelete}
            className="h-16 w-16 flex items-center justify-center rounded-2xl bg-[#e6e9da] text-[#7e8c5d] active:scale-90 transition-all border border-[#c2cca3]"
          >
            <Delete size={26} strokeWidth={2.5} />
          </button>
        </div>

        {error && (
          <p className="text-center text-[#9c4a4a] mt-8 font-bold text-xs uppercase tracking-widest">
            Буруу байна, дахин оролдоно уу
          </p>
        )}
      </div>

      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        .animate-shake {
          animation: shake 0.15s ease-in-out 0s 2;
        }
      `}</style>
    </div>
  );
}