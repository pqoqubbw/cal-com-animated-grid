'use client';

import { motion, useReducedMotion, type Variants } from 'motion/react';

const getFillColor = (index: number) => {
  if (index > 4 && index <= 14) return '#F7F8F8';

  if (index > 14 && index <= 19) return '#E5E6E9';

  if (index > 19 && index <= 21) return '#F7F8F8';

  if (index > 21) return '#E5E6E9';

  return '#fff';
};

const dayVariants: Variants = {
  initial: { scale: 0, opacity: 0 },
  animate: ({
    delay,
    prefersReducedMotion,
  }: {
    delay: number;
    prefersReducedMotion: boolean;
  }) => ({
    scale: 1,
    opacity: 1,
    transition: prefersReducedMotion
      ? undefined
      : {
          duration: 0.2,
          delay: 1.2 + delay * 0.1,
          ease: 'easeOut',
        },
  }),
};

const WindowSvg = ({ isInView }: { isInView: boolean }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="vertical-fadeout mx-auto w-full max-w-[90%] [--mask-distance:100px]">
      <motion.div
        className="border-subtle mx-auto -mb-6 aspect-[2.4/1] w-[80%] rounded-md border md:-mb-12"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.8 },
        }}
      />
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            isInView
              ? { opacity: 1 }
              : { opacity: prefersReducedMotion ? 1 : 0 }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 0.5, ease: 'easeOut', delay: 0.4 }
          }
        >
          <motion.svg
            className="absolute left-16 top-12 rotate-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30"
            height="30"
            fill="none"
            initial={{ opacity: 0, rotate: 0 }}
            animate={
              isInView
                ? { opacity: 1, rotate: prefersReducedMotion ? 0 : 180 }
                : { opacity: prefersReducedMotion ? 1 : 0, rotate: 0 }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : { delay: 0.6, duration: 1.2, ease: 'easeInOut' }
            }
          >
            <path
              fill="#454545"
              d="M18.326 2.077a1.063 1.063 0 0 0-2.056-.36c-1.283 3.39-3.07 5.83-5.367 7.442-2.298 1.612-5.2 2.463-8.825 2.516a1.063 1.063 0 0 0-.36 2.056c3.39 1.283 5.83 3.07 7.442 5.368 1.613 2.298 2.463 5.199 2.517 8.824a1.063 1.063 0 0 0 2.056.36c1.283-3.39 3.069-5.83 5.367-7.442 2.298-1.613 5.2-2.463 8.824-2.517a1.062 1.062 0 0 0 .36-2.056c-3.39-1.283-5.83-3.069-7.442-5.367s-2.463-5.2-2.516-8.824Z"
            />
            <path
              stroke="#858585"
              d="M18.326 2.077a1.063 1.063 0 0 0-2.056-.36c-1.283 3.39-3.07 5.83-5.367 7.442-2.298 1.612-5.2 2.463-8.825 2.516a1.063 1.063 0 0 0-.36 2.056c3.39 1.283 5.83 3.07 7.442 5.368 1.613 2.298 2.463 5.199 2.517 8.824a1.063 1.063 0 0 0 2.056.36c1.283-3.39 3.069-5.83 5.367-7.442 2.298-1.613 5.2-2.463 8.824-2.517a1.062 1.062 0 0 0 .36-2.056c-3.39-1.283-5.83-3.069-7.442-5.367s-2.463-5.2-2.516-8.824Z"
            />
          </motion.svg>

          <div className="radial-fadeout relative z-10 [--mask-distance:110px]">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full drop-shadow-sm"
              fill="none"
              viewBox="0 0 405 302"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: prefersReducedMotion ? 1 : 0, y: 20 }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      duration: 0.5,
                      ease: 'easeOut',
                      delay: 0.4,
                    }
              }
            >
              <path
                stroke="#E5E7EB"
                d="M33 302V0m372 61H0m405 180H0m373 61V0"
              />
              <rect
                width="339.562"
                height="180"
                x="33"
                y="61"
                fill="#fff"
                rx="10.515"
              />
              <path fill="#fff" d="M33 61h122.68v180H33z" />
              <motion.g
                id="text"
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={
                  prefersReducedMotion ? undefined : { duration: 0.5, delay: 1 }
                }
              >
                <rect
                  width="10.515"
                  height="10.515"
                  x="43.516"
                  y="71.516"
                  fill="#EBECEF"
                  rx="5.258"
                />
                <rect
                  width="31.985"
                  height="7.01"
                  x="43.516"
                  y="85.535"
                  fill="#EBECEF"
                  rx="3.505"
                />
                <rect
                  width="82.809"
                  height="7.01"
                  x="43.516"
                  y="96.547"
                  fill="#EBECEF"
                  rx="3.505"
                />
                <rect
                  width="82.809"
                  height="7.01"
                  x="41.763"
                  y="115.824"
                  fill="#EBECEF"
                  rx="3.505"
                />
                <rect
                  width="51.263"
                  height="7.01"
                  x="41.763"
                  y="127.836"
                  fill="#EBECEF"
                  rx="3.505"
                />

                <rect
                  width="34.175"
                  height="7.01"
                  x="41.763"
                  y="139.844"
                  fill="#EBECEF"
                  rx="3.505"
                />
                <rect
                  width="66.16"
                  height="7.01"
                  x="41.763"
                  y="151.855"
                  fill="#EBECEF"
                  rx="3.505"
                />
              </motion.g>
              <path fill="#E5E7EB" d="M155.68 241.953V60.999h.438v180.954z" />
              <path fill="#fff" d="M156.119 61h216.443v177.706H156.119z" />
              <motion.g
                id="calendar"
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={{ clipPath: 'inset(0 0% 0 0)' }}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 0.5, delay: 1.5 }
                }
              >
                <rect
                  width="31.985"
                  height="7.01"
                  x="164.882"
                  y="69.762"
                  fill="#EBECEF"
                  rx="3.505"
                />
                <rect
                  width="7.01"
                  height="7.01"
                  x="348.026"
                  y="69.762"
                  fill="#EBECEF"
                  rx="2.629"
                />
                <rect
                  width="7.01"
                  height="7.01"
                  x="356.789"
                  y="69.762"
                  fill="#EBECEF"
                  rx="2.629"
                />
                <rect
                  width="17.526"
                  height="10.515"
                  x="164.882"
                  y="83.281"
                  fill="#EBECEF"
                  rx="5.258"
                />
                <rect
                  width="17.526"
                  height="10.515"
                  x="195.114"
                  y="83.281"
                  fill="#EBECEF"
                  rx="5.258"
                />
                <rect
                  width="17.526"
                  height="10.515"
                  x="225.345"
                  y="83.281"
                  fill="#EBECEF"
                  rx="5.258"
                />
                <rect
                  width="17.526"
                  height="10.515"
                  x="255.577"
                  y="83.281"
                  fill="#EBECEF"
                  rx="5.258"
                />
                <rect
                  width="17.526"
                  height="10.515"
                  x="285.809"
                  y="83.281"
                  fill="#EBECEF"
                  rx="5.258"
                />
                <rect
                  width="17.526"
                  height="10.515"
                  x="316.042"
                  y="83.281"
                  fill="#EBECEF"
                  rx="5.258"
                />
                <rect
                  width="17.526"
                  height="10.515"
                  x="346.273"
                  y="83.281"
                  fill="#EBECEF"
                  rx="5.258"
                />
              </motion.g>
              <motion.g id="days">
                {Array.from({ length: 28 }).map((_, index) => {
                  const row = Math.floor(index / 7);
                  const col = index % 7;

                  return (
                    <motion.rect
                      key={index}
                      width="24.536"
                      height="24.536"
                      x={164.882 + col * 28.041}
                      y={107.797 + row * 32.535}
                      fill={getFillColor(index)}
                      rx="3.505"
                      initial="initial"
                      custom={{ delay: index, prefersReducedMotion }}
                      animate={isInView ? 'animate' : 'initial'}
                      variants={dayVariants}
                    />
                  );
                })}

                <rect
                  width="339.562"
                  height="180"
                  x="33"
                  y="61"
                  stroke="#E5E7EB"
                  rx="10.515"
                  fill="none"
                />
              </motion.g>
            </motion.svg>
          </div>

          <motion.svg
            className="absolute left-8 top-10 z-20 -rotate-12 scale-125"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30"
            height="30"
            fill="none"
            initial={{ opacity: 0, rotate: 0 }}
            animate={
              isInView
                ? { opacity: 1, rotate: prefersReducedMotion ? 0 : 180 }
                : { opacity: prefersReducedMotion ? 1 : 0, rotate: 0 }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : { delay: 0.8, duration: 1.2, ease: 'easeInOut' }
            }
          >
            <path
              fill="#454545"
              d="M18.326 2.077a1.063 1.063 0 0 0-2.056-.36c-1.283 3.39-3.07 5.83-5.367 7.442-2.298 1.612-5.2 2.463-8.825 2.516a1.063 1.063 0 0 0-.36 2.056c3.39 1.283 5.83 3.07 7.442 5.368 1.613 2.298 2.463 5.199 2.517 8.824a1.063 1.063 0 0 0 2.056.36c1.283-3.39 3.069-5.83 5.367-7.442 2.298-1.613 5.2-2.463 8.824-2.517a1.062 1.062 0 0 0 .36-2.056c-3.39-1.283-5.83-3.069-7.442-5.367s-2.463-5.2-2.516-8.824Z"
            />
            <path
              stroke="#858585"
              d="M18.326 2.077a1.063 1.063 0 0 0-2.056-.36c-1.283 3.39-3.07 5.83-5.367 7.442-2.298 1.612-5.2 2.463-8.825 2.516a1.063 1.063 0 0 0-.36 2.056c3.39 1.283 5.83 3.07 7.442 5.368 1.613 2.298 2.463 5.199 2.517 8.824a1.063 1.063 0 0 0 2.056.36c1.283-3.39 3.069-5.83 5.367-7.442 2.298-1.613 5.2-2.463 8.824-2.517a1.062 1.062 0 0 0 .36-2.056c-3.39-1.283-5.83-3.069-7.442-5.367s-2.463-5.2-2.516-8.824Z"
            />
          </motion.svg>
        </motion.div>
      </div>
      <motion.div
        className="border-subtle mx-auto -mt-6 aspect-[2.4/1] w-[80%] rounded-md border md:-mt-12"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.8 },
        }}
      />
    </div>
  );
};

export { WindowSvg };
