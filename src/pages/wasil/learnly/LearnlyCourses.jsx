import React from 'react';
import { Search, Star, Users, Clock } from 'lucide-react';

// Learnly Courses
// Backend API: GET /api/wasil/learnly/courses

const LearnlyCourses = () => {
  const courses = [
    { id: 1, name: 'Web Development Bootcamp', instructor: 'John Doe', rating: 4.8, students: 12450, price: 2999, duration: '40 hours', icon: '💻' },
    { id: 2, name: 'Digital Marketing', instructor: 'Sarah Smith', rating: 4.7, students: 8920, price: 1999, duration: '25 hours', icon: '📱' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white mb-4">Courses</h1>
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Search courses..." className="flex-1 outline-none" />
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center text-4xl">
                {course.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{course.name}</h3>
                <p className="text-sm text-gray-500">{course.instructor}</p>
                <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> {course.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" /> {course.students.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {course.duration}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t">
              <p className="font-bold text-gray-800">₹{course.price}</p>
              <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnlyCourses;
