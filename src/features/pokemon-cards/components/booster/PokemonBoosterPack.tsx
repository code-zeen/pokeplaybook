'use client'

import BackgroundArt from '@/features/pokemon-cards/components/booster/BackgroundArt.tsx'
import { AnimatePresence, motion } from 'framer-motion'

interface PokemonBoosterPackProps {
    isOpened: boolean
    handleClick: () => void
}

export default function PokemonBoosterPack({ isOpened, handleClick }: PokemonBoosterPackProps) {

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
                        <BackgroundArt />
                        <div className="h-0.5 bg-gray-50" />
                        <div className="h-4 bg-red-600" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
