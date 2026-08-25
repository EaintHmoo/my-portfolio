'use client'

import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image, { type StaticImageData } from 'next/image'
import { AnimatePresence, motion } from 'motion/react'

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
}

function ChevronIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
    </svg>
  )
}

interface ImageCarouselModalProps {
  images: StaticImageData[]
  title: string
  initialIndex?: number
  onClose: () => void
}

export function ImageCarouselModal({
  images,
  title,
  initialIndex = 0,
  onClose,
}: ImageCarouselModalProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex)
  const [mounted, setMounted] = useState(false)
  const total = images.length

  const goTo = useCallback(
    (index: number) => setActiveIndex(((index % total) + total) % total),
    [total],
  )

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goTo(activeIndex + 1)
      if (e.key === 'ArrowLeft') goTo(activeIndex - 1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [activeIndex, goTo, onClose])

  useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [])

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
        onClick={onClose}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 z-20 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
        >
          <CloseIcon className="h-6 w-6" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            goTo(activeIndex - 1)
          }}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:left-6"
        >
          <ChevronIcon className="h-6 w-6 rotate-180" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            goTo(activeIndex + 1)
          }}
          aria-label="Next image"
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 sm:right-6"
        >
          <ChevronIcon className="h-6 w-6" />
        </button>

        <div
          className="relative h-[60vh] w-full max-w-4xl sm:h-[65vh]"
          style={{ perspective: '1400px' }}
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((img, index) => {
            let offset = index - activeIndex
            if (offset > total / 2) offset -= total
            if (offset < -total / 2) offset += total
            const isActive = offset === 0
            const distance = Math.abs(offset)

            return (
              <motion.div
                key={index}
                className="absolute inset-0 flex items-center justify-center"
                style={{ zIndex: total - distance }}
                animate={{
                  x: `${offset * 62}%`,
                  scale: isActive ? 1 : Math.max(0.55, 1 - distance * 0.22),
                  opacity: distance > 2 ? 0 : 1 - distance * 0.4,
                  rotateY: offset * -35,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              >
                <button
                  type="button"
                  onClick={() => !isActive && goTo(index)}
                  className="relative h-full w-full overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10"
                  style={{ cursor: isActive ? 'default' : 'pointer', pointerEvents: distance > 2 ? 'none' : 'auto' }}
                  aria-label={`Screenshot ${index + 1} of ${total}`}
                  tabIndex={isActive ? -1 : 0}
                >
                  <Image
                    src={img}
                    alt={`${title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 60vw, 90vw"
                    priority={isActive}
                  />
                </button>
              </motion.div>
            )
          })}
        </div>

        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                goTo(i)
              }}
              aria-label={`Go to screenshot ${i + 1}`}
              className={`h-2 w-2 rounded-full transition ${
                i === activeIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  )
}
