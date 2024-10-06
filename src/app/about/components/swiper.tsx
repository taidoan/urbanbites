"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import type { StaticImageData } from "next/image";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Card, CardTitle, CardBody, CardImage, CardCTA, CardDate, Review } from "./index";
import { useEffect, useState } from "react";
import Link from "next/link";

type Slide = {
  content: string;
  image?: {
    src: string | StaticImageData | undefined;
    alt: string;
  };
  cta?: {
    href?: string;
    title: string;
    variant?: "primary" | "secondary" | "tertiary" | "beige" | "disabled";
    className?: string;
    target?: string;
  };
  title?: {
    title: string;
    classes?: string;
    size?: "large" | "small";
    url?: string;
  };
  date?: {
    day: number;
    month: string;
  };
  review?: {
    author: string;
    rating: number;
    date: string;
  };
  url?: string;
};

type SwiperSectionProps = {
  slides: Slide[];
  event?: boolean;
  review?: boolean;
  insideImage?: boolean;
  imageSize?: string;
  centered?: boolean;
  name?: string;
};

const ImageLink = ({ src, alt, url, imageSize }: { src: string | StaticImageData | undefined, alt: string, url?: string, imageSize?: string }) => (
  url ? (
    <Link href={url} className="imageLink">
      <CardImage src={src} alt={alt} imageSize={imageSize} />
    </Link>
  ) : (
    <CardImage src={src} alt={alt} imageSize={imageSize} />
  )
);

const TitleLink = ({ title, size, url }: { title: string, size?: "large" | "small", url?: string }) => (
  url ? (
    <Link href={url} className="titleLink">
      <CardTitle title={title} size={size} />
    </Link>
  ) : (
    <CardTitle title={title} size={size} />
  )
);

const CardContent = ({ slide, event, review, insideImage, imageSize, centered }: { slide: Slide, event: boolean, review: boolean, insideImage: boolean, imageSize: string, centered: boolean }) => (
  <Card event={event} review={review}>
    {event && slide.date && <CardDate day={slide.date.day} month={slide.date.month} />}
    {insideImage && slide.image && !review ? (
      <CardBody textCentre={centered}>
        <ImageLink src={slide.image.src} alt={slide.image.alt} url={slide.url} imageSize={imageSize} />
        {slide.title && <TitleLink title={slide.title.title} size={slide.title.size} url={slide.url} />}
        <p>{slide.content}</p>
        {slide.cta && (
          <CardCTA title={slide.cta.title} variant={slide.cta.variant} href={slide.cta.href} className={slide.cta.className} target={slide.cta.target} />
        )}
      </CardBody>
    ) : review && slide.review ? (
      <CardBody>
        <Review rating={slide.review.rating} author={slide.review.author} date={slide.review.date}>
          <p>{slide.content}</p>
        </Review>
      </CardBody>
    ) : (
      <>
        {!insideImage && slide.image && <ImageLink src={slide.image.src} alt={slide.image.alt} url={slide.url} imageSize={imageSize} />}
        <CardBody textCentre={centered}>
          {slide.title && <TitleLink title={slide.title.title} size={slide.title.size} url={slide.url} />}
          <p>{slide.content}</p>
          {slide.cta && (
            <CardCTA title={slide.cta.title} variant={slide.cta.variant} href={slide.cta.href} className={slide.cta.className} target={slide.cta.target}  />
          )}
        </CardBody>
      </>
    )}
  </Card>
);

const SwiperSection = ({ slides, event = false, review = false, insideImage = true, imageSize = 'normal', centered = false, name }: SwiperSectionProps) => {
  const isDesktop = useMediaQuery("(min-width: 85.1875em)");
  const isSmaller = useMediaQuery("(min-width: 75rem)");
  const [showSwiper, setShowSwiper] = useState(true);

  useEffect(() => {
    const shouldInit = (name === 'events' || name === 'locations') ? !isSmaller : !isDesktop;
    setShowSwiper(shouldInit);
  }, [isDesktop, isSmaller, name]);

  return showSwiper ? (
    <Swiper 
      modules={[Pagination]}
      spaceBetween={32}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoHeight={true}
      breakpoints={{
        780: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
        1363: { slidesPerView: 4 }
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <CardContent slide={slide} event={event} review={review} insideImage={insideImage} imageSize={imageSize} centered={centered} />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <div className={`${name}__swiper`}>
      {slides.map((slide, index) => (
        <div key={index} className="swiper-slide">
          <CardContent slide={slide} event={event} review={review} insideImage={insideImage} imageSize={imageSize} centered={centered} />
        </div>
      ))}
    </div>
  );
};

export default SwiperSection;
