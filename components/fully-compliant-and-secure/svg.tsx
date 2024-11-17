'use client';

import { motion, useReducedMotion } from 'motion/react';

const ShieldSvg = ({ isInView }: { isInView: boolean }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="dot-grid radial-fadeout flex w-full justify-center">
      <motion.svg
        initial={{ opacity: 0 }}
        animate={
          isInView ? { opacity: 1 } : { opacity: prefersReducedMotion ? 1 : 0 }
        }
        transition={prefersReducedMotion ? undefined : { duration: 0.5 }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 245 163"
        width="245"
        height="163"
        fill="none"
      >
        <motion.g
          initial={{
            scale: 0.95,
            opacity: 0,
          }}
          animate={
            isInView
              ? { scale: 1, opacity: 1 }
              : {
                  scale: prefersReducedMotion ? 1 : 0.95,
                  opacity: prefersReducedMotion ? 1 : 0,
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  delay: 0.2,
                  duration: 0.5,
                }
          }
          filter="url(#a)"
        >
          <path fill="#F9FAFB" d="M72 32h100v100H72z" />
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={
            isInView
              ? { opacity: 1 }
              : { opacity: prefersReducedMotion ? 1 : 0 }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  delay: 0.8,
                  duration: 0.5,
                }
          }
        >
          <path stroke="url(#b)" d="M0 32h244.5" />
          <path stroke="url(#c)" d="M0 132h244.5" />
          <path stroke="url(#d)" d="M172 162.344v-162" />
          <path stroke="url(#e)" d="M72 162.344v-162" />
        </motion.g>

        <motion.g
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : {
                  opacity: prefersReducedMotion ? 1 : 0,
                  y: prefersReducedMotion ? 0 : -20,
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  delay: 0.8,
                  duration: 0.5,
                }
          }
        >
          <rect
            width="83"
            height="83"
            x="80.5"
            y="40.5"
            fill="#fff"
            stroke="#E5E7EB"
            rx="3.5"
          />
        </motion.g>

        <motion.g
          filter="url(#f)"
          initial={{
            y: -4,
            opacity: 0,
          }}
          animate={
            isInView
              ? { y: 0, opacity: 1 }
              : {
                  y: prefersReducedMotion ? 0 : -4,
                  opacity: prefersReducedMotion ? 1 : 0,
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  delay: 1,
                  duration: 0.3,
                  ease: 'easeOut',
                }
          }
        >
          <circle cx="88" cy="48" r="2" fill="#E5E7EB" />
        </motion.g>

        <motion.g
          filter="url(#g)"
          initial={{
            x: 4,
            opacity: 0,
          }}
          animate={
            isInView
              ? { x: 0, opacity: 1 }
              : {
                  x: prefersReducedMotion ? 0 : 4,
                  opacity: prefersReducedMotion ? 1 : 0,
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  delay: 1.1,
                  duration: 0.3,
                  ease: 'easeOut',
                }
          }
        >
          <circle cx="156" cy="48" r="2" fill="#E5E7EB" />
        </motion.g>

        <motion.g
          filter="url(#i)"
          initial={{
            y: 4,
            opacity: 0,
          }}
          animate={
            isInView
              ? { y: 0, opacity: 1 }
              : {
                  y: prefersReducedMotion ? 0 : 4,
                  opacity: prefersReducedMotion ? 1 : 0,
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  delay: 1.2,
                  duration: 0.3,
                  ease: 'easeOut',
                }
          }
        >
          <circle cx="156" cy="116" r="2" fill="#E5E7EB" />
        </motion.g>

        <motion.g
          filter="url(#h)"
          initial={{
            x: -4,
            opacity: 0,
          }}
          animate={
            isInView
              ? { x: 0, opacity: 1 }
              : {
                  x: prefersReducedMotion ? 0 : -4,
                  opacity: prefersReducedMotion ? 1 : 0,
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  delay: 1.3,
                  duration: 0.3,
                  ease: 'easeOut',
                }
          }
        >
          <circle cx="88" cy="116" r="2" fill="#E5E7EB" />
        </motion.g>

        <motion.g
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={
            isInView
              ? { y: 0, opacity: 1 }
              : {
                  y: prefersReducedMotion ? 0 : 20,
                  opacity: prefersReducedMotion ? 1 : 0,
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  delay: 1,
                  duration: 0.5,
                  ease: 'easeOut',
                }
          }
        >
          <motion.g
            variants={{
              initial: { scale: 1, rotate: 0 },
              animate: {
                scale: prefersReducedMotion ? 1 : [1, 0.9, 1],
                rotate: prefersReducedMotion ? 0 : [0, 8, -8, 0],
              },
            }}
            transition={
              prefersReducedMotion
                ? undefined
                : {
                    delay: 2,
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 2.5,
                    ease: 'easeInOut',
                    repeatType: 'loop',
                    rotate: {
                      delay: 1.8,
                      repeat: Infinity,
                      repeatDelay: 2.5,
                      repeatType: 'loop',
                      duration: 0.4,
                      ease: [0.34, 1.56, 0.64, 1],
                      times: [0, 0.3, 0.7, 1],
                    },
                  }
            }
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
          >
            <g filter="url(#j)">
              <path
                fill="#F9FAFB"
                d="m119.142 51.85-21.459 7.858a2.295 2.295 0 0 0-1.493 2.398l1.464 13.732a45.52 45.52 0 0 0 18.244 31.808l4.402 3.247a2.01 2.01 0 0 0 2.345.028l4.66-3.268a45.524 45.524 0 0 0 19.135-32.505l1.37-13.02a2.295 2.295 0 0 0-1.522-2.405l-22.495-7.904a6.889 6.889 0 0 0-4.651.03Z"
              />
            </g>
            <path
              stroke="#E5E7EB"
              d="m97.855 60.177 21.459-7.858a6.387 6.387 0 0 1 4.313-.028l22.496 7.904a1.796 1.796 0 0 1 1.19 1.881l-1.371 13.02a45.021 45.021 0 0 1-18.924 32.148l-4.66 3.268a1.51 1.51 0 0 1-1.762-.022l-4.402-3.246a45.025 45.025 0 0 1-18.043-31.459l-1.464-13.732a1.795 1.795 0 0 1 1.168-1.876Z"
            />
            <g filter="url(#k)">
              <path
                fill="url(#l)"
                fillOpacity=".44"
                d="m145.569 60.05-22.474-7.897a1.77 1.77 0 0 0-2.356 1.648l-.647 54.644c-.017 1.436 1.595 2.293 2.776 1.475l3.369-2.334a45.52 45.52 0 0 0 19.278-31.997l1.572-13.1a2.296 2.296 0 0 0-1.518-2.44Z"
              />
            </g>
          </motion.g>
        </motion.g>

        <defs>
          <filter
            id="f"
            width="5"
            height="5"
            x="85"
            y="45"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="1"
              result="effect1_innerShadow_0_1"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1.2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" result="effect1_innerShadow_0_1" />
          </filter>
          <filter
            id="g"
            width="5"
            height="5"
            x="153"
            y="45"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="1"
              result="effect1_innerShadow_0_1"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1.2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" result="effect1_innerShadow_0_1" />
          </filter>
          <filter
            id="h"
            width="5"
            height="5"
            x="85"
            y="113"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="1"
              result="effect1_innerShadow_0_1"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1.2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" result="effect1_innerShadow_0_1" />
          </filter>
          <filter
            id="i"
            width="5"
            height="5"
            x="153"
            y="113"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="1"
              result="effect1_innerShadow_0_1"
            />
            <feOffset dx="-1" dy="-1" />
            <feGaussianBlur stdDeviation="1.2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="shape" result="effect1_innerShadow_0_1" />
          </filter>
          <filter
            id="j"
            width="51.646"
            height="59.855"
            x="96.177"
            y="51.43"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2.152" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix values="0 0 0 0 0.712158 0 0 0 0 0.712158 0 0 0 0 0.712158 0 0 0 0.51 0" />
            <feBlend in2="shape" result="effect1_innerShadow_0_1" />
          </filter>
          <filter
            id="k"
            width="29.307"
            height="60.483"
            x="118.944"
            y="50.903"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_0_1"
              stdDeviation=".574"
            />
          </filter>
          <radialGradient
            id="b"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="rotate(-179.766 61.158 16.125) scale(122.251 29890.4)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E8E9EB" />
            <stop offset=".872" stopColor="#D1D5DB" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="c"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="rotate(-179.766 61.26 66.125) scale(122.251 29890.4)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E8E9EB" />
            <stop offset=".872" stopColor="#D1D5DB" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="d"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(-.50004 80.99996 -29889.53046 -184.51728 172.5 81.344)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E8E9EB" />
            <stop offset="1" stopColor="#D1D5DB" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="e"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(-.50004 80.99996 -29889.53046 -184.51728 72.5 81.344)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E8E9EB" />
            <stop offset="1" stopColor="#D1D5DB" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="l"
            x1="121.94"
            x2="121.94"
            y1="54.014"
            y2="108.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EAEBEB" />
            <stop offset="1" stopColor="#F2F2F3" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

export { ShieldSvg };
