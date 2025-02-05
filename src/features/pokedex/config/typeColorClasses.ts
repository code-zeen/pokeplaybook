import { PokemonCardTypeEnum } from '@/features/pokemon-cards/interface/enums.ts'

export const cardBgClass = {
    [PokemonCardTypeEnum.COLORLESS]: 'bg-gradient-to-b from-gray-200 via-gray-50 to-gray-300',
    [PokemonCardTypeEnum.DARK]: 'bg-gradient-to-b from-slate-500 via-slate-400 to-slate-500',
    [PokemonCardTypeEnum.DRAGON]: 'bg-gradient-to-b from-yellow-600 via-yellow-500 to-yellow-600',
    [PokemonCardTypeEnum.ELECTRIC]: 'bg-gradient-to-b from-yellow-300 via-yellow-200 to-yellow-300',
    [PokemonCardTypeEnum.FAIRY]: 'bg-gradient-to-b from-pink-200 via-pink-100 to-pink-200',
    [PokemonCardTypeEnum.FIGHTING]: 'bg-gradient-to-b from-red-400 via-red-300 to-red-400',
    [PokemonCardTypeEnum.FIRE]: 'bg-gradient-to-b from-orange-400 via-orange-300 to-orange-400',
    [PokemonCardTypeEnum.GRASS]: 'bg-gradient-to-b from-green-500 via-green-400 to-green-500',
    [PokemonCardTypeEnum.PSYCHIC]: 'bg-gradient-to-b from-violet-400 via-violet-300 to-violet-400',
    [PokemonCardTypeEnum.STEEL]: 'bg-gradient-to-b from-slate-400 via-slate-300 to-slate-400 ',
    [PokemonCardTypeEnum.WATER]: 'bg-gradient-to-b from-blue-400 via-blue-300 to-blue-400',
}

export const spriteBgClass = {
    [PokemonCardTypeEnum.COLORLESS]: 'bg-gray-300',
    [PokemonCardTypeEnum.DARK]: 'bg-slate-700',
    [PokemonCardTypeEnum.DRAGON]: 'bg-amber-600',
    [PokemonCardTypeEnum.ELECTRIC]: 'bg-yellow-400',
    [PokemonCardTypeEnum.FAIRY]: 'bg-pink-400',
    [PokemonCardTypeEnum.FIGHTING]: 'bg-red-500',
    [PokemonCardTypeEnum.FIRE]: 'bg-orange-600',
    [PokemonCardTypeEnum.GRASS]: 'bg-green-700',
    [PokemonCardTypeEnum.PSYCHIC]: 'bg-violet-500',
    [PokemonCardTypeEnum.STEEL]: 'bg-slate-600',
    [PokemonCardTypeEnum.WATER]: 'bg-blue-500',
}