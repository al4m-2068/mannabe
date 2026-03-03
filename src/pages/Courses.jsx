import { useState } from "react"
import CourseList from "./CourseList"

export default function Courses(){
    const [pencarian, setPencarian] = useState('')
    function handleChange(e) {
        setPencarian(e.target.value.toLowerCase())
    }
    return(
        <section className="mt-15 py-8 px-10.5">
            <div className="flex flex-col justify-center items-center h-[35vh]">
                <h1 className="font-instrument text-6xl font-bold">Our Courses</h1>
                <p>Join our library of courses</p>
                <input type="text" onChange={handleChange} placeholder="Search for a course" className="mt-5.5 h-15 px-4 border w-[30%]"/>
            </div>
            <CourseList query={pencarian}/>
        </section>
    )
}