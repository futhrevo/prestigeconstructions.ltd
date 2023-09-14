/* eslint-disable @next/next/no-img-element */
'use client';


import Gallery from "react-photo-gallery";

const photos = [
  { src: "1.jpg", width: 4, height: 3 },
  { src: "2.jpg", width: 4, height: 3 },
  { src: "3.jpeg", width: 4, height: 3 },
  { src: "4.jpeg", width: 4, height: 3 },
  { src: "5.jpeg", width: 4, height: 3 },
  { src: "6.jpeg", width: 4, height: 3 },
  { src: "7.jpeg", width: 4, height: 3 },
  { src: "8.jpeg", width: 4, height: 3 },
  { src: "9.jpeg", width: 4, height: 3 },
  { src: "10.jpeg", width: 4, height: 3 },
  { src: "11.jpeg", width: 4, height: 3 },
  { src: "12.jpeg", width: 4, height: 3 },
  { src: "13.jpg", width: 4, height: 3 },
  { src: "14.jpg", width: 4, height: 3 },
  { src: "15.jpg", width: 4, height: 3 },
  { src: "16.webp", width: 4, height: 3 },
  { src: "17.jpg", width: 4, height: 3 },
  { src: "18.jpg", width: 4, height: 3 },
  { src: "19.jpg", width: 4, height: 3 },
  { src: "20.jpeg", width: 4, height: 3 },
  { src: "21.jpeg", width: 4, height: 3 },
  { src: "22.jpeg", width: 4, height: 3 },
  { src: "23.jpeg", width: 4, height: 3 },
  { src: "24.jpeg", width: 4, height: 3 },
  { src: "25.jpeg", width: 4, height: 3 },
  { src: "26.jpeg", width: 4, height: 3 },
  { src: "27.jpeg", width: 4, height: 3 },
]
export default function SlidingInterval() {
  return(
  <Gallery photos={photos} />
  )
}

const Image = ({ url, alt }: {url:string; alt: string}) => (
  <img draggable={false} style={{ width: '100%', height: '100%',position: 'relative'}} src={url} alt={alt} />
)

