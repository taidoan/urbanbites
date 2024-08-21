'use client';
import { useEffect } from 'react';
import type { StaticImageData } from "next/image";

type CarouselProps = {
  target: string,
  slides: StaticImageData[],
  children: React.ReactNode;
}

const Carousel = ({target, slides, children}: CarouselProps) => {
  let nextImage: number = 0;

  useEffect(() => {
    const hero = document.querySelector(`.${target}`) as HTMLElement;

    const initCarousel = (): void => {
      if (nextImage >= slides.length) {
        nextImage = 0;
      }
      hero.style.backgroundImage = `url("${slides[nextImage++].src}")`;
    };

    const intervalId = setInterval(initCarousel, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    {children}
    </>
  );
};

export default Carousel;
