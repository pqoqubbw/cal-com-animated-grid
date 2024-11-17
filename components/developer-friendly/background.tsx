'use client';

import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';

const CHARACTERS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/';

const getRandomChar = () =>
  CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));

const CHANGE_CHARACTER_INTERVAL = 50;

const MatrixText = ({
  isInView,
  text,
}: {
  isInView: boolean;
  text: string;
}) => {
  const [displayText, setDisplayText] = useState(text);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const animate = async () => {
      if (isInView && !prefersReducedMotion) {
        interval = setInterval(() => {
          setDisplayText((prev) =>
            prev
              .split('')
              .map((_, i) => (Math.random() > 0.95 ? getRandomChar() : prev[i]))
              .join('')
          );
        }, CHANGE_CHARACTER_INTERVAL);
      }
    };

    animate();
    return () => clearInterval(interval);
  }, [isInView, prefersReducedMotion]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: prefersReducedMotion ? 0.6 : isInView ? 0.6 : 0 }}
      transition={prefersReducedMotion ? undefined : { duration: 1 }}
      className="select-none whitespace-pre"
    >
      {displayText}
    </motion.div>
  );
};

const INITIAL_TEXT = [
  '4afgSHaFjxh6ldky0asdfnchg9dsBczFysuhdDhBksuYds6GhfsdfhtyukwrryjMbXs557sdtykyli23457y,nasdrgpoii2345fxxcbhr3h6K',
  '7HjbnF6dhFJ7vnsgx6FH8doepdF6ietyfh78hdgntdfghb6BFGdnZvweryerqn6HFbYHfnghbHnbc3ysad0p023iopeuk8945tffy62v5X',
  'hf7reDSFGtdsKnfyjervNqwsdtthy4cvbtyilX76nmffvbgja7fgsdnsdfg7DNfnHnagaweryasdqszxxnvmFmCn5z7878964xP',
  'jddh6BChdxA34aashFjy98dfaqwerjaexczrgwrtysDdousfgkn7dasdflGpd34kIwrtwertn2bhvgandgteBDsf35Jv67Nbg7Ov',
  '<XbvC6Chf7xerasqrzXeDSFGtdCBshdtyjewerthggdTFwryuk67dnknfsfgjnuil57>qwer</XbvC6Chf7xerasqrzXeDSFGtdCBshdtyjewerthggdTFwryuk67dnknfsfgjnuil57>ghwqeV5HvcaqWjg8990dzsQewzCb',
  '0fahvn6fxsadfasfsxascxxkgj8yh65mBKGkshrtyukwwerylXoPhggtasshdfgsjT543sbhbVNMCPjgfSOvL8kvYzc',
  '7HjvnDuIxp87tasw345adfertyjasdfYReqWasdfcvn7JFGlsk9dmaCXdSaqPzs46xcvhktyirtyfg467xxv7nBHUnfv',
  'hNBgd5JBK87MvnXzrrhhytyjuiolyyfj8Pkgj60dfFzaawdqwet578o0[r,tus4wEshwxn28nbhjsd8nfFgnbZ90db',
];

const CharacterBackground = ({ isInView }: { isInView: boolean }) => {
  return (
    <div className="radial-fadeout absolute inset-0">
      <div className="text-[#9ca3af] absolute left-1/2 top-0 -translate-x-1/2 space-y-1 text-center font-mono text-xs tracking-wide">
        {INITIAL_TEXT.map((text, index) => (
          <div key={index}>
            <MatrixText isInView={isInView} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { CharacterBackground };
