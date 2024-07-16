import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen'>
    <div className="nav-bar absolute top-[5%] w-full py-10 flex justify-center font-semibold text-zinc-400 text-xl ">Documents.</div>
    <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 text-[10vw] font-semibold leading-none tracking-tight'>DOCS.</h1>
    </div>
    </>
  )
}

export default Background