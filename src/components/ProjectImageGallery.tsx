'use client'

import { useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { ImageCarouselModal } from '@/components/ImageCarouselModal'

interface ProjectImageGalleryProps {
  images: StaticImageData[]
  title: string
}

export function ProjectImageGallery({ images, title }: ProjectImageGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-3 gap-1">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`View ${title} screenshot ${i + 1}`}
            className="group relative h-24 w-full cursor-zoom-in overflow-hidden"
          >
            <Image
              src={img}
              alt={`${title} screenshot ${i + 1}`}
              fill
              className="object-cover transition duration-300 group-hover:scale-110"
            />
          </button>
        ))}
      </div>
      {openIndex !== null && (
        <ImageCarouselModal
          images={images}
          title={title}
          initialIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  )
}
