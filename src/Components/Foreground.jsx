import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef();
  const data = [
    {
      desc: "“Forgiveness is always possible, but reconciliation is not always possible.”",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "“Forgiveness is always possible, but reconciliation is not always possible.”",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "“Forgiveness is always possible, but reconciliation is not always possible.”",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
    {
      desc: "“Forgiveness is always possible, but reconciliation is not always possible.”",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "“Forgiveness is always possible, but reconciliation is not always possible.”",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "“Forgiveness is always possible, but reconciliation is not always possible.”",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className=" fixed z-[3] w-full h-screen flex gap-10 p-5 flex-wrap"
    >
      {data.map((item, index) => {
        return <Card key={index} data={item} reference={ref} />;
      })}
    </div>
  );
};

export default Foreground;
