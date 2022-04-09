/* eslint-disable hydrogen/prefer-image-component */
import {useRef, useState, useEffect} from 'react';
import {AnimatePresence, motion, useAnimation} from 'framer-motion';

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  let timerRef = useRef();
  const controls = useAnimation();

  function setupTimer() {
    timerRef.current = setInterval(() => {
      setActiveIndex((a) => {
        if (a === items.length - 1) {
          controls.set({opacity: 0, x: 50});
          controls.start({opacity: 1, x: 0, transition: {duration: 0.5}});
          return 0;
        }
        controls.set({opacity: 0, x: 50});
        controls.start({opacity: 1, x: 0, transition: {duration: 0.5}});
        return a + 1;
      });
    }, 4000);
  }

  function changeActiveIndex(index) {
    clearTimeout(timerRef.current);
    setActiveIndex(index);
    setupTimer();
  }

  useEffect(() => {
    setupTimer();
    return () => {
      clearInterval(timerRef.current);
    };
  });

  return (
    <div className="flex flex-col items-center w-full space-y-4">
      <AnimatePresence>
        <motion.div
          exit={{opacity: 0, x: -50}}
          animate={controls}
          className={`${
            activeIndex === 0
              ? "bg-[url('/drugs.png')] bg-right-top"
              : activeIndex === 1
              ? "bg-[url('/symptom.png')] bg-center"
              : "bg-[url('/genders.png')] bg-center"
          } h-[220px] bg-cover px-[21px] w-full flex flex-col justify-center`}
        >
          <p
            className={`${
              activeIndex === 0 ? 'text-black' : 'text-white mb-4'
            } text-[20px] font-semibold`}
          >
            {items[activeIndex].title}
          </p>
          {items[activeIndex].subtitle && (
            <p className="text-black text-[14px] w-[80%] font-light mb-[10px]">
              {items[activeIndex].subtitle}
            </p>
          )}
          <button
            className={`${
              activeIndex === 0 ? 'bg-white text-black' : 'bg-black text-white'
            } w-[186px] h-[39px]`}
          >
            {items[activeIndex].btnTitle}
          </button>
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-row items-center space-x-2">
        {items.map((item, index) => (
          <button
            key={item.title}
            onClick={() => changeActiveIndex(index)}
            className={`${
              index === activeIndex ? 'bg-[#15A383]' : 'bg-[#D0E2DE]'
            } w-[7px] h-[7px] rounded-full`}
          ></button>
        ))}
      </div>
    </div>
  );
}

const items = [
  {
    title: 'Multivitamins - the right choice for you',
    subtitle:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
    image: '/drugs.png',
    btnTitle: 'Shop for multivitamins',
  },
  {
    title: 'Seeing some symptoms?',
    image: '/symptom.png',
    btnTitle: 'Shop by symptom',
  },
  {
    title: 'Be sexually responsible at all times',
    image: '/genders.png',
    btnTitle: 'Shop for sexual health',
  },
];
