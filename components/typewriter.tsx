"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Typewriter({ 
  texts, 
  delay = 100, 
  wait = 2000,
  className = "" 
}: { 
  texts: string[], 
  delay?: number, 
  wait?: number,
  className?: string
}) {
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = texts[index]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.substring(0, displayText.length + 1))
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), wait)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentFullText.substring(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? delay / 2 : delay)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, index, texts, delay, wait])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  )
}
