'use client';
import { useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';

// Чиний өгсөн 8 зургийн линк
const imgs = [
  "https://res.cloudinary.com/do7jyitxi/image/upload/v1776880973/Screenshot_2026-04-17-12-02-42-496_com.miui.gallery-edit_dbhhwu.jpg", // 1. Нүүр зураг
  "https://res.cloudinary.com/do7jyitxi/image/upload/q_auto/f_auto/v1776880974/FB_IMG_1776397985574_y6pqqr.jpg", // 2. Кино шиг өргөн
  "https://res.cloudinary.com/do7jyitxi/image/upload/q_auto/f_auto/v1776880972/FB_IMG_1776398031959_hfzi7b.jpg", // 3. Зэрэгцээ 1
  "https://res.cloudinary.com/do7jyitxi/image/upload/q_auto/f_auto/v1776880974/Screenshot_2026-04-17-12-02-16-583_com.miui.gallery-edit_sx7flr.jpg", // 4. Зэрэгцээ 2
  "https://res.cloudinary.com/do7jyitxi/image/upload/q_auto/f_auto/v1776880972/FB_IMG_1776398053175_gloenp.jpg", // 5. Арын фон
  "https://res.cloudinary.com/do7jyitxi/image/upload/q_auto/f_auto/v1776445154/Screenshot_2026-04-18-00-49-52-017_com.facebook.katana-edit_uy0ffa.jpg", // 6. Коллаж 1
  "https://res.cloudinary.com/do7jyitxi/image/upload/q_auto/f_auto/v1776880972/FB_IMG_1776398077048_yteg7q.jpg", // 7. Коллаж 2
  "https://res.cloudinary.com/do7jyitxi/image/upload/q_auto/f_auto/v1776445140/FB_IMG_1776444830370_1776444857836edit_if7jfd.jpg", // 8. Коллаж 3
];

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      const duration = 4000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 50 };

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);

        const particleCount = 40 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ['#ffffff', '#facc15', '#e5e5e5'] // Алтлаг болон цагаан салют
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ['#ffffff', '#facc15', '#e5e5e5']
        });
      }, 250);

      setIsClicked(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-serif selection:bg-white selection:text-black flex flex-col items-center p-4 sm:p-6 overflow-x-hidden">
      
      {/* Background Texture Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-0" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>

      <main className={`flex w-full ${!isClicked ? 'max-w-md min-h-[80vh] items-center justify-center' : 'max-w-2xl'} flex-col transition-all duration-1000 ease-in-out relative z-10`}>
        
        {!isClicked ? (
          /* --- COVER PAGE --- */
          <div onClick={handleClick} className="cursor-pointer group relative flex flex-col items-center animate-in fade-in zoom-in duration-700">
            <div className="relative overflow-hidden rounded-sm p-3 bg-neutral-900 border border-neutral-800 shadow-[0_0_60px_rgba(255,255,255,0.05)] transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                src={imgs[0]} 
                alt="Memory with Mom" 
                className="max-w-[280px] sm:max-w-xs w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
              />
            </div>
            
            <div className="mt-12 bg-transparent border-b border-neutral-700 pb-1 animate-pulse">
              <p className="text-neutral-400 font-sans text-[10px] tracking-[0.4em] uppercase">
                Ээждээ... (дарна уу)
              </p>
            </div>
          </div>
        ) : (
          /* --- THE LETTER STORY --- */
          <div className="w-full flex flex-col pt-12 sm:pt-20 pb-32 animate-in fade-in slide-in-from-bottom-24 duration-[1.5s]">
            
            <h1 className="text-3xl sm:text-4xl font-light text-center mb-20 text-white tracking-[0.2em] uppercase opacity-80 leading-relaxed">
              Хайрт ээждээ
            </h1>

            <div className="text-base sm:text-lg leading-loose space-y-10 px-2 sm:px-4 text-neutral-300">
              
              <div className="space-y-4">
                <p className="text-xl sm:text-2xl text-white italic">Сайн байна уу, ээжээ.</p>
                <p>Танд энэ захидлыг унших өдрийн мэнд хүргэе.</p>
                <p>Би яг одоо шөнийн 3 цагт энэ захидлын веб сайтыг хийж сууж байна. Өөрсдийнхөө багийн зураг болон асуултуудыг бодож суухдаа их зүйл эргэцүүллээ.</p>
              </div>

              {/* Зураг 2: Cinematic Moment */}
              <div className="my-16 w-full h-56 sm:h-80 overflow-hidden rounded-sm border border-neutral-900 shadow-2xl">
                <img src={imgs[1]} className="w-full h-full object-cover" alt="Memory 2" />
              </div>

              <p>
                Юу ч гэсэн өнөөдрийг хүртэл таны мишээл бид хоёрын төлөө явсан хичээл зүтгэлийг насны минь тоо нэмэгдэх бүрд илүү ойлгож байна. Заримдаа амьдралд хүнд, хэцүү зүйлс байдаг ч түүнийг давж гарах чадвартай, сэтгэлийн хаттай болгож намайг өсгөсөн шүү та, ээжээ.
              </p>

              {/* Зураг 3 & 4: Зэрэгцээ */}
              <div className="my-16 grid grid-cols-2 gap-4 sm:gap-6">
                <div className="h-44 sm:h-72 overflow-hidden rounded-sm border border-neutral-900 transform -rotate-1 hover:rotate-0 transition duration-500">
                  <img src={imgs[2]} className="w-full h-full object-cover" alt="Memory 3" />
                </div>
                <div className="h-44 sm:h-72 overflow-hidden rounded-sm border border-neutral-900 transform rotate-1 translate-y-6 hover:rotate-0 transition duration-500">
                  <img src={imgs[3]} className="w-full h-full object-cover" alt="Memory 4" />
                </div>
              </div>

              <p>
                Аливаа зүйлийг сурах эрмэлзэлтэй, шударга, зөөлөн сэтгэлтэй хүн болгож өсгөсөнд тань баярлалаа. Таны надад хийж өгсөн зүйлс, зориулсан цаг хугацаа маш их. Харин миний танд хийж өгсөн, зориулсан зүйл бараг байхгүй шахуу юм байна гэж бодохоор сэтгэл нэг л хүнд болдог.
              </p>

              {/* Зураг 5: Emotional Backdrop */}
              <div className="my-20 relative w-full py-24 px-6 sm:px-10 text-center flex items-center justify-center overflow-hidden rounded-lg border border-neutral-900/50">
                <div className="absolute inset-0 z-0">
                  <img src={imgs[4]} className="w-full h-full object-cover opacity-25 scale-110" alt="Backdrop" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
                </div>
                <div className="relative z-10 space-y-6">
                  <p className="text-lg sm:text-xl font-light text-white leading-relaxed italic">
                    "Хэрвээ та намайг төрүүлээгүй бол, тэдэн шиг амжилттай явах байсан болов уу гэж хүртэл бодогддог."
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <p>
                  Та хааяа “манай үеийнхэн ийм амжилттай явж байна” гэж хэлэхэд би их эмзэглэдэг. Ээжээ, та ч бас над шиг мөрөөдөлтэй, хүсэл зорилготой жаахан хүүхэд байсан шүү дээ. Тэр бүхнээ ардаа орхиод намайг, миний дүүг өсгөхийн төлөө бүхнээ зориулсан гэж бодохоор иx сэтгэл хүндрүүлдэг.
                </p>

                <p>
                  Нэг удаа аав утсаа авахгүй байхад би урт мессеж бичих гэж байгаад уйлж байсан юм. “Аав хэзээ ч үүргээ биелүүлээгүй, харин та бид хоёрын төлөө бүх хүнд хэцүүг шүд зуун давж гарсан” гэж бичиж суухдаа таны хүчийг илүү их мэдэрсэн.
                </p>
              </div>

              {/* Зураг 6, 7, 8: Коллаж (Polaroid Scattering) */}
              <div className="my-24 relative h-[400px] sm:h-[550px] w-full">
                <div className="absolute left-0 top-0 w-[60%] h-[65%] z-10 transform -rotate-3 hover:scale-105 transition-all duration-500">
                  <div className="w-full h-full bg-neutral-900 p-2 pb-10 border border-neutral-800 shadow-2xl">
                    <img src={imgs[5]} className="w-full h-full object-cover" alt="Collage 1" />
                  </div>
                </div>
                
                <div className="absolute right-0 top-[15%] w-[55%] h-[60%] z-20 transform rotate-6 hover:scale-105 transition-all duration-500">
                  <div className="w-full h-full bg-neutral-900 p-2 pb-10 border border-neutral-800 shadow-2xl">
                    <img src={imgs[6]} className="w-full h-full object-cover" alt="Collage 2" />
                  </div>
                </div>

                <div className="absolute left-[20%] bottom-0 w-[55%] h-[60%] z-30 transform -rotate-2 hover:scale-105 transition-all duration-500">
                  <div className="w-full h-full bg-neutral-900 p-2 pb-10 border border-neutral-800 shadow-2xl">
                    <img src={imgs[7]} className="w-full h-full object-cover" alt="Collage 3" />
                  </div>
                </div>
              </div>

              <div className="space-y-8 pt-10">
                <p>
                  Би өөрийгөө их азгүй хүн гэж боддог байсан. Гэтэл үнэндээ би хамгийн азтай хүн байжээ. Яагаад гэвэл энэ дэлхий дээр надаас ч илүү намайг хайрладаг тэр эмэгтэй хүнийг <span className="text-white font-medium">“ээж”</span> гэж дуудан, энгэрт нь эрхэлж өссөн хүн юм байна.
                </p>

                <p className="text-xl sm:text-2xl text-white text-center pt-10 tracking-widest">
                  Тандаа маш их хайртай шүү, ээжээ.
                </p>
              </div>

            </div>

            {/* ГАРЫН ҮСЭГ */}
            <div className="mt-24 pt-10 border-t border-neutral-900 flex flex-col items-end px-4">
              <p className="text-sm text-neutral-500 tracking-widest uppercase mb-2">Таны хүү,</p>
              <p className="text-2xl text-white font-light tracking-widest">Төгөлдөр</p>
            </div>

            {/* БУЦАХ */}
            <div className="mt-32 flex justify-center">
              <Link 
                href="/" 
                className="px-10 py-4 bg-transparent border border-neutral-800 text-neutral-500 font-sans text-[10px] tracking-[0.5em] uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-700"
              >
                Буцах
              </Link>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}