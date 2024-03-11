import Link from "next/link"


function HeroSectionPage() {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">

            <div className="p-4 relative z-10 w-full text-center" >
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    QuizWiz Your Way To Mastery
                </h1>
                <div className="mt-12 font-semibold font-serif text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                    Start your journey to fun and enlightenment today! Welcome to QuizWiz where trivia meets entertainment! Dive into a world of puzzles and challenges, expand your knowledge, and join a vibrant community of learners.
                </div>
                <div className="mt-12">
                    <Link href={"/login"} className="bg-black duration-500 border-2 border-[#EEEEEE] text-[#EEEEEE] rounded-full px-6 py-4 text-lg font-medium hover:bg-[#EEEEEE] hover:text-black">
                        Explore Now
                    </Link>
                </div>
            </div>

        </div >
    )
}

export default HeroSectionPage