import React from 'react';
import { ArrowLeft, Star, Users, Clock, Award, Check } from 'lucide-react';

// Learnly Course Details
// Backend API: GET /api/wasil/learnly/courses/:id

const LearnlyCourseDetails = () => {
  const course = {
    name: 'Web Development Bootcamp',
    instructor: 'John Doe',
    rating: 4.8,
    students: 12450,
    price: 2999,
    duration: '40 hours',
    description: 'Complete web development course from beginner to advanced',
    topics: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB']
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="relative h-64 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-9xl">
        💻
        <button className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-white px-4 py-4">
        <h1 className="text-xl font-bold text-gray-800">{course.name}</h1>
        <p className="text-sm text-gray-500 mt-1">by {course.instructor}</p>
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-medium">{course.rating}</span>
          </div>
          <span className="text-sm text-gray-500">({course.students.toLocaleString()} students)</span>
        </div>
        <p className="text-gray-700 mt-3">{course.description}</p>
      </div>

      <div className="bg-white mt-2 px-4 py-4">
        <h2 className="font-bold text-gray-800 mb-3">What you'll learn</h2>
        <div className="space-y-2">
          {course.topics.map((topic, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-gray-700">{topic}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button className="w-full bg-indigo-500 text-white py-3 rounded-xl font-bold">
          Enroll Now • ₹{course.price}
        </button>
      </div>
    </div>
  );
};

export default LearnlyCourseDetails;
