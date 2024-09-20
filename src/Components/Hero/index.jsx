import React from "react";

import Avatar from "@Assets/Avatar.svg";
import Linkedin from "@Assets/linkedin.svg";
import Github from "@Assets/github.svg";

export default function Hero() {
  return (
    <>
      <div className="h-screen w-full mt-20 container">
        <div className="grid lg:grid-cols-2 grid-rows-1">
          <div className="flex justify-center items-center">
            <div>
              {/* <p className="font-bold ">Web | Mobile | Designer</p> */}
              <h1 className="text-6xl font-bold uppercase leading-[5rem]">
                Hi, Im <br />
                Developer
              </h1>
              <p className="text-sm mt-2 text-slate-400">
                I develop experiences that make people’s lives simple.
              </p>
              <div className="flex gap-3 mt-5">
                <a className="w-[48px] h-[48px] flex justify-center items-center rounded-full bg-[#222]">
                  <img className="object-cover " src={Linkedin} alt="" />
                </a>
                <a className="w-[48px] h-[48px] flex justify-center items-center rounded-full bg-[#222]">
                  <img className="object-cover " src={Github} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img src={Avatar} className="w-1/2 object-cover" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
