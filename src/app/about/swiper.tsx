
"use client"
import {Swiper, SwiperSlide} from 'swiper/react'
import type { StaticImageData } from "next/image";
import { Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import { Key } from 'react';
import {Card, CardTitle, CardBody, CardImage, CardCTA, CardDate, Review } from "./components"

type Slide = {
      content: string,
      image?: {
        src: string | StaticImageData,
        alt: string,
      },
      cta?: {
        href?: string,
        title: string,
        variant?: 'primary' | 'secondary' | 'tertiary' | 'beige' | 'disabled',
        className?: string
      },
      title?: {
        title: string,
        classes?: string,
        size?: "large" | "small"
      },
      date?: {
        day: number,
        month: string,
      },
      review?: {
        author: string,
        rating: number,
        date: string,
      }
}

type SwiperSectionProps = {
  slides: Slide[],
  bodySize?: 'normal' | 'large',
  event?: boolean,
  review?: boolean,
  insideImage?: boolean,
  centered?: boolean
}

const SwiperSection = ({slides, bodySize = 'normal', event = false, review = false, insideImage = true, centered = false}: SwiperSectionProps) => {
  return(
    <Swiper 
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{clickable: true}}
      autoHeight={true}
      breakpoints={{1024: {slidesPerView: 4}}}
    >
 {slides.map((slide: Slide, index: Key) => (
  <SwiperSlide key={index}>
    <Card event={event} review={review}>
      {event && slide.date && (
        <CardDate day={slide.date.day} month={slide.date.month} />
      )}
      {slide.image && insideImage && !review ? (
        <CardBody size={bodySize} textCentre={centered}>
          {slide.image && slide.image.src && (
            <CardImage src={slide.image.src} alt={slide.image.alt} />
          )}
          {slide.title && <CardTitle title={slide.title.title} size={slide.title.size} />}
          <p>{slide.content}</p>
          {slide.cta && <CardCTA title={slide.cta.title} variant={slide.cta.variant} href={slide.cta.href} className={slide.cta.className} />}
        </CardBody>
      ) : review ? (
        <CardBody>
          {slide.review && (
            <Review rating={slide.review.rating} author={slide.review.author} date={slide.review.date}>
              <p>{slide.content}</p>
            </Review>
          )}
        </CardBody>
      ) : (
        <>
          {slide.image && slide.image.src && (
            <CardImage src={slide.image.src} alt={slide.image.alt} />
          )}
          <CardBody size={bodySize}>
            {slide.title && <CardTitle title={slide.title.title} size={slide.title.size} />}
            <p>{slide.content}</p>
            {slide.cta && <CardCTA title={slide.cta.title} variant={slide.cta.variant} href={slide.cta.href} className={slide.cta.className} />}
          </CardBody>
        </>
      )}
    </Card>
  </SwiperSlide>
))}

    </Swiper>
  )
}

export default SwiperSection