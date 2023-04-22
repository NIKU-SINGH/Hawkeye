import React from 'react'
import Marquee from 'react-fast-marquee'
import marqdata from '../../../constants/MarqueeData.json'

const index = () => {
  return (
    <div className='bg-black text-white py-2 relative z-10 '>
      <div className=''>
        <Marquee
          play={true}
          pauseOnHover={true}
          onFinish={() => null}
          speed={60}
          direction='left'
          className='overflow-hidden  '
          gradient={false}>
          {marqdata.map((data, i) => {
            return (
              <div key={i} className='flex justify-center  text-slate/100 font-bold space-x-12 px-6'>
                <h1 className='text-base font-bold tracking-wide'>
                  {data.text}
                </h1>
                <p>•</p>
              </div>
            )
          })}
        </Marquee>
      </div>
    </div>
  )
}

export default index