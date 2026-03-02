
export default function Home(){
    return(
        <section className="px-10.5 py-8 flex flex-col justify-end items-center h-screen bg-[url('/images/learning-together.jpg')] bg-cover">
            <h1 className="font-instrument font-bold text-[150px] -my-8 flex items-center w-full">Minna<span className="inline-block w-full h-3 bg-black"></span>Manabu</h1>
            <h2 className="flex w-full justify-between lowercase"><span className="flex w-[20%]">(everyone)</span>Place where we meet to learn and being. Together.<span className="flex justify-end w-[20%]">(learn)</span></h2>
        </section>    
    )
}