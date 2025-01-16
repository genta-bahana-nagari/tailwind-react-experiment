import React from 'react'

const AboutService = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto p-10
    md:px-20 lg:px-32 w-full overflow-hidden"
    id="AboutService">
      <h1 className="text-2xl sm:text:4xl font-bold mb-2">
        About <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Service
        </span></h1>
      <p className="text-gray-500 max-w-80-text-center mb-8">
        Providing security, exercise, and freedom to the United States.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/CVN80-graphic-49211457_o.jpg" alt="" className="w-full sm:w-1/2 max-w-lg" />
        <div className="flex flex-col items-center md:items-start mt-5 text-gray-600">
          <div className="grid grid-cols-2 gap-6 nd:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">70++</p>
              <p>Years of glorious era.</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">300.000++</p>
              <p>Personel ready.</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">150++</p>
              <p>Assets of surface and underwater fleet.</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">40++</p>
              <p>Battles and operations held.</p>
            </div>
          </div>
          <p className="my-10 max-w lg">
            Lorem ipsum dummy text that shows US Navy strength since its establishment. This is a major part of the nation and international security
            when the world needs the most. With good cooperation, we provide the best training, operation, and experience that you ever think.
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded">
            Learn more
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutService