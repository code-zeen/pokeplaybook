'use client'

import BoosterPack_BackgroundArt from '@/features/pokemon-cards/components/BoosterPack/BoosterPack_BackgroundArt.tsx'
import { AnimatePresence, motion } from 'motion/react'

interface PokemonBoosterPackProps {
    isOpened: boolean
    handleClick: () => void
}

export default function BoosterPack({ isOpened, handleClick }: PokemonBoosterPackProps) {

    return (
        <div onClick={handleClick} className="cursor-pointer select-none">
            <AnimatePresence>
                {!isOpened && (
                    <>
                        <motion.div
                            className="h-8 bg-red-600"
                            initial={{ y: 0 }}
                            animate={{ y: isOpened ? -50 : 0 }}
                            exit={{ y: -50, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        />
                        <motion.div
                            className="h-1 bg-gray-50"
                            initial={{ y: 0 }}
                            animate={{ y: isOpened ? -50 : 0 }}
                            exit={{ y: -50, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        />
                    </>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {!isOpened && (
                    <motion.div
                        className="h-0.5 bg-gray-50"
                        initial={{ y: 0 }}
                        animate={{ y: isOpened ? 50 : 0 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <BoosterPack_BackgroundArt />
                        <div className="h-0.5 bg-gray-50" />
                        <div className="h-4 bg-red-600" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
