import { TypeEnum } from '@/enum/pokemonEnum.ts'
import swShBug from '../../assets/Bug_icon_SwSh.png'
import swShDark from '../../assets/Dark_icon_SwSh.png'
import swShDragon from '../../assets/Dragon_icon_SwSh.png'
import swShElectric from '../../assets/Electric_icon_SwSh.png'
import swShFairy from '../../assets/Fairy_icon_SwSh.png'
import swShFighting from '../../assets/Fighting_icon_SwSh.png'
import swShFire from '../../assets/Fire_icon_SwSh.png'
import swShFlying from '../../assets/Flying_icon_SwSh.png'
import swShGhost from '../../assets/Ghost_icon_SwSh.png'
import swShGrass from '../../assets/Grass_icon_SwSh.png'
import swShGround from '../../assets/Ground_icon_SwSh.png'
import swShIce from '../../assets/Ice_icon_SwSh.png'
import swShNormal from '../../assets/Normal_icon_SwSh.png'
import swShPoison from '../../assets/Poison_icon_SwSh.png'
import swShPsychic from '../../assets/Psychic_icon_SwSh.png'
import swShRock from '../../assets/Rock_icon_SwSh.png'
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
    swSh: {
        [TypeEnum.BUG]: swShBug,
        [TypeEnum.DARK]: swShDark,
        [TypeEnum.DRAGON]: swShDragon,
        [TypeEnum.ELECTRIC]: swShElectric,
        [TypeEnum.FAIRY]: swShFairy,
        [TypeEnum.FIGHTING]: swShFighting,
        [TypeEnum.FIRE]: swShFire,
        [TypeEnum.FLYING]: swShFlying,
        [TypeEnum.GHOST]: swShGhost,
        [TypeEnum.GRASS]: swShGrass,
        [TypeEnum.GROUND]: swShGround,
        [TypeEnum.ICE]: swShIce,
        [TypeEnum.NORMAL]: swShNormal,
        [TypeEnum.POISON]: swShPoison,
        [TypeEnum.PSYCHIC]: swShPsychic,
        [TypeEnum.ROCK]: swShRock,
        [TypeEnum.STEEL]: swShSteel,
        [TypeEnum.WATER]: swShWater,
    },
    sv: {
        [TypeEnum.BUG]: svBug,
        [TypeEnum.DARK]: svDark,
        [TypeEnum.DRAGON]: svDragon,
        [TypeEnum.ELECTRIC]: svElectric,
        [TypeEnum.FAIRY]: svFairy,
        [TypeEnum.FIGHTING]: svFighting,
        [TypeEnum.FIRE]: svFire,
        [TypeEnum.FLYING]: svFlying,
        [TypeEnum.GHOST]: svGhost,
        [TypeEnum.GRASS]: svGrass,
        [TypeEnum.GROUND]: svGround,
        [TypeEnum.ICE]: svIce,
        [TypeEnum.NORMAL]: svNormal,
        [TypeEnum.POISON]: svPoison,
        [TypeEnum.PSYCHIC]: svPsychic,
        [TypeEnum.ROCK]: svRock,
        [TypeEnum.STEEL]: svSteel,
        [TypeEnum.WATER]: svWater,
    }
}

interface TypeIconProps {
    type: TypeEnum;
    variant?: 'swSh' | 'sv';
    size?: string;
    className?: string;
}

function TypeIcon({
                      type,
                      variant = 'swSh',
                      size = '16px',
                      className = ''
                  }: TypeIconProps) {
    return (
        <img
            src={iconSets[variant][type]}
            alt={type}
            style={{ width: size, height: size }}
            className={className}
        />
    )
}

export default TypeIcon