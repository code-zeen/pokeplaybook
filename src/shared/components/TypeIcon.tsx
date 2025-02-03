import { PokedexTypeEnum } from '@/features/pokedex/interface/enums.ts'
import { PokemonCardTypeEnum } from '@/features/pokemon-cards/interface/enums.ts'
import swShColorless from '../../assets/Colorless_icon_SwSh.png'
import swShDark from '../../assets/Dark_icon_SwSh.png'
import swShDragon from '../../assets/Dragon_icon_SwSh.png'
import swShElectric from '../../assets/Electric_icon_SwSh.png'
import swShFairy from '../../assets/Fairy_icon_SwSh.png'
import swShFighting from '../../assets/Fighting_icon_SwSh.png'
import swShFire from '../../assets/Fire_icon_SwSh.png'
import swShGrass from '../../assets/Grass_icon_SwSh.png'
import swShPsychic from '../../assets/Psychic_icon_SwSh.png'
import swShSteel from '../../assets/Steel_icon_SwSh.png'
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
import swShWater from '../../assets/Water_icon_SwSh.png'

const iconSets = {
    [PokemonCardTypeEnum.COLORLESS]: swShColorless,
    [PokemonCardTypeEnum.DARK]: swShDark,
    [PokemonCardTypeEnum.DRAGON]: swShDragon,
    [PokemonCardTypeEnum.ELECTRIC]: swShElectric,
    [PokemonCardTypeEnum.FAIRY]: swShFairy,
    [PokemonCardTypeEnum.FIGHTING]: swShFighting,
    [PokemonCardTypeEnum.FIRE]: swShFire,
    [PokemonCardTypeEnum.GRASS]: swShGrass,
    [PokemonCardTypeEnum.PSYCHIC]: swShPsychic,
    [PokemonCardTypeEnum.STEEL]: swShSteel,
    [PokemonCardTypeEnum.WATER]: swShWater,
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
            className={className}
        />
    )
}

export default TypeIcon