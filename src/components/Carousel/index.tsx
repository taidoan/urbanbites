'use client';
import { useEffect, useState } from 'react';
import type { StaticImageData } from "next/image";
import styles from './styles.module.scss'

type CarouselProps = {
  target: string,
  slides: StaticImageData[],
  children: React.ReactNode;
  duration: number,
}

const Carousel = ({target, slides, children, duration}: CarouselProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  useEffect(() => {
    const hero = document.querySelector(`.${target}`) as HTMLElement;
    if (!hero) return;

    hero.style.setProperty('--dynamic-background-image', `url("${slides[currentImage].src}")`);


    const updateBackgroundImage = (): void => {
      hero.classList.remove(styles.fadeIn);

      setTimeout(() => {
        setCurrentImage(prev => (prev + 1) % slides.length);
        hero.classList.add(styles.fadeIn);
      }, 2500);
    };
    const intervalId = setInterval(updateBackgroundImage, duration);
    return () => clearInterval(intervalId);
  }, [currentImage, slides, target, duration]);

  return (
    <>
      {children}
    </>
  );
};

export default Carousel;
