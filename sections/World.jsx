'use client';

import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <TypingText title="| People on the World"
        textStyles="text-center" />
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>}
        textStyles="text-center" />
      <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]" >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] " >
          <img src="/people-01.png" alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] " >
          <img src="/people-02.png" alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] " >
          <img src="/people-03.png" alt="people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-[50px] right-[19%] w-[195px] h-[150px] p-[6px] rounded-[24px] bg-[rgba(105,105,105,0.6)] invisible md:visible">
          <img
            src="world-2.png"
            alt="world"
            className="w-full h-full rounded-[24px] object-cover"
          />
          <div className="absolute top-0 left-0 z-10 w-full h-full flex flex-col justify-end align-middle gap-4 bg-[rgba(255,255,255,0.1)] rounded-[24px] p-4">
            <div className="h-[24px] w-auto flex relative">
              <img
                src="/people-02.png"
                alt="people"
                className="w-[24px] h-[24px] rounded-full"
              />
              <img
                src="/people-01.png"
                alt="people"
                className="w-[24px] h-[24px] ml-[-12px] rounded-full relative z-[-1]"
              />
              <img
                src="/people-03.png"
                alt="people"
                className="w-[24px] h-[24px] ml-[-12px] rounded-full relative z-[-2]"
              />
              <h5 className="h-[24px] text-left text-[10px] p-1 text-white ">+ 264 has joined</h5>
            </div>
            <h3 className="text-white font-bold">Hawkins Labs</h3>
          </div>
        </div>

        <div className="absolute top-72 left-[10%] w-[195px] h-[150px] p-[6px] rounded-[24px] bg-[rgba(105,105,105,0.6)] invisible md:visible">
          <img
            src="/world-1.png"
            alt="world"
            className="w-full h-full rounded-[24px] object-cover"
          />
          <div className="absolute top-0 left-0 z-10 w-full h-full flex flex-col justify-end align-middle gap-4 bg-[rgba(255,255,255,0.2)] rounded-[24px] p-4">
            <div className="h-[24px] w-auto flex relative">
              <img
                src="/people-02.png"
                alt="people"
                className="w-[24px] h-[24px] rounded-full"
              />
              <img
                src="/people-01.png"
                alt="people"
                className="w-[24px] h-[24px] ml-[-12px] rounded-full relative z-[-1]"
              />
              <img
                src="/people-03.png"
                alt="people"
                className="w-[24px] h-[24px] ml-[-12px] rounded-full relative z-[-2]"
              />
              <h5 className="h-[24px] text-left text-[10px] p-1 text-white ">+ 264 has joined</h5>
            </div>
            <h3 className="text-white font-bold">The Upside Down</h3>
          </div>
        </div>

      </motion.div>
    </motion.div>
  </section>
);

export default World;
