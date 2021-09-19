import {
  AbilityDataInput,
  AbilityDataKeys,
  AbilityDataOutput,
  HeroAbilityDataInput,
  HeroAbilityDataKeys,
  HeroAbilityDataOutput,
} from './typing/ability'
import {
  DestructableDataInput,
  DestructableDataKeys,
  DestructableDataOutput,
} from './typing/destructable'
import {
  DoodadDataInput,
  DoodadDataKeys,
  DoodadDataOutput,
} from './typing/doodad'
import { ItemDataInput, ItemDataKeys, ItemDataOutput } from './typing/item'
import {
  HeroUnitDataInput,
  HeroUnitDataKey,
  HeroUnitDataOutput,
  UnitDataInput,
  UnitDataKey,
  UnitDataOutput,
} from './typing/unit'
import {
  UpgradeDataInput,
  UpgradeDataKeys,
  UpgradeDataOutput,
} from './typing/upgrade'

export const divNum = (val: number, by: number) => (val - (val % by)) / by

export const rawToStr = (id: rawcode) => {
  let result
  if (typeof id === 'number') result = string.pack('>I4', id)
  else result = id
  return result
}

export class IdGenerator {
  private i1: integer
  private i2: integer
  private i3: integer
  private i4: integer

  constructor(start: rawcode) {
    if (typeof start === 'string') start = FourCC(start)
    this.i1 = start % 256
    this.i2 = divNum(start % 65536, 256)
    this.i3 = divNum(start % 16777216, 65536)
    this.i4 = divNum(start, 16777216)
  }

  isInvalid(char: integer) {
    return char < 48 || (char > 57 && char < 97)
  }

  next() {
    const max_char = '~'.charCodeAt(0)
    const endChar = '!'.charCodeAt(0)
    if (this.i1 < max_char) {
      this.i1++
      while (this.isInvalid(this.i1)) this.i1++
    } else if (this.i2 < max_char) {
      this.i1 = endChar
      this.i2++
      while (this.isInvalid(this.i2)) this.i2++
    } else if (this.i3 < max_char) {
      this.i1 = endChar
      this.i2 = endChar
      this.i3++
      while (this.isInvalid(this.i3)) this.i3++
    } else if (this.i4 < max_char) {
      this.i1 = endChar
      this.i2 = endChar
      this.i3 = endChar
      this.i4++
      while (this.isInvalid(this.i4)) this.i4++
    } else {
      error('Переполнение ID разрядной сетки', 2)
    }
    let id = this.i1 + this.i2 * 256 + this.i3 * 65536 + this.i4 * 16777216
    return rawToStr(id)
  }
}

export const UNIT_ID_START = new IdGenerator('x000')
export const HERO_ID_START = new IdGenerator('HM00')
export const ABIL_ID_START = new IdGenerator('AM00')
export const BUFF_ID_START = new IdGenerator('BM00')
export const ITEM_ID_START = new IdGenerator('IM00')
export const UPGD_ID_START = new IdGenerator('RM00')

export let generateUnit: <T extends UnitDataKey>(
  data: UnitDataInput,
  excludeKeys: Set<T>
) => UnitDataOutput<T>

export let generateHero: <T extends HeroUnitDataKey>(
  data: HeroUnitDataInput,
  excludeKeys: Set<T>
) => HeroUnitDataOutput<T>

export let generateItem: <T extends ItemDataKeys>(
  data: ItemDataInput,
  excludeKeys: Set<T>
) => ItemDataOutput<T>

export let generateDestructable: <T extends DestructableDataKeys>(
  data: DestructableDataInput,
  excludeKeys: Set<T>
) => DestructableDataOutput<T>

export let generateDoodad: <T extends DoodadDataKeys>(
  data: DoodadDataInput,
  excludeKeys: Set<T>
) => DoodadDataOutput<T>

export let generateAbility: <T extends AbilityDataKeys>(
  data: AbilityDataInput,
  excludeKeys: Set<T>
) => AbilityDataOutput<T>

export let generateHeroAbility: <T extends HeroAbilityDataKeys>(
  data: HeroAbilityDataInput,
  excludeKeys: Set<T>
) => HeroAbilityDataOutput<T>

export let generateUpgrade: <T extends UpgradeDataKeys>(
  data: UpgradeDataInput,
  excludeKeys: Set<T>
) => UpgradeDataOutput<T>