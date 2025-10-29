import React from 'react'

const Profile = () => {


  return (
    <>
      <div className="relative">
        <div className="absolute w-[300px] h-[300px] bg-[#2D2E39] rounded-full -top-30 -left-20 ">
        </div>

        <div className=" absolute w-[200px] h-[200px] border border-white rounded-full  -top-25 -left-22">

          <div className="absolute w-[250px] h-[250px] rounded-full top-45 left-40 border-6 border-[#7e6557] ">
            <img 
              src="/images/Praise.png"
              alt="profile-image"
              className="object-cover object-[center_10%] rounded-full w-full h-full top-50"
            />
          </div>

            <div className="absolute w-[300px] h-[300px] bg-[#ae9986] rounded-full top-30 left-19 ">
            </div>
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