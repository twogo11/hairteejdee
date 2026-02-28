'use client';
import { useState } from 'react';
import PasswordProtection from '@/components/PasswordProtection';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const handlePasswordCorrect = () => {
    setShowContent(true);
  };

  // Хэрэв нууц үг оруулаагүй бол PIN хуудсыг харуулна
  if (!showContent) {
    return <PasswordProtection onPasswordCorrect={handlePasswordCorrect} />;
  }

  // Нууц үг зөв үед харагдах "Matcha Style" контент
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f1f3eb] font-sans p-6">
      <main className="flex w-full max-w-2xl flex-col items-center justify-center bg-[#dce3c8] rounded-[3rem] py-16 px-10 shadow-2xl border-4 border-[#c2cca3] text-center animate-in fade-in zoom-in duration-700">
        
        {/* Чиний өгсөн GIF-ийг энд байрлууллаа */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-1 bg-[#b5bf93] rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-[#f1f3eb] p-2 rounded-3xl border-2 border-[#c2cca3] overflow-hidden shadow-lg">
            <img 
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWZiM3VxZGZrNThhZmZqc3M0bTB0eXhlbGJyODVkbWJhMWRqdndkbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5YuoNNBoTtAxy7Ert9/giphy.gif" 
              alt="Matcha Vibe GIF" 
              className="w-64 h-auto rounded-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-black leading-tight tracking-tight text-[#5c6645]">
            Тавтай морил! 🍵
          </h1>
          
          <div className="h-1 w-20 bg-[#7e8c5d] rounded-full opacity-50"></div>

          <p className="max-w-md text-lg leading-relaxed text-[#7e8c5d] font-medium">
            Нууц код амжилттай баталгаажлаа. <br/>
            Одоо та манай тусгай буланд нэвтэрч чадлаа.
          </p>

          <button 
            onClick={() => setShowContent(false)}
            className="mt-4 px-6 py-2 bg-[#7e8c5d] text-[#f1f3eb] rounded-full font-bold hover:bg-[#5c6645] transition-colors shadow-md active:scale-95"
          >
            Гарах
          </button>
        </div>
      </main>
    </div>
  );
}