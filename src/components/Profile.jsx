import React from 'react'

const Profile = () => {


  return (
    <>
      <div className="relative">
        <div className="absolute lg:w-[500px] lg:h-[500px] bg-[#2D2E39] rounded-full lg:-top-60 lg:-left-60 sm:w-[300px] sm:h-[300px] sm:-top-30 sm:-left-20">
        </div>

        <div className="absolute sm:w-[200px] sm:h-[200px] border border-white rounded-full  sm:-top-25 sm:-left-22 lg:w-[400px] lg:h-[400px] lg:-top-60 lg:-left-52">
        </div>

        <div className="absolute sm:w-[200px] sm:h-[200px] rounded-full sm:top-40 left-25 border-6 border-[#7e6557] lg:w-[300px] lg:h-[300px]">
          <img 
            src="/images/Praise.png"
            alt="profile-image"
            className="object-cover object-[center_10%] rounded-full w-full h-full top-50"
          />
        </div>

            <div className="absolute w-[300px] h-[300px] bg-[#ae9986] rounded-full top-30 left-195 ">
            </div>
        


      </div>

      <div>
        <p className=" absolute top-20 left-100 text-6xl font-bold">Praise Daniels</p>
      </div>
      <div>
        <p className=" absolute  sm:top-[180px] lg:top-[150px] left-100 text-xl tracking-widest">Software Engineer</p>
      </div>
    </>
    

    
    
  )
}

export default Profile