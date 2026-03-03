import { Link } from "react-router";


export default function NotFound(){
    return(
        <section className="mt-15 relative overflow-clip w-full h-[calc(100vh-60px)] flex flex-col justify-center items-center">
            <h1 className="font-instrument font-bold text-8xl">それは。。ありませんよ。</h1>
            <h1>(that doesn't exist..)</h1>
            <h1 className="font-bold font-instrument text-[19vw] absolute -bottom-36 text-black opacity-15">Mannabe<sup>&reg;</sup></h1>
            <Link className='border flex items-center px-4 h-15 mt-8 hover:bg-black hover:text-white' to='/'>Back to Homepage</Link>
        </section>
    )
}