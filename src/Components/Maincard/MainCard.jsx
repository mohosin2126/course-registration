import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainCard = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [remainingCredits, setRemainingCredits] = useState(20);
    const [totalCredits, setTotalCredits] = useState(0);

    useEffect(() => {
        fetch('./../../../public/data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
            .catch(error => console.error("Failed to fetch courses:", error));
    }, []);

    const handleSelectCourse = (course) => {
        const isExist = selectedCourses.find(item => item.id === course.id);

        if (isExist) {
            toast("This course is already added");
            return;
        }

        const newTotalCredits = totalCredits + course.creditInHours;

        if (newTotalCredits > 20) {
            toast("You don't have sufficient credit balance");
            return;
        }

        setTotalCredits(newTotalCredits);
        setRemainingCredits(20 - newTotalCredits);
        setSelectedCourses([...selectedCourses, course]);
    };

    return (
        <div className="w-full flex flex-col md:flex-row gap-6">
            {/* Course Cards Grid */}
            <div className="w-full md:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {courses.map(course => (
                        <div
                            key={course.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <img
                                className="w-full h-48 object-cover"
                                src={course.image}
                                alt={course.title}
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h2>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{course.description}</p>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center">
                                        <img src={course.dollarIcon} alt="Price" className="w-5 h-5 mr-1" />
                                        <span className="text-gray-700">${course.price}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <img src={course.bookIcon} alt="Credit" className="w-5 h-5 mr-1" />
                                        <span className="text-gray-700">{course.creditInHours} Credits</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleSelectCourse(course)}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                                >
                                    Select Course
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Selected Course Summary */}
            <div className="w-full md:w-1/3">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                    <h2 className="text-xl font-bold text-blue-600 mb-4">Course Summary</h2>
                    <div className="border-b pb-4 mb-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Credit Information
                        </h3>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">Total Credit:</span>
                            <span className="font-medium">{totalCredits} hours</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">Credit Remaining:</span>
                            <span className="font-medium">{remainingCredits} hours</span>
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Selected Courses: {selectedCourses.length}
                    </h3>

                    {selectedCourses.length > 0 ? (
                        <ul className="space-y-3">
                            {selectedCourses.map((course, index) => (
                                <li
                                    key={course.id}
                                    className="flex items-center bg-gray-50 p-3 rounded-md"
                                >
                                    <span className="mr-2 text-gray-500">{index + 1}.</span>
                                    <span className="text-gray-800">{course.title}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500 italic">No courses selected yet</p>
                    )}
                </div>
            </div>
            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    );
};

export default MainCard;
