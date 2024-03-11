import Link from "next/link"


function HeroSectionPage() {
    return (
        <div
            className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
        >

            <div className="p-4 relative z-10 w-full text-center" >
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                >QuizWiz Your Way To Mastery</h1>
                <div
                    className="mt-12 font-semibold font-serif text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
                >Start your journey to fun and enlightenment today! Welcome to QuizWiz where trivia meets entertainment! Dive into a world of puzzles and challenges, expand your knowledge, and join a vibrant community of learners.</div>
                <div className="mt-12">
                    <Link href={"/"}>
                        <button className="bg-black dark:bg-white text-white dark:text-black border-neutral-200 dark:border-slate-800 rounded-full px-6 py-3 text-lg font-semibold shadow-lg hover:bg-white hover:text-black hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
                            Explore Now
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default HeroSectionPage