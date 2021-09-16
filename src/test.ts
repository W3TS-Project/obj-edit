namespace ObjEdit {
  export let Footman: UnitDataInput

  compiletime(() => {
      UNIT_ID_START = nextDecomposedID(UNIT_ID_START)
      Footman = generateUnit<UnitDataKey>({
          parentId: 'hfoo',
          id: decomposedIDToRaw(UNIT_ID_START),
          Name: "Custom Footman"
      }, new Set())
  })
}