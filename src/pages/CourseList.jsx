import { courses } from "../data/courses"
import { NavLink } from "react-router"

export default function CourseList({query}){
    const filteredCourse = courses.filter(course => course.judul.toLowerCase().includes(query))
    return(
        <div className="grid grid-cols-4 grid-rows-1 gap-4 auto-rows-fr">
            {filteredCourse.map((course) => (
                <div key={course.id} className="relative flex flex-col gap-4 border p-7 rounded-3xl overflow-clip">
                    <h1 className="text-2xl font-instrument font-bold">{course.judul}</h1>
                    <p className="text-sm">{course.deskripsi}</p>
                    <div className="h-45 flex flex-col gap-2">
                        <h1 className="font-instrument font-bold text-xl">Materi:</h1>
                        <ul className="w-full h-full flex flex-col pb-13 overflow-auto">
                            {course.materi?.map((materie, index) => (
                                <li key={index} className="py-3 border-b border-black last:border-none">{materie}</li>
                            ))}
                        </ul>
                    </div>
                    <NavLink className={"absolute bottom-0 left-0 w-full h-13 bg-white border-t border-black hover:bg-black hover:text-white cursor-pointer flex items-center justify-center"} to={`/courses/${course.id}`}>Details</NavLink>
                </div>
            ))}
        </div>
    )
}