
"use client"
import {Swiper, SwiperSlide} from 'swiper/react'
import type { StaticImageData } from "next/image";
import { Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import useMediaQuery from '@/hooks/useMediaQuery'
import {Card, CardTitle, CardBody, CardImage, CardCTA, CardDate, Review } from "./components"
import { useEffect, useState } from "react";

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
  centered?: boolean,
  name?: string,
}

const SwiperSection = ({slides, bodySize = 'normal', event = false, review = false, insideImage = true, centered = false, name}: SwiperSectionProps) => {
  const isDesktop = useMediaQuery("(min-width: 85.1875em)")
  const isSmaller = useMediaQuery("(min-width: 75rem)")
  const [showSwiper, setShowSwiper] = useState(true)

  const handleDestroy = () => {
    setShowSwiper(false)
  }

  const handleInit = () => {
    setShowSwiper(true)
  }

  useEffect(() => {
    const shouldInit = (name === 'events' || name === 'locations') 
      ? !isSmaller
      : !isDesktop;

    shouldInit ? handleInit() : handleDestroy();
  }, [isDesktop, isSmaller, name]);


  return(
    <div>
      {showSwiper ? (
        <Swiper 
          modules={[Pagination]}
          spaceBetween={50}
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
              <Card event={event} review={review}>
                {event && slide.date && (
                  <CardDate day={slide.date.day} month={slide.date.month} />
                )}
                {slide.image && insideImage && !review ? (
                  <CardBody size={bodySize} textCentre={centered}>
                    {slide.image && slide.image.src && (
                      <CardImage src={slide.image.src} alt={slide.image.alt} />
                    )}
                    {slide.title && (
                      <CardTitle title={slide.title.title} size={slide.title.size} />
                    )}
                    <p>{slide.content}</p>
                    {slide.cta && (
                      <CardCTA title={slide.cta.title} variant={slide.cta.variant} href={slide.cta.href} className={slide.cta.className} />
                    )}
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
                      {slide.title && (
                        <CardTitle title={slide.title.title} size={slide.title.size} />
                      )}
                      <p>{slide.content}</p>
                      {slide.cta && (
                        <CardCTA title={slide.cta.title} variant={slide.cta.variant} href={slide.cta.href} className={slide.cta.className} />
                      )}
                    </CardBody>
                  </>
                )}
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={`${name}__swiper`}>
          {slides.map((slide, index) => (
            <div key={index} className="swiper-slide">
              <Card event={event} review={review}>
                {event && slide.date && (
                  <CardDate day={slide.date.day} month={slide.date.month} />
                )}
                {slide.image && insideImage && !review ? (
                  <CardBody size={bodySize} textCentre={centered}>
                    {slide.image && slide.image.src && (
                      <CardImage src={slide.image.src} alt={slide.image.alt} />
                    )}
                    {slide.title && (
                      <CardTitle title={slide.title.title} size={slide.title.size} />
                    )}
                    <p>{slide.content}</p>
                    {slide.cta && (
                      <CardCTA title={slide.cta.title} variant={slide.cta.variant} href={slide.cta.href} className={slide.cta.className} />
                    )}
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
                      {slide.title && (
                        <CardTitle title={slide.title.title} size={slide.title.size} />
                      )}
                      <p>{slide.content}</p>
                      {slide.cta && (
                        <CardCTA title={slide.cta.title} variant={slide.cta.variant} href={slide.cta.href} className={slide.cta.className} />
                      )}
                    </CardBody>
                  </>
                )}
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SwiperSection