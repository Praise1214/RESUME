import React from 'react'

const Profile = () => {


  return (
    <>

      <div className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] overflow-hidden">

        {/* Background circle - top left */}
        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 lg:w-[300px] lg:h-[300px] bg-[#2D2E39] rounded-full -top-20 -left-12 sm:-top-24 sm:-left-16 lg:-top-32 lg:-left-20">
        </div>

        {/* Border circle - top left */}
        <div className="absolute w-32 h-32 sm:w-44 sm:h-44 lg:w-[200px] lg:h-[200px] border border-white rounded-full -top-16 -left-10 sm:-top-20 sm:-left-12 lg:-top-24 lg:-left-16">
        </div>

        {/* Profile image */}
        <div className="absolute w-40 h-40 sm:w-48 sm:h-48 lg:w-[250px] lg:h-[250px] rounded-full top-16 left-8 sm:top-20 sm:left-12 lg:top-24 lg:left-20 border-4 lg:border-[6px] border-[#7e6557]">
          <img 
            src="/images/Praise.png"
            alt="profile-image"
            className="object-cover object-[center_10%] rounded-full w-full h-full"
          />
        </div>

        {/* Name */}
        <div className="absolute top-16 left-52 sm:top-20 sm:left-64 lg:top-20 lg:left-[400px]">
          <p className="text-3xl sm:text-4xl lg:text-6xl font-bold">Praise Daniels</p>
        </div>

        {/* Title */}
        <div className="absolute top-28 left-52 sm:top-32 sm:left-64 lg:top-36 lg:left-[400px]">
          <p className="text-base sm:text-lg lg:text-xl tracking-widest">Software Engineer</p>
        </div>

        {/* Background circle - right */}
        <div className="absolute w-48 h-48 sm:w-64 sm:h-64 lg:w-[300px] lg:h-[300px] bg-[#bfb0a3] rounded-full top-12 right-4 sm:top-14 sm:-right-20 lg:top-16 lg:-right-32">
        </div>
      </div>
      
    </>
    

    
    
  )
}

export default Profile