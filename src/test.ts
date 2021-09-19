import { generateUnit, UNIT_ID_START } from "./objEdit"
import { UnitDataKey, UnitDataOutput } from "./typing/unit"


export let Footman = compiletime(() => {
    return generateUnit<UnitDataKey>({
        parentId: 'hfoo',
        id: UNIT_ID_START.next(),
        Name: "Custom Footman"
    }, new Set())
})
print(Footman.Name)