import type { NextPage } from 'next'
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div >
        <div className="flex flex-col items-center justify-center mt-16">
            <Link href="/tools/Puzzle-Maker-Software">
                <h1 className="text-lg underline">
                    Puzzle Creator
                </h1>
            </Link>

            <Link href="">
                <h1 className="text-lg underline">
                    Book creator
                </h1>
            </Link>

        </div>

    </div>
  )
}

export default Home
