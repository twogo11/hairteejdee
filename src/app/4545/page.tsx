'use client';
import { useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';

export default function BirthdayPage() {
  const [isClicked, setIsClicked] = useState(false);

  // Энд ЗУРГИЙН ЛИНК болон ТАЙЛБАР ТЕКСТ-ээ солиорой
  const memories = [
    { 
      src: "https://i.pinimg.com/736x/fc/ba/7d/fcba7dbafbe7c010724eda535076b0c4.jpg", 
      text: "Энэ мишээл бэйкеригийн тирамису" 
    },
    { 
      src: "https://i.pinimg.com/736x/4c/7a/96/4c7a960749ead6f1f86d9c403de6fa23.jpg", 
      text: "Энэ нөгөө Сүхбаатарын кофе шопын тирамису 10к is crazy " 
    },
    { 
      src: "https://i.pinimg.com/736x/18/ed/f0/18edf0d0ce422919cc499614d5396a6d.jpg", 
      text: "Тэр өдөр Тирамисү хайж байгаад ядарсан ч гоё байсан шүү." 
    },
    { 
      src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2prbDlpc2oxZmdvZXk3ajV2N2psZzk0NzlzaGhtb2k1OGV5ZmQ0dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1xkN1mJBKeIw2wsCKg/giphy.gif", 
      text: "Бэлгийг чинь бэлдэж байх үеийн мэдрэмж..." 
    },
    { 
      src: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHZxMTIzeDJsMHMxZnRlb25vZ3kyZjlodW0waHo2dm5oaXJoNnN0YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hU23C1q262PFNUVBY5/giphy.gif", 
      text: "TIRAMISU" 
    },
  ];

  const handleClick = () => {
    if (!isClicked) {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ad1457', '#ff4081', '#fecdd3', '#ffffff']
      });
      setIsClicked(true);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#fff5f7] font-sans p-4 md:p-10 flex flex-col items-center">
      
      {/* Үндсэн Карт */}
      <main className="w-full max-w-2xl bg-[#ffe4e6] rounded-[2.5rem] py-12 px-6 md:px-12 shadow-2xl border-4 border-[#fecdd3] animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* Толгой хэсэг */}
        <div className="text-center mb-10">
          <span className="text-[#ff4081] text-xs font-bold uppercase tracking-widest">Happy Birthday Message</span>
          <h1 className="text-4xl md:text-5xl font-black text-[#ad1457] mt-2 italic">
            Төрсөн өдрийн мэнд! 🎉
          </h1>
        </div>

        {/* Текстийн хэсэг */}
        <div className="space-y-8 text-[#880e4f] text-base md:text-lg leading-relaxed text-left">
          
          <div className="bg-white/40 p-5 rounded-2xl border-l-8 border-[#ad1457]">
            <p>
              Нэг удаа бүр дээр үед чи <strong>"Тирамисү идэх юмсан"</strong> гээд нэг нот бичиж байсан юм аа. Сая хэдэн хоногийн өмнө чи рийл гүйлгэж байгаад Тирамисү гарч ирэхэд "идэх юмсан" гэж аяархан хэлснийг чинь би бараг сонсоогүй ч "би ч бас идэх юмсан" гэж тухайн үедээ дотроо бодчихсон байсан юм хаха.
            </p>
          </div>

          <p>
            Тэгээд сая 28-нд хичээл ороход уг нь Мянгаа, Амка хоёртой яриад чамайг 12 цагт лаатай Тирамисү үлээлгэе гэж төлөвлөж байлаа. Тэгтэл чамаас "найзууд үлээлгэх магадлалтай" гэж сонсоод "за за, давхцуулаад яах вэ" гэж бодоод маргааш нь үлээлгэхээр шийдсэн юм.
          </p>

          <p>
            Тэр ч яах вэ, Тирамисү хаанаас олох нь тийм ч амар байсангүй. Эхлээд бүр Фэйсбүүкээр хайж үзлээ, олдохгүй болохоор нь "за за, Tous Les Jours оръё" гэсэн чинь аймар жижигхэн мөртлөө 15к гэнэ. "Нэг мөсөн өгч байгаа юм чинь чанартайг нь өгье" гэж бодоод дахиад хайлаа. Тэгсэн нэг кофе шоп гаргана, маргааш ирээд авч болно, үнэ нь 10к гэхээр нь бүр итгэж өгөхгүй... Гүүгл мапаас хайсан чинь хаа байсан Сүхбаатарт байдаг жижигхэн газар байдаг юм байна хаха.
          </p>

          <p>
            За за, бүр шантраад байж байтал рийл дээр <strong>"Misheel Bakery"</strong> гараад ирлээ. Тэгсэн яг хагас, бүтэн сайнд захиалга авна гэхээр нь ухаан жолоогүй мөнгөө гялс босгоод захиалгаа өгчихлөө. Тэгээд би л сайн найз нь болохоор өөрөө очиж авахаар болоод, Яармаг руу 12 цагт (уг нь бүтэн өдөржин унтана гэж бодсон байсан) явж аваад, "Гэгээтэн" орж бэлгэнд чинь хэдэн юм авсан. Тэрийг бэлгэн доторх хэсгээс уншаарай.
          </p>

          <p className="font-medium">
            Тэгээд яах вэ дээ, ядаж байхад сайт хиймээр, усанд ормоор, бэлгийг чинь бэлдмээр байдаг... цаг хурдан өнгөрөхгүй юм. Гэхдээ яах вэ, үүнийг яг одоо шөнийн 3 цаг болж байхад бичээд сууж байна. За за, би яг эрүүл биш байна аа. ❤️
          </p>

          <div className="text-center py-6">
            <h2 className="text-3xl font-black text-[#ad1457] mb-6">HAPPY BIRTHDAY GIRL! 🎂</h2>
            <button 
              onClick={handleClick}
              className={`px-10 py-4 font-bold rounded-full shadow-lg transition-all transform active:scale-95 ${isClicked ? 'bg-[#fecdd3] text-[#ad1457]' : 'bg-[#ff4081] text-white hover:bg-[#ad1457] hover:scale-105'}`}
            >
              {isClicked ? 'Party Started! 🥳' : 'Чамд зориулсан салют! ✨'}
            </button>
          </div>
        </div>

        {/* Зургийн Галерей (Тексттэй) */}
        <div className="mt-12 space-y-8">
          <h3 className="text-xl font-bold text-[#ad1457] text-center italic mb-4">Манай дурсамжууд:</h3>
          
          <div className="grid grid-cols-1 gap-8">
            {memories.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-4 pb-8 shadow-xl rounded-sm border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-300"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={item.src} 
                  alt={`Memory ${index + 1}`} 
                  className="w-full h-auto max-h-[500px] object-cover rounded-sm mb-4"
                />
                <p className="text-[#880e4f] text-center font-medium italic text-base md:text-lg px-2">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Доод хэсэг */}
        <div className="mt-16 flex flex-col items-center gap-6">
           <Link 
            href="/" 
            className="px-8 py-3 bg-[#ad1457] text-white font-bold rounded-full hover:bg-[#880e4f] transition-all shadow-md"
          >
            ← Буцах
          </Link>
          <p className="text-[#ad1457] opacity-60 text-[10px] tracking-[0.2em] font-bold">TWOGO 3:00 AM</p>
        </div>

      </main>
    </div>
  );
}