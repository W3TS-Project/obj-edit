namespace ObjEdit {
  type DecomposedID = {
    i1: integer
    i2: integer
    i3: integer
    i4: integer
  }

  export let divNum: (div: number, by: number) => number

  let decomposeID: (id: rawcode) => DecomposedID

  let isInvalidCharID: (char: integer) => boolean

  export let nextID: (ID: DecomposedID) => integer

  export let UNIT_ID_START: DecomposedID
  export let HERO_ID_START: DecomposedID
  export let ABIL_ID_START: DecomposedID
  export let BUFF_ID_START: DecomposedID
  export let ITEM_ID_START: DecomposedID
  export let UPGD_ID_START: DecomposedID

  export type LevelToArray<T extends Object> = (lvl: integer) => T[]

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

  export let nextDecomposedID: (ID: DecomposedID) => DecomposedID

  export let decomposedIDToRaw: (ID: DecomposedID) => integer

  export let decomposedIDToStr: (ID: DecomposedID) => string

  compiletime(() => {
    const refs: { name: string; id: string }[] = []

    divNum = (val: number, by: number) => (val - (val % by)) / by

    //@ts-ignore
    FourCC = (id: string): number => string.unpack('>I4', id)

    decomposeID = (id: rawcode): DecomposedID => {
      if (typeof id === 'string') id = FourCC(id)
      return {
        i1: id % 256,
        i2: divNum(id % 65536, 256),
        i3: divNum(id % 16777216, 65536),
        i4: divNum(id, 16777216),
      }
    }

    UNIT_ID_START = decomposeID('x000')
    HERO_ID_START = decomposeID('HM00')
    ABIL_ID_START = decomposeID('AM00')
    BUFF_ID_START = decomposeID('BM00')
    ITEM_ID_START = decomposeID('IM00')
    UPGD_ID_START = decomposeID('RM00')

    isInvalidCharID = (char: integer) => char < 48 || (char > 57 && char < 97)

    nextID = (ID: DecomposedID): integer => {
      let i1 = ID.i1
      let i2 = ID.i2
      let i3 = ID.i3
      let i4 = ID.i4
      const max_char = '~'.charCodeAt(0)
      const endChar = '!'.charCodeAt(0)
      if (i1 < max_char) {
        i1++
        while (isInvalidCharID(i1)) i1++
      } else if (i2 < max_char) {
        i1 = endChar
        i2++
        while (isInvalidCharID(i2)) i2++
      } else if (i3 < max_char) {
        i1 = endChar
        i2 = endChar
        i3++
        while (isInvalidCharID(i3)) i3++
      } else if (i4 < max_char) {
        i1 = endChar
        i2 = endChar
        i3 = endChar
        i4++
        while (isInvalidCharID(i4)) i4++
      } else {
        error('Переполнение ID разрядной сетки', 2)
      }
      let id = i1 + i2 * 256 + i3 * 65536 + i4 * 16777216
      return id
    }

    nextDecomposedID = (ID) => decomposeID(nextID(ID))

    decomposedIDToRaw = (ID) =>
      ID.i1 + ID.i2 * 256 + ID.i3 * 65536 + ID.i4 * 16777216

    // = unitDataOutputKeys

    const rawToStr = (id: rawcode) => {
      let result
      if (typeof id === 'number') result = string.pack('>I4', id)
      else result = id
      return result
    }

    decomposedIDToStr = (ID) => rawToStr(decomposedIDToRaw(ID))

    let generateObject = (
      key: 'unit' | 'item' | 'destructable' | 'doodad' | 'ability' | 'upgrade',
      data: any,
      excludeKeys: Set<any>
    ) => {
      const newObject = currentMap?.objects[key]
        .getObject(rawToStr(data.parentId))
        .clone()

      let metadata = {}

      for (const [key, value] of pairs(data)) {
        newObject!.setField(key as string, value as string | number | undefined)
        if (!excludeKeys.has(key)) {
          ;(metadata as any)[key] = value
        }
      }

      currentMap?.objects[key].setObject(rawToStr(data.id), newObject!)

      return metadata
    }

    generateUnit = <T extends UnitDataKey>(
      data: UnitDataInput,
      excludeKeys: Set<T>
    ): UnitDataOutput<T> =>
      generateObject('unit', data, excludeKeys) as UnitDataOutput<T>
    generateHero = <T extends HeroUnitDataKey>(
      data: HeroUnitDataInput,
      excludeKeys: Set<T>
    ): HeroUnitDataOutput<T> =>
      generateUnit(data, excludeKeys as Set<UnitDataKey>)
    generateItem = <T extends ItemDataKeys>(
      data: ItemDataInput,
      excludeKeys: Set<T>
    ): ItemDataOutput<T> =>
      generateObject('item', data, excludeKeys) as ItemDataOutput<T>
    generateDestructable = <T extends DestructableDataKeys>(
      data: DestructableDataInput,
      excludeKeys: Set<T>
    ): DestructableDataOutput<T> =>
      generateObject(
        'destructable',
        data,
        excludeKeys
      ) as DestructableDataOutput<T>
    generateDoodad = <T extends DoodadDataKeys>(
      data: DoodadDataInput,
      excludeKeys: Set<T>
    ): DoodadDataOutput<T> =>
      generateObject('doodad', data, excludeKeys) as DoodadDataOutput<T>
    generateAbility = <T extends AbilityDataKeys>(
      data: AbilityDataInput,
      excludeKeys: Set<T>
    ): AbilityDataOutput<T> =>
      generateObject('ability', data, excludeKeys) as AbilityDataOutput<T>
    generateHeroAbility = <T extends HeroAbilityDataKeys>(
      data: HeroAbilityDataInput,
      excludeKeys: Set<T>
    ): HeroAbilityDataOutput<T> =>
      generateAbility(data, excludeKeys as Set<AbilityDataKeys>)
    generateUpgrade = <T extends UpgradeDataKeys>(
      data: UpgradeDataInput,
      excludeKeys: Set<T>
    ): UpgradeDataOutput<T> =>
      generateObject('upgrade', data, excludeKeys) as UpgradeDataOutput<T>
  })
}
