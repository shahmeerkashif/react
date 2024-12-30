import React from 'react'

const About = () => {
  return (
    <div>
      <p className='a'>About</p>
    <div className="about">
    {/* <p className='a'>About</p> */}
      <div className="a-img">
        <img src="https://img.freepik.com/free-photo/fried-vegetables-with-sauce-pan_1220-5230.jpg" alt="" />
      </div>
      <div className="a-con">
        <h1>Food Is An Important <br /> Part of A Balanced <br /> Diet</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos <br /> quam quos neque qui veniam in rerum veritatis <br /> corrupti repudiandae porro?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat <br /> quos numquam esse cumque magni?</p>

        <button className="btm">
          Learn More
        </button>
      </div>
    </div>
    
    </div>
  )
}

export default About