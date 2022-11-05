import React from 'react'

function About() {
  const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '5' },
    { label: 'Beta Users', value: '521' },
    { label: 'Raised', value: '$25M' },
  ]
  return (
    
    <div>
<div className="relative bg-white py-16 sm:py-24">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
            {/* Testimonial card*/}
            <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://assemblerinstitute.com/wp-content/uploads/2022/05/ASSEMBLER-AMBIENTE-55-scaled.jpg"
                alt=""
              />
              <div className="absolute inset-0 bg-[#ff3636a6] mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7f1c1d] via-[#7f1c1dc9] opacity-90" />
              <div className="relative px-8">
                <div>
                  <img
                    className="h-12"
                    src="https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/11/Logo-Assembler-White.png"
                    alt="Workcation"
                  />
                </div>
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <svg
                      className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-[#c33a37]"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                      Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                      Montes, magna cursus nulla feugiat dignissim id lobortis amet.
                    </p>
                  </div>

                  <footer className="mt-4">
                    <p className="text-base font-semibold text-[white]">Sarah Williams, CEO at Workcation</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get ready to work in tech!
            </h2>
            <div className="mt-6 space-y-6 text-gray-500">
              <p className="text-lg">
              From Assembler Institute we offer remote Masters in Programming and Data Science 100% based on real projects, designed by programmers and CTOs to train future quality technology leaders. Pay when you find a job! At Assembler Institute we break the rules of traditional education to offer the best alignment between training and the needs of the world of work. In addition, we finance your training: pay less than 10% of the program, the rest only when you find a job.
              </p>
              <p className="text-base leading-7">
              You will have at your disposal great experts in technology and soft skills, as well as mentors who will accompany you during your learning and a hiring coach to grow in your professional career. In addition, you will only pay the tuition and the rest of the cost of the program, when you find a job!
              </p>
              <p className="text-base leading-7">
              Train remotely in Software Development or Data Science. We finance your training: pay only when you find a job.
              </p>
            </div>
          </div>

          {/* Stats section */}
          
        </div>
      </div>
    </div>




    </div>
  )
}

export default About