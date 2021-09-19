//@ts-nocheck

compiletime(() => {
  FourCC = (id: string): number => string.unpack('>I4', id)[0]

  const divNum = (val: number, by: number) => (val - (val % by)) / by

  const rawToStr = (id: rawcode) => {
    let result
    if (typeof id === 'number') result = string.pack('>I4', id)
    else result = id
    return result
  }

  IdGenerator = class {
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

  UNIT_ID_START = new IdGenerator('x000')
  HERO_ID_START = new IdGenerator('HM00')
  ABIL_ID_START = new IdGenerator('AM00')
  BUFF_ID_START = new IdGenerator('BM00')
  ITEM_ID_START = new IdGenerator('IM00')
  UPGD_ID_START = new IdGenerator('RM00')

  WeapsOn = {}
  DeathType = {}
  SpellDetail = {}
  WeapsOn.None = 0
  WeapsOn[WeapsOn.None] = 'None'
  WeapsOn.OnlyAttackOne = 1
  WeapsOn[WeapsOn.OnlyAttackOne] = 'OnlyAttackOne'
  WeapsOn.OnlyAttackTwo = 2
  WeapsOn[WeapsOn.OnlyAttackTwo] = 'OnlyAttackTwo'
  WeapsOn.BothAttacks = 3
  WeapsOn[WeapsOn.BothAttacks] = 'BothAttacks'

  DeathType.CannotRevive_NotDecompose = 0
  DeathType[DeathType.CannotRevive_NotDecompose] =
    'CannotRevive_NotDecompose'
  DeathType.CanRevive_NotDecompose = 1
  DeathType[DeathType.CanRevive_NotDecompose] =
    'CanRevive_NotDecompose'
  DeathType.CannotRevive_Decompose = 2
  DeathType[DeathType.CannotRevive_Decompose] =
    'CannotRevive_Decompose'
  DeathType.CanRevive_Decompose = 3
  DeathType[DeathType.CanRevive_Decompose] =
    'CanRevive_Decompose'

  unitDataOutputKeys = new Set([
    'RngBuff1',
    'spillDist1',
    'showUI1',
    'Farea1',
    'Qarea1',
    'Harea1',
    'splashTargs1',
    'spillRadius1',
    'dmgUp1',
    'Qfact1',
    'Hfact1',
    'damageLoss1',
    'RngBuff2',
    'spillDist2',
    'showUI2',
    'Farea2',
    'Qarea2',
    'Harea2',
    'splashTargs2',
    'spillRadius2',
    'dmgUp2',
    'Qfact2',
    'Hfact2',
    'damageLoss2',
    'blend',
    'fatLOS',
    'elevRad',
    'elevPts',
    'impactZ',
    'impactSwimZ',
    'ScoreScreenIcon',
    'orientInterp',
    'occH',
    'customTeamColor',
    'propWin',
    'Attachmentlinkprops',
    'launchX',
    'launchY',
    'launchZ',
    'launchSwimZ',
    'Boneprops',
    'fogRad',
    'Casterupgradeart',
    'fileVerFlags',
    'maxSpd',
    'moveFloor',
    'minSpd',
    'LoopingSoundFadeOut',
    'LoopingSoundFadeIn',
    'RandomSoundLabel',
    'buffRadius',
    'buffType',
    'tilesetSpecific',
    'campaign',
    'special',
    'useClickHelper',
    'hostilePal',
    'inEditor',
    'tilesets',
    'EditorSuffix',
    'type',
    'prio',
  ])

  SpellDetail.Low = 0
  SpellDetail[SpellDetail.Low] = 'Low'
  SpellDetail.Medium = 1
  SpellDetail[SpellDetail.Medium] = 'Medium'
  SpellDetail.High = 2
  SpellDetail[SpellDetail.High] = 'High'

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
      if (key == 'id' || key == 'parentId') continue
      newObject[key] = value
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
