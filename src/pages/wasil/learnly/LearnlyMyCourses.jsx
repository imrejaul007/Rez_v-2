import React from 'react';
import { Play, CheckCircle } from 'lucide-react';

// Learnly My Courses
// Backend API: GET /api/wasil/learnly/my-courses

const LearnlyMyCourses = () => {
  const courses = [
    { id: 1, name: 'Web Development Bootcamp', progress: 65, icon: '💻', totalLessons: 120, completedLessons: 78 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-4 pt-6 pb-4">
        <h1 className="text-xl font-bold text-white">My Courses</h1>
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
                <p className="text-sm text-gray-500 mt-1">{course.completedLessons} of {course.totalLessons} lessons</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-indigo-500 h-2 rounded-full" style={{ width: `${course.progress}%` }} />
                </div>
                <p className="text-xs text-gray-500 mt-1">{course.progress}% complete</p>
              </div>
            </div>
            <button className="w-full mt-3 bg-indigo-500 text-white py-2 rounded-lg flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Continue Learning
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnlyMyCourses;
