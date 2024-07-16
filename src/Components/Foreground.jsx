import React, { useRef, useEffect } from 'react'
import Card from './Card'

function Foreground() {
  const data = [
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },

    {
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "blue" },
    },
  ];
  const ref = useRef(null);
  return (
    <div ref={ref} className='p-5 fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap '>
      {data.map((item,index)=>(
        <Card data={item} reference = {ref}/>
      ))}
    </div>
  )
}

export default Foreground