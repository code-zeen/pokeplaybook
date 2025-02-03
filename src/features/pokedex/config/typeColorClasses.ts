import { PokemonCardTypeEnum } from '@/features/pokemon-cards/interface/enums.ts'

export const cardBgClass = {
    [PokemonCardTypeEnum.COLORLESS]: 'bg-gray-200',
    [PokemonCardTypeEnum.DARK]: 'bg-slate-500',
    [PokemonCardTypeEnum.ELECTRIC]: 'bg-yellow-200',
    [PokemonCardTypeEnum.FAIRY]: 'bg-pink-200',
    [PokemonCardTypeEnum.FIGHTING]: 'bg-red-400',
    [PokemonCardTypeEnum.FIRE]: 'bg-orange-400',
    [PokemonCardTypeEnum.GRASS]: 'bg-green-500',
    [PokemonCardTypeEnum.PSYCHIC]: 'bg-rose-300',
    [PokemonCardTypeEnum.STEEL]: 'bg-slate-400',
    [PokemonCardTypeEnum.WATER]: 'bg-blue-300',
}

export const spriteBgClass = {
    [PokemonCardTypeEnum.COLORLESS]: 'bg-gray-300',
    [PokemonCardTypeEnum.DARK]: 'bg-slate-700',
    [PokemonCardTypeEnum.ELECTRIC]: 'bg-yellow-400',
    [PokemonCardTypeEnum.FAIRY]: 'bg-pink-400',
    [PokemonCardTypeEnum.FIGHTING]: 'bg-red-500',
    [PokemonCardTypeEnum.FIRE]: 'bg-orange-600',
    [PokemonCardTypeEnum.GRASS]: 'bg-green-700',
    [PokemonCardTypeEnum.PSYCHIC]: 'bg-rose-400',
    [PokemonCardTypeEnum.STEEL]: 'bg-slate-600',
    [PokemonCardTypeEnum.WATER]: 'bg-blue-500',
}