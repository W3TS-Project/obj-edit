//@ts-nocheck

compiletime(() => {
  ObjEdit = {
    WeapsOn: {},
    DeathType: {},
    SpellDetail: {},
  }
  ObjEdit.WeapsOn.None = 0
  ObjEdit.WeapsOn[ObjEdit.WeapsOn.None] = 'None'
  ObjEdit.WeapsOn.OnlyAttackOne = 1
  ObjEdit.WeapsOn[ObjEdit.WeapsOn.OnlyAttackOne] = 'OnlyAttackOne'
  ObjEdit.WeapsOn.OnlyAttackTwo = 2
  ObjEdit.WeapsOn[ObjEdit.WeapsOn.OnlyAttackTwo] = 'OnlyAttackTwo'
  ObjEdit.WeapsOn.BothAttacks = 3
  ObjEdit.WeapsOn[ObjEdit.WeapsOn.BothAttacks] = 'BothAttacks'

  ObjEdit.DeathType.CannotRevive_NotDecompose = 0
  ObjEdit.DeathType[ObjEdit.DeathType.CannotRevive_NotDecompose] =
    'CannotRevive_NotDecompose'
  ObjEdit.DeathType.CanRevive_NotDecompose = 1
  ObjEdit.DeathType[ObjEdit.DeathType.CanRevive_NotDecompose] =
    'CanRevive_NotDecompose'
  ObjEdit.DeathType.CannotRevive_Decompose = 2
  ObjEdit.DeathType[ObjEdit.DeathType.CannotRevive_Decompose] =
    'CannotRevive_Decompose'
  ObjEdit.DeathType.CanRevive_Decompose = 3
  ObjEdit.DeathType[ObjEdit.DeathType.CanRevive_Decompose] =
    'CanRevive_Decompose'

  ObjEdit.unitDataOutputKeys = new Set([
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

  ObjEdit.SpellDetail.Low = 0
  ObjEdit.SpellDetail[ObjEdit.SpellDetail.Low] = 'Low'
  ObjEdit.SpellDetail.Medium = 1
  ObjEdit.SpellDetail[ObjEdit.SpellDetail.Medium] = 'Medium'
  ObjEdit.SpellDetail.High = 2
  ObjEdit.SpellDetail[ObjEdit.SpellDetail.High] = 'High'
})
