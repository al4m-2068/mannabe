
export default function About(){
    return(
        <section className="mt-15 py-8 px-10.5 h-[calc(100vh-60px)]">
            <div className="grid grid-cols-4 grid-rows-1 gap-5.5 auto-rows-fr h-full">
                <div className="flex flex-col gap-5.5 h-full">
                    <h2 className="font-instrument font-bold text-5xl">The Founder</h2>
                    <img src="/images/habaneki.jpg" alt="Habaneki Umao" className="object-cover grayscale w-full h-full" />
                    <h1>"Technology isn't just about syntax; it's about the human problems we solve with it."<br/><b>— Habaneki Umao</b></h1>
                </div>
                <div className="flex flex-col gap-5.5 h-full">
                    <p className="">
                        Mannabe was founded with a singular mission: to bridge the gap between ambition and expertise.
                    </p>
                    <img src="/images/mannabe-origin.jpg" alt="Habaneki Umao" className="object-left object-cover grayscale w-full h-full" />
                </div>
                <div className="flex flex-col gap-5.5 h-full">
                    <img src="/images/coding.jpg" alt="Habaneki Umao" className="object-cover object-[70%] grayscale w-full h-full" />
                    <p className="">
                        Habaneki Umao built this platform based on years of industry experience, ensuring that every module you study at Mannabe translates directly into high-demand skills for today’s market.
                    </p>
                </div>
                <div className="flex flex-col gap-5.5 h-full">
                    <h2 className="font-instrument text-5xl font-bold">
                        We benefit our students with:
                    </h2>
                    <ul className="flex flex-col list-disc list-outside ml-5.5">
                        <li>Curated Curriculum: Systematically structured content to avoid "information overload."</li>
                        <li><b>Real-World Projects:</b> You don’t just watch videos; you build a portfolio that gets you hired.</li>
                        <li><b>Exclusive Community:</b> Access to discussion forums moderated by industry mentors.</li>
                        <li><b>Official Certification:</b> Recognized credentials to boost your value in the eyes of recruiters.</li>
                    </ul>
                    <div className="bg-[url('/images/learning-together.jpg')] w-full h-full bg-cover bg-center grayscale"></div>
                </div>
            </div>
        </section>
    )
}