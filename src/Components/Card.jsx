import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className="relative flex-shrink-0 rounded-[40px] w-60 h-72 bg-zinc-900 text-white py-10 px-8 overflow-hidden">
      <FaFileAlt />
      <p className="text-sm leading-tight mt-5 font-medium">{data.desc}</p>
      <div className="footer absolute left-0 bottom-0 w-full">
        <div className="mb-2 px-8 py-3 flex items-center justify-between">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-700 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoMdClose />
            ) : (
              <LuDownload size=".8em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
