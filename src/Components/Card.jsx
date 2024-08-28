import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 5 }}
      className="flex-shrink-0 relative w-60 h-60 bg-zinc-900/90 rounded-[20px] text-white px-8 py-8 overflow-hidden"
    >
      <FaRegFileAlt className="mb-5" />
      <p className="text-sm leading-tight font-semibold ">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0 ">
        <div className="flex px-8 justify-between mb-5">
          <h5>{data.filesize}</h5>
          <span className="h-6 w-6 p-1 bg-zinc-500 rounded-full flex items-center justify-center">
            {data.close ? <IoMdCloseCircle /> : <LuDownload />}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag w-full h-10 ${
              data.tag.tagColor === "blue" ? " bg-blue-500" : " bg-green-500"
            } text-sm font-semibold flex items-center justify-center tracking-wider`}
          >
            <h3>{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
