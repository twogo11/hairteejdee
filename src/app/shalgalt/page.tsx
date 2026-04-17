'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  image?: string;
}

const questions: Question[] = [
  {
    question: "Би багадаа юунаас хамгийн их айдаг байсан бэ?",
    options: ["А. Тариа тариулахаас", "Б. Ганцаараа үлдэхээс", "В. Харанхуйгаас", "Г. Жижигхэн шавжнаас"],
    correctAnswer: 2
  },
  {
    question: "Миний хамгийн дуртай хоол юу вэ?",
    options: ["А. Бууз", "Б. Цуйван", "В. Хуушуур", "Г. Лапша (Гурилтай шөл)"],
    correctAnswer: 1
  },
  {
    question: "Миний хамгийн дуртай бөгөөд хамгийн сайн байсан хичээл юу вэ?",
    options: ["А. Хими эсвэл Физик", "Б. Монгол хэл, Уран зохиол", "В. Шугам зураг, Геометр", "Г. Түүх, Нийгэм"],
    correctAnswer: 2
  },
  {
    question: "Та намайг багад өглөө сэрээхдээ юу гэж дуудаж сэрээдэг байсан бэ?",
    options: [
      "А. Ирээдүйн монгол улсын ерөнхийлөгч сэрээрэй",
      "Б. Ирээдүйн компанийн босс сэрээрэй",
      "В. Босс босс яасан их унтдаг юм",
      "Г. Хурдан босоорой ээж нь өндөг шарчихлаа"
    ],
    correctAnswer: 0
  },
  {
    question: "Хөгшин ээж намайг “хаана далан худалчийн клубд явсан юм уу” гэж хэлдэг байсан бэ?",
    options: ["А. Мөрөн", "Б. Улаанбаатар", "В. Ховд", "Г. Сургууль"],
    correctAnswer: 0
  },
  {
    question: "Би багадаа 'Том болоод яг энэ банкнаас зээл авч бизнесээ босгоно' гэж аль банкийг онцолж ярьдаг байсан бэ?",
    options: ["А. Хаан банк (Khaan Bank)", "Б. Худалдаа хөгжлийн банк (TDB)", "В. Төрийн банк (State Bank)", "Г. Голомт банк (Golomt Bank)"],
    correctAnswer: 0
  },
  {
    question: "7. энэ зураг нь аль аймагт, хэдэн онд авхуулж байсан бэ?",
    image: "https://res.cloudinary.com/do7jyitxi/image/upload/v1776445140/FB_IMG_1776444830370_1776444857836edit_if7jfd.jpg",
    options: ["мөрөн 2016", "улаанбаатар 2014", "архангай 2024", "архангай 2015"],
    correctAnswer: 3
  },
  {
    question: "8. би энд ямар дугаар бичсэн байдаг вэ?",
    image: "https://res.cloudinary.com/do7jyitxi/image/upload/v1776445128/Screenshot_2026-04-18-00-56-23-219_com.picsart.studio.light-edit_w55xld.jpg",
    options: [" 9907-6070", " 9959-1618", " 9414-6953", "9959-1816"],
    correctAnswer: 1
  },
  {
    question: "9. энэ зураг Мишээлийн хэдэн насны төрсөн өдөр вэ?",
    image: "https://res.cloudinary.com/do7jyitxi/image/upload/v1776445154/Screenshot_2026-04-18-00-49-52-017_com.facebook.katana-edit_uy0ffa.jpg",
    options: ["1", "2", "3", "4"],
    correctAnswer: 0
  },
  {
    question: "10. энэ зураг дээр Мишээл юу хийж байсан бэ?",
    image: "https://res.cloudinary.com/do7jyitxi/image/upload/v1776445110/Picsart_26-04-18_00-56-59-148_yod6xt.jpg",
    options: ["А. гурил элдэж байсан", "Б. төмс арилгаж байсан", "В. гурил зуурч байсан", "Г. тоглоом тоглож байсан"],
    correctAnswer: 2
  }
];

export default function QuizPage() {
  const router = useRouter(); // Route шилжүүлэхэд ашиглана
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isLocked, setIsLocked] = useState<boolean>(false);

  const handleAnswerClick = (index: number) => {
    if (isLocked) return;
    setSelectedAnswer(index);
    setIsLocked(true);
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(prev => prev + 1);
    }
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
        setIsLocked(false);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsLocked(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0a0a0a] font-sans p-4 text-white selection:bg-white selection:text-black">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/[0.03] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/[0.03] rounded-full blur-[120px]"></div>
      </div>

      <main className="flex w-full max-w-lg flex-col items-center bg-[#141414] rounded-[2.5rem] shadow-2xl border border-white/10 p-5 sm:p-10 relative z-10">
        
        {!showResult ? (
          <div className="w-full flex flex-col animate-in fade-in duration-500">
            {/* Header Info */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Question {currentQuestion + 1}/{questions.length}</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Score: {score}</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1 bg-white/5 rounded-full mb-8 overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>

            {/* Question Text */}
            <h2 className="text-lg sm:text-xl font-medium mb-6 leading-tight text-white/90 text-center">
              {questions[currentQuestion].question}
            </h2>

            {/* Image Container */}
            {questions[currentQuestion].image && (
              <div className="mb-8 w-full bg-white/[0.02] rounded-2xl border border-white/5 flex items-center justify-center p-2 min-h-[200px] max-h-[300px] overflow-hidden">
                <img 
                  src={questions[currentQuestion].image} 
                  alt="Quiz visual" 
                  className="max-w-full max-h-[280px] object-contain rounded-xl shadow-lg transition-all duration-700"
                />
              </div>
            )}

            {/* Options Grid */}
            <div className="grid grid-cols-1 gap-3 w-full">
              {questions[currentQuestion].options.map((option, index) => {
                const isCorrect = index === questions[currentQuestion].correctAnswer;
                const isSelected = index === selectedAnswer;
                
                let style = "border-white/10 bg-white/[0.03]";
                if (selectedAnswer !== null) {
                  if (isCorrect) style = "border-green-500/50 bg-green-500/20 text-green-400";
                  else if (isSelected) style = "border-red-500/50 bg-red-500/20 text-red-400";
                  else style = "border-white/5 opacity-30 scale-95";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={isLocked}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 flex justify-between items-center text-sm sm:text-base font-medium ${style} active:scale-95`}
                  >
                    <span>{option}</span>
                    {selectedAnswer !== null && isCorrect && (
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center animate-in zoom-in">
                        <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          /* Result UI */
          <div className="w-full text-center animate-in fade-in zoom-in duration-500 py-6">
            <h2 className="text-4xl font-black mb-2 tracking-tighter italic">FINISH.</h2>
            <div className="text-6xl font-light mb-8 font-mono">{score}<span className="text-xl opacity-20">/10</span></div>
            
            {score >= 8 ? (
              <div className="bg-white text-black p-8 rounded-[2rem] mb-8 shadow-[0_0_40px_rgba(255,255,255,0.1)] flex flex-col items-center">
                <h3 className="text-xl sm:text-2xl font-black mb-6 text-center leading-tight">
                  Баяр хүргэе!<br />Та 8-аас дээш оноо авлаа.
                </h3>
                <button
                  onClick={() => router.push('/zahidalshdekk')}
                  className="w-full py-4 bg-[#141414] text-white font-black rounded-xl hover:bg-black transition-all active:scale-95 text-sm tracking-[0.2em] uppercase"
                >
                  Захидал унших
                </button>
              </div>
            ) : (
              <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/5 mb-8">
                <p className="text-red-400 text-sm font-bold">Оноо хүрсэнгүй (8+ оноо авч захиаг уншина уу)</p>
              </div>
            )}

            {score < 8 && (
              <button
                onClick={restartQuiz}
                className="w-full py-5 bg-white text-black font-black rounded-2xl hover:opacity-90 transition-all active:scale-95 text-sm tracking-[0.2em] uppercase"
              >
                Дахиж оролдож үзэх
              </button>
            )}
          </div>
        )}

        <Link 
          href="/" 
          className="mt-10 text-[10px] uppercase tracking-[0.4em] text-white/20 hover:text-white transition-all font-bold"
        >
          ← TERMINATE
        </Link>
      </main>
    </div>
  );
}