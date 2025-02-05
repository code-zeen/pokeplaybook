import { PokedexTypeEnum } from '@/features/pokedex/interface/enums.ts'
import { PokemonCardTypeEnum } from '@/features/pokemon-cards/interface/enums.ts'
import colorlessEnergy from '../../assets/Colorless_energy.png'
import darkEnergy from '../../assets/Dark_energy.png'
import electricEnergy from '../../assets/Electric_energy.png'
import fairyEnergy from '../../assets/Fairy_energy.png'
import fightingEnergy from '../../assets/Fighting_energy.png'
import fireEnergy from '../../assets/Fire_energy.png'
import grassEnergy from '../../assets/Grass_energy.png'
import psychicEnergy from '../../assets/Psychic_energy.png'
import steelEnergy from '../../assets/Steel_energy.png'

import svBug from '../../assets/sv-bug.png'
import svDark from '../../assets/sv-dark.png'
import svDragon from '../../assets/sv-dragon.png'
import svElectric from '../../assets/sv-electric.png'
import svFairy from '../../assets/sv-fairy.png'
import svFighting from '../../assets/sv-fighting.png'
import svFire from '../../assets/sv-fire.png'
import svFlying from '../../assets/sv-flying.png'
import svGhost from '../../assets/sv-ghost.png'
import svGrass from '../../assets/sv-grass.png'
import svGround from '../../assets/sv-ground.png'
import svIce from '../../assets/sv-ice.png'
import svNormal from '../../assets/sv-normal.png'
import svPoison from '../../assets/sv-poison.png'
import svPsychic from '../../assets/sv-psychic.png'
import svRock from '../../assets/sv-rock.png'
import svSteel from '../../assets/sv-steel.png'
import svWater from '../../assets/sv-water.png'
import waterEnergy from '../../assets/Water_energy.png'

const iconSets = {
    [PokemonCardTypeEnum.COLORLESS]: colorlessEnergy,
    [PokemonCardTypeEnum.DARK]: darkEnergy,
    [PokemonCardTypeEnum.ELECTRIC]: electricEnergy,
    [PokemonCardTypeEnum.FAIRY]: fairyEnergy,
    [PokemonCardTypeEnum.FIGHTING]: fightingEnergy,
    [PokemonCardTypeEnum.FIRE]: fireEnergy,
    [PokemonCardTypeEnum.GRASS]: grassEnergy,
    [PokemonCardTypeEnum.PSYCHIC]: psychicEnergy,
    [PokemonCardTypeEnum.STEEL]: steelEnergy,
    [PokemonCardTypeEnum.WATER]: waterEnergy,

    [PokedexTypeEnum.BUG]: svBug,
    [PokedexTypeEnum.DARK]: svDark,
    [PokedexTypeEnum.DRAGON]: svDragon,
    [PokedexTypeEnum.ELECTRIC]: svElectric,
    [PokedexTypeEnum.FAIRY]: svFairy,
    [PokedexTypeEnum.FIGHTING]: svFighting,
    [PokedexTypeEnum.FIRE]: svFire,
    [PokedexTypeEnum.FLYING]: svFlying,
    [PokedexTypeEnum.GHOST]: svGhost,
    [PokedexTypeEnum.GRASS]: svGrass,
    [PokedexTypeEnum.GROUND]: svGround,
    [PokedexTypeEnum.ICE]: svIce,
    [PokedexTypeEnum.NORMAL]: svNormal,
    [PokedexTypeEnum.POISON]: svPoison,
    [PokedexTypeEnum.PSYCHIC]: svPsychic,
    [PokedexTypeEnum.ROCK]: svRock,
    [PokedexTypeEnum.STEEL]: svSteel,
    [PokedexTypeEnum.WATER]: svWater,
}

interface TypeIconProps {
    type?: PokedexTypeEnum | PokemonCardTypeEnum
    height?: string
    className?: string
}

function TypeIcon({
                      type,
                      height = '16px',
                      className = ''
                  }: TypeIconProps) {
    if (!type) return null
    return (
        <img
            src={iconSets[type]}
            alt={type}
            style={{ height: height }}
            className={`${className} rounded-full border border-gray-100`}
        />
    )
}

export default TypeIcon