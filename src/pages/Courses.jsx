import { courses } from "../data/courses"

export default function Courses(){
    return(
        <section className="mt-15 py-8 px-10.5">
            <div className="flex flex-col justify-center items-center h-[35vh]">
                <h1 className="font-instrument text-6xl font-bold">Our Courses</h1>
                <p>Join our library of courses</p>
            </div>
            <div className="grid grid-cols-4 grid-rows-1 gap-4 auto-rows-fr">
                {courses.map((course, index) => (
                    <div key={index} className="relative flex flex-col gap-4 border p-7">
                        <h1 className="text-2xl font-instrument font-bold">{course.judul}</h1>
                        <p className="text-sm">{course.deskripsi}</p>
                        <div className="h-45 flex flex-col gap-2">
                            <h1 className="font-instrument font-bold text-xl">Materi:</h1>
                            <ul className="w-full h-full flex flex-col pb-13 overflow-auto">
                                {course.materi?.map((materie, index) => (
                                    <>
                                        <li key={index} className="py-3 border-b border-black last:border-none">{materie}</li>
                                    </>
                                ))}
                            </ul>
                        </div>
                        <button className="absolute bottom-0 left-0 w-full h-13 bg-white border-t border-black hover:bg-black hover:text-white">Enroll</button>
                    </div>
                ))}
            </div>
        </section>
    )
}