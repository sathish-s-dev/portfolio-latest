"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="min-h-[500px] flex justify-center items-center gap-16 font-[family-name:var(--font-geist-sans)]">
        {/* <AnimatedModalDemo /> */}
        {/* <BackgroundBeams className="w-full h-full z-[-1]" /> */}
        <BackgroundBeamsWithCollision className="w-full min-h-[90vh] absolute inset-0 z-[-1]">
          <div></div>
        </BackgroundBeamsWithCollision>

        <section className="w-full relative z-[10]">
          <div className="container mx-auto flex flex-col items-center px-8  text-center md:py-32 md:px-10 lg:px-32 xl:max-w-5xl">
            <h1 className="text-4xl font-bold leading-none sm:text-7xl mb-2 md:mb-6 max-w-3xl">
              Hi there, I&apos;m
              <span className="dark:text-emerald-600"> Sathish</span>
            </h1>

            <FlipWords
              words={[
                "React Developer",
                "UI/UX Designer",
                "Web Developer",
                "Software Engineer",
                "React Native Developer",
              ]}
              className="md:text-4xl text-xl p-0"
            />

            <p className="mt-4 md:mt-8 mb-4 md:mb-12 text-lg">
              Hi, I&apos;m Sathish, a passionate and creative frontend developer
              with expertise in React.js, UI/UX design, and React Native app
              development.
            </p>

            <div className="flex justify-center w-full max-w-96 flex-col sm:flex-row gap-2">
              <button className="px-6 md:px-12 py-2 md:py-3 w-full text-lg font-semibold rounded dark:bg-emerald-600 dark:text-gray-50">
                Hire Me
              </button>
              <button className="px-6 md:px-12 py-2 md:py-3 w-full text-lg border rounded dark:text-emerald-600 dark:border-emerald-600">
                Resume
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* about section */}

      <section className="overflow-hidden sm:grid sm:grid-cols-2 max-w-screen-xl mx-auto py-12">
        <div className="p-8 lg:py-24 lg:p-16">
          <div className="mx-auto max-w-2xl ltr:sm:text-left rtl:sm:text-right flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
              A little bit about me
            </h2>

            <p className="text-sm text-gray-500 md:mt-4 md:block dark:text-gray-300 text-justify">
              Hi, I&apos;m Sathish, a passionate and creative frontend developer
              with expertise in React.js, UI/UX design, and React Native app
              development. With a keen eye for detail and a dedication to
              delivering high-quality, user-centric solutions, I ensure every
              project I work on is both aesthetically pleasing and highly
              functional.
            </p>

            <div className="">
              <a
                href="#"
                className="rounded bg-emerald-600 px-6 md:px-12 py-2 md:py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>

        <Image
          alt=""
          src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full object-cover sm:h-full"
          width={400}
          height={400}
        />
      </section>

      {/* special section */}
      <section className="max-w-screen-xl mx-auto py-12">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              What makes us special
            </h2>

            <p className="mt-4 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              dolores iure fugit totam iste obcaecati. Consequatur ipsa quod
              ipsum sequi culpa delectus, cumque id tenetur quibusdam, quos fuga
              minima.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-emerald-800 p-4">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora
                  animi! Quaerat, saepe?
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-emerald-800 p-4">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora
                  animi! Quaerat, saepe?
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-emerald-800 p-4">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora
                  animi! Quaerat, saepe?
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-emerald-800 p-4">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora
                  animi! Quaerat, saepe?
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-emerald-800 p-4">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora
                  animi! Quaerat, saepe?
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-emerald-800 p-4">
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora
                  animi! Quaerat, saepe?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* stats section */}
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Trusted by eCommerce Businesses
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            dolores laborum labore provident impedit esse recusandae facere
            libero harum sequi.
          </p>
        </div>

        <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800">
            <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
              Total Sales
            </dt>

            <dd className="text-4xl font-extrabold text-emerald-600 md:text-5xl">
              $4.8m
            </dd>
          </div>

          <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800">
            <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
              Official Addons
            </dt>

            <dd className="text-4xl font-extrabold text-emerald-600 md:text-5xl">
              24
            </dd>
          </div>

          <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800">
            <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
              Total Addons
            </dt>

            <dd className="text-4xl font-extrabold text-emerald-600 md:text-5xl">
              86
            </dd>
          </div>

          <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800">
            <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">
              Downloads
            </dt>

            <dd className="text-4xl font-extrabold text-emerald-600 md:text-5xl">
              86k
            </dd>
          </div>
        </dl>
      </div>

      {/* <div className="min-h-[100vh]"></div> */}
    </div>
  );
}

// <div className="flex justify-center items-center w-full h-full max-w-screen-xl mx-auto min-h-[400px]">
//           <div className="w-full h-full flex flex-col justify-center items-center text-center gap-6 max-w-3xl">
//             <h1 className="text-3xl md:text-[7rem] mb-6">
//               Hi, I&apos;m <span className="text-emerald-500">Sathish</span>
//             </h1>

//             <FlipWords
//               words={[
//                 "React Developer",
//                 "UI/UX Designer",
//                 "Web Developer",
//                 "Software Engineer",
//                 "React Native Developer",
//               ]}
//               className="text-4xl p-0"
//             />

//             <p className="text-lg">
//               I&apos;m a passionate React developer with a strong focus on
//               building high-quality web applications. My expertise lies in
//               TypeScript, React, and Next.js.
//             </p>
//             {/* <div className="space-y-3">

//               <div className="flex justify-start space-x-3">
//                 <a
//                   rel="noopener noreferrer"
//                   href="#"
//                   title="Facebook"
//                   className="flex items-center p-1"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 32 32"
//                     className="w-5 h-5 fill-current"
//                   >
//                     <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
//                   </svg>
//                 </a>
//                 <a
//                   rel="noopener noreferrer"
//                   href="#"
//                   title="Twitter"
//                   className="flex items-center p-1"
//                 >
//                   <svg
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-5 h-5 fill-current"
//                   >
//                     <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
//                   </svg>
//                 </a>
//                 <a
//                   rel="noopener noreferrer"
//                   href="#"
//                   title="Instagram"
//                   className="flex items-center p-1"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 32 32"
//                     fill="currentColor"
//                     className="w-5 h-5 fill-current"
//                   >
//                     <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
//                   </svg>
//                 </a>
//               </div>
//             </div> */}
//             <div className="flex gap-6">
//               <button className="bg-black text-white dark:bg-emerald-600 text-sm transition-colors duration-75 rounded-md hover:bg-emerald-700 py-2 px-10">
//                 Hire me
//               </button>
//               <button className="bg-black text-emerald-600 hover:text-white border bg-transparent dark:border-emerald-600 text-sm transition-colors duration-75 rounded-md hover:bg-emerald-700 py-2 px-10">
//                 Hire me
//               </button>
//             </div>
//           </div>

//           {/* <div className="w-full h-full flex justify-center items-center">
//             <Image
//               src={
//                 "https://images.unsplash.com/photo-1610462534044-5349e2261b86?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               }
//               alt="sathish"
//               width={300}
//               height={300}
//               className="w-1/2 h-full object-cover max-h-[400px] object-[20%_center]"
//             />
//           </div> */}
//         </div>
