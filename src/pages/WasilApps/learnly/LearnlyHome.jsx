import React, { useState } from 'react';
import {
  Search, Star, Clock, ChevronRight, Timer,
  BookOpen, GraduationCap, Video, FileText, Award,
  Play, Users, TrendingUp, Zap, Target, CheckCircle2
} from 'lucide-react';

// Learnly Home: E-Learning & Courses Platform
// Backend API: GET /api/wasil/learnly/home
// Backend API: GET /api/wasil/learnly/courses
// Backend API: GET /api/wasil/learnly/instructors
// Backend API: POST /api/wasil/learnly/enroll

const LearnlyHome = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '📚', color: 'bg-indigo-500' },
    { id: 'tech', name: 'Technology', icon: '💻', color: 'bg-blue-500' },
    { id: 'business', name: 'Business', icon: '💼', color: 'bg-green-500' },
    { id: 'design', name: 'Design', icon: '🎨', color: 'bg-pink-500' },
    { id: 'marketing', name: 'Marketing', icon: '📈', color: 'bg-orange-500' },
    { id: 'language', name: 'Languages', icon: '🌍', color: 'bg-purple-500' },
    { id: 'exam', name: 'Exam Prep', icon: '📝', color: 'bg-red-500' }
  ];

  const myLearning = {
    coursesInProgress: 3,
    hoursLearned: 45,
    certificates: 5,
    streak: 12
  };

  const continueWatching = [
    {
      id: 1,
      title: "React Masterclass",
      instructor: "John Doe",
      progress: 65,
      nextLesson: "State Management with Redux",
      duration: "45 min",
      image: "⚛️"
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      instructor: "Sarah Chen",
      progress: 40,
      nextLesson: "Creating User Personas",
      duration: "30 min",
      image: "🎨"
    }
  ];

  const trendingCourses = [
    {
      id: 1,
      title: "Complete Python Developer",
      instructor: "Rahul Kumar",
      image: "🐍",
      rating: 4.9,
      students: 45600,
      duration: "40 hours",
      price: 499,
      originalPrice: 3999,
      coins: 400,
      bestseller: true
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      instructor: "Priya Sharma",
      image: "📊",
      rating: 4.8,
      students: 32400,
      duration: "25 hours",
      price: 399,
      originalPrice: 2999,
      coins: 300,
      bestseller: true
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      instructor: "Amit Singh",
      image: "🌐",
      rating: 4.7,
      students: 28900,
      duration: "60 hours",
      price: 699,
      originalPrice: 4999,
      coins: 600,
      bestseller: false
    },
    {
      id: 4,
      title: "Data Science with Python",
      instructor: "Dr. Neha Gupta",
      image: "📈",
      rating: 4.8,
      students: 21300,
      duration: "45 hours",
      price: 599,
      originalPrice: 3999,
      coins: 500,
      bestseller: false
    }
  ];

  const freeCourses = [
    { id: 1, title: "Git & GitHub Basics", duration: "2 hours", image: "🔀" },
    { id: 2, title: "HTML & CSS Crash Course", duration: "3 hours", image: "🌐" },
    { id: 3, title: "Excel for Beginners", duration: "2.5 hours", image: "📊" }
  ];

  const topInstructors = [
    { id: 1, name: "Rahul Kumar", specialty: "Python & ML", rating: 4.9, students: 125000, avatar: "👨‍💻" },
    { id: 2, name: "Priya Sharma", specialty: "Marketing", rating: 4.8, students: 89000, avatar: "👩‍💼" },
    { id: 3, name: "Amit Singh", specialty: "Web Dev", rating: 4.7, students: 76000, avatar: "👨‍🏫" }
  ];

  const examPrep = [
    { id: 1, name: "UPSC", tests: 150, students: "2.5L" },
    { id: 2, name: "CAT", tests: 80, students: "1.8L" },
    { id: 3, name: "GATE", tests: 120, students: "1.2L" },
    { id: 4, name: "NEET", tests: 200, students: "3.1L" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 pt-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-white">Learnly</h1>
            <p className="text-indigo-200 text-sm">Learn. Grow. Succeed.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
              <span className="text-lg">🔥</span>
              <span className="text-white font-bold">{myLearning.streak} days</span>
            </div>
            <div className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-2">
              <span className="text-lg">🪙</span>
              <span className="text-white font-bold">4,560</span>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses, topics..."
            className="flex-1 outline-none text-gray-800"
          />
        </div>

        {/* Learning Stats */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-white">{myLearning.coursesInProgress}</p>
            <p className="text-indigo-200 text-xs">In Progress</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-white">{myLearning.hoursLearned}h</p>
            <p className="text-indigo-200 text-xs">Learned</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-white">{myLearning.certificates}</p>
            <p className="text-indigo-200 text-xs">Certificates</p>
          </div>
        </div>
      </div>

      {/* Continue Watching */}
      <div className="px-4 mt-4">
        <h2 className="font-bold text-gray-800 mb-3">Continue Learning</h2>
        <div className="space-y-3">
          {continueWatching.map((course) => (
            <div key={course.id} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center text-3xl">
                  {course.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{course.title}</h3>
                  <p className="text-xs text-gray-500">{course.instructor}</p>
                  <p className="text-xs text-indigo-600 mt-1">Next: {course.nextLesson}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-500 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500">{course.progress}%</span>
                  </div>
                </div>
                <button className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 text-white ml-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mt-6">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex flex-col items-center gap-2 min-w-[70px] ${
                activeCategory === cat.id ? 'opacity-100' : 'opacity-70'
              }`}
            >
              <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center text-2xl ${
                activeCategory === cat.id ? 'ring-2 ring-offset-2 ring-indigo-500' : ''
              }`}>
                {cat.icon}
              </div>
              <span className="text-xs text-gray-700 font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Free Courses */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <Zap className="w-5 h-5 text-green-500" />
            Free Courses
          </h2>
          <button className="text-indigo-600 text-sm">View All</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {freeCourses.map((course) => (
            <button key={course.id} className="flex-shrink-0 w-40 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-4 text-left">
              <span className="text-3xl">{course.image}</span>
              <h3 className="font-medium text-white text-sm mt-2">{course.title}</h3>
              <p className="text-green-100 text-xs mt-1">{course.duration}</p>
              <span className="bg-white text-green-600 text-xs font-bold px-2 py-1 rounded-full mt-2 inline-block">
                FREE
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Trending Courses */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            Trending Courses
          </h2>
          <button className="text-indigo-600 text-sm">See All</button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {trendingCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-24 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-4xl relative">
                {course.image}
                {course.bestseller && (
                  <div className="absolute top-2 left-2 bg-yellow-500 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded">
                    Bestseller
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-medium text-gray-800 text-sm line-clamp-2">{course.title}</h3>
                <p className="text-xs text-gray-500">{course.instructor}</p>
                <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span>{course.rating}</span>
                  <span className="text-gray-400">({(course.students / 1000).toFixed(1)}K)</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold text-gray-800">₹{course.price}</span>
                  <span className="text-xs text-gray-400 line-through">₹{course.originalPrice}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-yellow-600 text-xs">+{course.coins}🪙</span>
                  <button className="bg-indigo-500 text-white px-3 py-1 rounded-lg text-xs font-medium">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exam Prep */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-gray-800 mb-3">Exam Preparation</h2>
        <div className="grid grid-cols-4 gap-2">
          {examPrep.map((exam) => (
            <button key={exam.id} className="bg-white rounded-xl p-3 shadow-sm text-center">
              <span className="text-xl font-bold text-indigo-600">{exam.name}</span>
              <p className="text-xs text-gray-500 mt-1">{exam.tests} tests</p>
              <p className="text-xs text-gray-400">{exam.students} students</p>
            </button>
          ))}
        </div>
      </div>

      {/* Top Instructors */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-800">Top Instructors</h2>
          <button className="text-indigo-600 text-sm">View All</button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {topInstructors.map((instructor) => (
            <div key={instructor.id} className="flex-shrink-0 w-36 bg-white rounded-xl p-4 shadow-sm text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-3xl mx-auto">
                {instructor.avatar}
              </div>
              <h3 className="font-medium text-gray-800 text-sm mt-2">{instructor.name}</h3>
              <p className="text-xs text-indigo-600">{instructor.specialty}</p>
              <div className="flex items-center justify-center gap-1 mt-1 text-xs text-gray-500">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <span>{instructor.rating}</span>
                <span>•</span>
                <span>{(instructor.students / 1000).toFixed(0)}K</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Banner */}
      <div className="px-4 mt-6 mb-4">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold">Get Certified</h3>
              <p className="text-indigo-200 text-sm">Earn industry-recognized certificates</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnlyHome;
