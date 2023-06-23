import Link from "next/link"
import Image from "next/image"
type Props = {}

export default function Navbar({}: Props) {
  return (
    <div>
        <nav className="border-gray-200 bg-purple-500">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center">
              <Image
                src="https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg?w=740&t=st=1686897721~exp=1686898321~hmac=4e33d0c326d93ffdbc88ef24179dda279c9b58950b81f7082f304f709ef1a758"
                width={130}
                height={120}
                alt="POSPOS Logo"
              />
              <span className="ml-7 self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
                Poster Movies
              </span>
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-purple-500 dark:border-gray-700">
                <li>
                  <Link
                    href="/"
                    className="block py-2 pl-3 pr-4 text-white bg-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-white
                    md:hover:bg-yellow-300 md:p-0 md:dark:hover:bg-yellow-300"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:bg-yellow-300 md:p-0 dark:text-white md:dark:hover:bg-yellow-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/user/login"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:bg-yellow-300 md:p-0 dark:text-white md:dark:hover:bg-yellow-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/user/register"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:bg-yellow-300 md:p-0 dark:text-white md:dark:hover:bg-yellow-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr />

    </div>
  )
}