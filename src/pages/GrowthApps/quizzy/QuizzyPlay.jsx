import React, { useState } from 'react';
import { Clock, Award, X, Check, ChevronRight } from 'lucide-react';

// Quizzy Play: Active Quiz Playing Interface
// Backend API: GET /api/growth/quizzy/quiz/:id
// Backend API: POST /api/growth/quizzy/quiz/:id/submit
// Backend API: POST /api/growth/quizzy/quiz/:id/answer

const QuizzyPlay = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(45);

  const quiz = {
    title: 'General Knowledge Quiz',
    totalQuestions: 10,
    reward: 500,
    questions: [
      {
        id: 1,
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'Berlin', 'Madrid'],
        correctAnswer: 1,
        points: 50
      }
    ]
  };

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.totalQuestions) * 100;

  return (
    <div className="h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <button>
            <X className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex items-center gap-2 bg-red-100 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4 text-red-600" />
            <span className="text-red-600 font-bold">{timeLeft}s</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium text-gray-600">
            {currentQuestion + 1}/{quiz.totalQuestions}
          </span>
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 px-4 py-6 overflow-y-auto">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">{currentQuestion + 1}</span>
            </div>
            <div className="bg-yellow-100 px-3 py-1 rounded-full">
              <span className="text-yellow-700 text-sm font-bold">+{question.points} 🪙</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 leading-tight">
            {question.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedAnswer(idx)}
              className={`w-full p-4 rounded-xl text-left font-medium transition-all ${
                selectedAnswer === idx
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-800 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    selectedAnswer === idx
                      ? 'bg-white text-blue-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {String.fromCharCode(65 + idx)}
                </div>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Action */}
      <div className="bg-white px-4 py-4 border-t border-gray-200">
        <button
          disabled={selectedAnswer === null}
          className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 ${
            selectedAnswer === null
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg'
          }`}
        >
          {currentQuestion < quiz.totalQuestions - 1 ? (
            <>
              Next Question
              <ChevronRight className="w-5 h-5" />
            </>
          ) : (
            <>
              Submit Quiz
              <Check className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default QuizzyPlay;
