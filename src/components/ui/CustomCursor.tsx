"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', updateMousePosition)

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
        }
    }, [])

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        }
    }

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 bg-blue-500 rounded-full mix-blend-difference pointer-events-none z-50"
            variants={variants}
            animate="default"
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
    )
}

export default CustomCursor 