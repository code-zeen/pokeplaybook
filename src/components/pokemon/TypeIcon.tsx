import { TypeEnum } from "../../enum/pokemonEnum.ts";
import bug from '../../assets/Bug_icon_SwSh.png'
import dark from '../../assets/Dark_icon_SwSh.png'
import dragon from '../../assets/Dragon_icon_SwSh.png'
import electric from '../../assets/Electric_icon_SwSh.png'
import fairy from '../../assets/Fairy_icon_SwSh.png'
import fighting from '../../assets/Fighting_icon_SwSh.png'
import fire from '../../assets/Fire_icon_SwSh.png'
import flying from '../../assets/Flying_icon_SwSh.png'
import ghost from '../../assets/Ghost_icon_SwSh.png'
import grass from '../../assets/Grass_icon_SwSh.png'
import ground from '../../assets/Ground_icon_SwSh.png'
import ice from '../../assets/Ice_icon_SwSh.png'
import normal from '../../assets/Normal_icon_SwSh.png'
import poison from '../../assets/Poison_icon_SwSh.png'
import psychic from '../../assets/Psychic_icon_SwSh.png'
import rock from '../../assets/Rock_icon_SwSh.png'
import steel from '../../assets/Steel_icon_SwSh.png'
import water from '../../assets/Water_icon_SwSh.png'

interface TypeIconProps {
    type: TypeEnum
}

const typeIcons: Record<TypeEnum, string> = {
    [TypeEnum.BUG]: bug,
    [TypeEnum.DARK]: dark,
    [TypeEnum.DRAGON]: dragon,
    [TypeEnum.ELECTRIC]: electric,
    [TypeEnum.FAIRY]: fairy,
    [TypeEnum.FIGHTING]: fighting,
    [TypeEnum.FIRE]: fire,
    [TypeEnum.FLYING]: flying,
    [TypeEnum.GHOST]: ghost,
    [TypeEnum.GRASS]: grass,
    [TypeEnum.GROUND]: ground,
    [TypeEnum.ICE]: ice,
    [TypeEnum.NORMAL]: normal,
    [TypeEnum.POISON]: poison,
    [TypeEnum.PSYCHIC]: psychic,
    [TypeEnum.ROCK]: rock,
    [TypeEnum.STEEL]: steel,
    [TypeEnum.WATER]: water,
}

function TypeIcon ({ type }: TypeIconProps) {
    return (
        <img src={typeIcons[type]} alt={type} />
    )
}

export default TypeIcon