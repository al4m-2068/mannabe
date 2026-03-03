import { useParams } from "react-router";
import { courses } from "../data/courses";

export default function CourseDetail(){
    const { id } = useParams()
    const course = courses.find((item) => item.id === Number(id));

    return(
        <section className="flex mt-15 h-[calc(100vh-60px)] py-8 px-10.5">
            <div className="w-full h-full flex flex-col">
                <h1 className="font-instrument font-bold text-2xl">Course Detail</h1>
                <h1 className="text-5xl font-bold font-instrument">{course.judul}</h1>
                <p>{course.deskripsi}</p>
            </div>
            <div className="h-full w-full flex flex-col gap-2">
                <h1 className="font-instrument font-bold text-2xl">Materi:</h1>
                <ul className="w-full h-full flex flex-col pb-13 overflow-auto">
                    {course.materi?.map((materie, index) => (
                        <>
                            <li key={index} className="py-3 border-b border-black last:border-none">{materie}</li>
                        </>
                    ))}
                </ul>
                <button className="w-full h-15 bg-white border border-black hover:bg-black hover:text-white cursor-pointer">Enroll Now</button>
            </div>
        </section>
    )
}