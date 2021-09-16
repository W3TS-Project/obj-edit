// type UnitDataFieldsPart1 = (
//     | {
//           /**
//            * Бой - Атака 1 - анимация снаряда
//            */
//           Missileart: string
//       }
//     | {
//           ua1m: string
//       }
// ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - анимация точки обратного хода
//                */
//               backSw1: real
//           }
//         | {
//               /**
//                * Бой - Атака 1 - анимация точки обратного хода
//                */
//               ubs1: real
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - анимация точки повреждения
//                */
//               dmgpt1: real
//           }
//         | {
//               /**
//                * Бой - Атака 1 - анимация точки повреждения
//                */
//               udp1: real
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - базовый урон
//                */
//               dmgplus1: integer
//           }
//         | {
//               /**
//                * Бой - Атака 1 - базовый урон
//                */
//               ua1b: integer
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - буфер области движения
//                */
//               RngBuff1: real
//           }
//         | {
//               /**
//                * Бой - Атака 1 - буфер области движения
//                */
//               urb1: real
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - включено автонаведение
//                */
//               MssileHoming: boolean
//           }
//         | {
//               /**
//                * Бой - Атака 1 - включено автонаведение
//                */
//               umh1: boolean
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - время перезарядки
//                */
//               cool1: real
//           }
//         | {
//               /**
//                * Бой - Атака 1 - время перезарядки
//                */
//               ua1c: real
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - дальность
//                */
//               rangeN1: integer
//           }
//         | {
//               /**
//                * Бой - Атака 1 - дальность
//                */
//               ua1r: integer
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - дистанция разброса при уроне
//                */
//               spillDist1: real
//           }
//         | {
//               /**
//                * Бой - Атака 1 - дистанция разброса при уроне
//                */
//               usd1: real
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - допустимые цели
//                */
//               targs1: string
//           }
//         | {
//               /**
//                * Бой - Атака 1 - допустимые цели
//                */
//               ua1g: string
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - звук оружия
//                */
//               weapType1: string
//           }
//         | {
//               /**
//                * Бой - Атака 1 - звук оружия
//                */
//               ucs1: string
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - максимальное количество целей
//                */
//               targCount1: integer
//           }
//         | {
//               /**
//                * Бой - Атака 1 - максимальное количество целей
//                */
//               utc1: integer
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - показать UI
//                */
//               showUI1: boolean
//           }
//         | {
//               /**
//                * Бой - Атака 1 - показать UI
//                */
//               uwu1: boolean
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - радиус поражения (макс. урон)
//                */
//               Farea1: integer
//           }
//         | {
//               /**
//                * Бой - Атака 1 - радиус поражения (макс. урон)
//                */
//               ua1f: integer
//           }
//     )

// type UnitDataFieldsPart2 = (
//     | {
//           /**
//            * Бой - Атака 1 - радиус поражения (мал. урон)
//            */
//           Qarea1: integer
//       }
//     | {
//           /**
//            * Бой - Атака 1 - радиус поражения (мал. урон)
//            */
//           ua1q: integer
//       }
// ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - радиус поражения (сред. урон)
//                */
//               Harea1: integer
//           }
//         | {
//               /**
//                * Бой - Атака 1 - радиус поражения (сред. урон)
//                */
//               ua1h: integer
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - радиус поражения (цели)
//                */
//               splashTargs1: string
//           }
//         | {
//               /**
//                * Бой - Атака 1 - радиус поражения (цели)
//                */
//               ua1p: string
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - радиус разброса при уроне
//                */
//               spillRadius: real
//           }
//         | {
//               /**
//                * Бой - Атака 1 - радиус разброса при уроне
//                */
//               usr1: real
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - скорость снаряда
//                */
//               Missilespeed: integer
//           }
//         | {
//               /**
//                * Бой - Атака 1 - скорость снаряда
//                */
//               ua1z: integer
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - тип атаки
//                */
//               atkType1: string
//           }
//         | {
//               /**
//                * Бой - Атака 1 - тип атаки
//                */
//               ua1t: string
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - тип оружия
//                */
//               weapTp1: string
//           }
//         | {
//               /**
//                * Бой - Атака 1 - тип оружия
//                */
//               ua1w: string
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - траектория полета снаряда
//                */
//               Missilearc: real
//           }
//         | {
//               /**
//                * Бой - Атака 1 - траектория полета снаряда
//                */
//               uma1: real
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - урон (эффект от улучшения)
//                */
//               dmgUp1: integer
//           }
//         | {
//               /**
//                * Бой - Атака 1 - урон (эффект от улучшения)
//                */
//               udu1: integer
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - урон вблизи
//                */
//               Qfact1: real
//           }
//         | {
//               /**
//                * Бой - Атака 1 - урон вблизи
//                */
//               uqd1: real
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - урон на средней дистанции
//                */
//               Hfact1: real
//           }
//         | {
//               /**
//                * Бой - Атака 1 - урон на средней дистанции
//                */
//               uhd1: real
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - урон: количество граней у кости
//                */
//               sides1: integer
//           }
//         | {
//               /**
//                * Бой - Атака 1 - урон: количество граней у кости
//                */
//               ua1s: integer
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - урон: количество костей
//                */
//               dice1: integer
//           }
//         | {
//               /**
//                * Бой - Атака 1 - урон: количество костей
//                */
//               ua1d: integer
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 1 - фактор потери урона
//                */
//               damageLoss1: real
//           }
//         | {
//               /**
//                * Бой - Атака 1 - фатокр потери урона
//                */
//               udl1: real
//           }
//     ) & {
//         /**
//          * Бой - Атака 2 - анимация дистанционной атаки
//          */
//         ua2m: string
//     }

// type UnitDataInputPart3 = (
//     | {
//           /**
//            * Бой - Атака 2 - анимация точки обратного хода
//            */
//           backSw2: real
//       }
//     | {
//           /**
//            * Бой - Атака 2 - анимация точки обратного хода
//            */
//           ubs2: real
//       }
// ) &
//     (
//         | {
//               /**
//                * Бой - Атака 2 - анимация точки повреждения
//                */
//               dmgpt2: real
//           }
//         | {
//               /**
//                * Бой - Атака 2 - анимация точки повреждения
//                */
//               udp2: real
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 2 - базовый урон
//                */
//               dmgplus2: integer
//           }
//         | {
//               /**
//                * Бой - Атака 2 - базовый урон
//                */
//               ua2b: integer
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 2 - буфер области движения
//                */
//               RngBuff2: real
//           }
//         | {
//               /**
//                * Бой - Атака 2 - буфер области движения
//                */
//               urb2: real
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 2 - включено автонаведение
//                */
//               MissileHoming: boolean
//           }
//         | {
//               /**
//                * Бой - Атака 2 - включено автонаведение
//                */
//               umh2: boolean
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 2 - время перезарядки
//                */
//               cool2: real
//           }
//         | {
//               /**
//                * Бой - Атака 2 - время перезарядки
//                */
//               ua2c: real
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 2 - дальность
//                */
//               rangeN2: integer
//           }
//         | {
//               /**
//                * Бой - Атака 2 - дальность
//                */
//               ua2r: integer
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 2 - дистанция разброса при уроне
//                */
//               spellDist2: real
//           }
//         | {
//               /**
//                * Бой - Атака 2 - дистанция разброса при уроне
//                */
//               usd2: real
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 2 - допустимые цели
//                */
//               targs2: string
//           }
//         | {
//               /**
//                * Бой - Атака 2 - допустимые цели
//                */
//               ua2g: string
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 2 - звуки оружия
//                */
//               weapType2: string
//           }
//         | {
//               /**
//                * Бой - Атака 2 - звуки оружия
//                */
//               ucs2: string
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 2 - максимальное количество целей
//                */
//               targCount2: integer
//           }
//         | {
//               /**
//                * Бой - Атака 2 - максимальное количество целей
//                */
//               utc2: integer
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 2 - показать UI
//                */
//               showUI2: boolean
//           }
//         | {
//               /**
//                * Бой - Атака 2 - показать UI
//                */
//               uwu2: boolean
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 2 - радиус поражения (макс. урон)
//                */
//               Farea2: integer
//           }
//         | {
//               /**
//                * Бой - Атака 2 - радиус поражения (макс. урон)
//                */
//               ua2f: integer
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 2 - радиус поражения (мал. урон)
//                */
//               Qarea2: integer
//           }
//         | {
//               /**
//                * Бой - Атака 2 - радиус поражения (мал. урон)
//                */
//               ua2q: integer
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 2 - радиус поражения (сред. урон)
//                */
//               Harea2: integer
//           }
//         | {
//               /**
//                * Бой - Атака 2 - радиус поражения (сред. урон)
//                */
//               ua2h: integer
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 2 - радиус поражения (цели)
//                */
//               splashTargs2: string
//           }
//         | {
//               /**
//                * Бой - Атака 2 - радиус поражения (цели)
//                */
//               ua2p: string
//           }
//     )

// type UnitDataInputPart4 = (
//     | {
//           /**
//            * Бой - Атака 2 - радиус разброса при уроне
//            */
//           spillRadius2: real
//       }
//     | {
//           /**
//            * Бой - Атака 2 - радиус разброса при уроне
//            */
//           usr2: real
//       }
// ) &
//     (
//         | {
//               /**
//                * Бой - Атака 2 - скорость снаряда
//                */
//               Missilespeed: integer
//           }
//         | {
//               /**
//                * Бой - Атака 2 - скорость снаряда
//                */
//               ua2z: integer
//           }
//     ) &
//     (
//         | {
//               /**
//                * Бой - Атака 2 - тип атаки
//                */
//               atkType2: string
//           }
//         | {
//               /**
//                * Бой - Атака 2 - тип атаки
//                */
//               ua2t: string
//           }
//     ) &
//     (
//         | {
//               weapTp2: string
//           }
//         | {
//               ua2w: string
//           }
//     ) &
//     (
//         | {
//               Missilearc: real
//           }
//         | {
//               uma2: real
//           }
//     ) &
//     (
//         | {
//               dmgUp2: integer
//           }
//         | {
//               udu2: integer
//           }
//     ) &
//     (
//         | {
//               Qfact2: real
//           }
//         | {
//               uqd2: real
//           }
//     ) &
//     (
//         | {
//               Hfact2: real
//           }
//         | {
//               uhd2: real
//           }
//     ) &
//     (
//         | {
//               sides2: integer
//           }
//         | {
//               ua2s: integer
//           }
//     ) &
//     (
//         | {
//               dice2: integer
//           }
//         | {
//               ua2d: integer
//           }
//     ) &
//     (
//         | {
//               damageLoss2: real
//           }
//         | {
//               udl2: real
//           }
//     ) &
//     (
//         | {
//               WeapsOn: integer
//           }
//         | {
//               uaen: integer
//           }
//     ) &
//     (
//         | {
//               acquire: real
//           }
//         | {
//               uacq: real
//           }
//     ) &
//     (
//         | {
//               def: integer
//           }
//         | {
//               udef: integer
//           }
//     ) &
//     (
//         | {
//               minRange: integer
//           }
//         | {
//               uamn: integer
//           }
//     ) &
//     (
//         | {
//               targType: string
//           }
//         | {
//               utar: string
//           }
//     )

// type UnitDataInputPart5 = (
//     | {
//           defUp: integer
//       }
//     | {
//           udup: integer
//       }
// ) &
//     (
//         | {
//               armor: string
//           }
//         | {
//               uarm: string
//           }
//     ) &
//     (
//         | {
//               defType: string
//           }
//         | {
//               udty: string
//           }
//     ) &
//     (
//         | {
//               DeathType: integer
//           }
//         | {
//               udea: integer
//           }
//     ) &
//     (
//         | {
//               blend: real
//           }
//         | {
//               uble: real
//           }
//     ) &
//     (
//         | {
//               castbsw: real
//           }
//         | {
//               ucbs: real
//           }
//     ) &
//     (
//         | {
//               run: real
//           }
//         | {
//               urun: real
//           }
//     ) &
//     (
//         | {
//               walk: real
//           }
//         | {
//               uwal: real
//           }
//     ) &
//     (
//         | {
//               castpt: real
//           }
//         | {
//               ucpt: real
//           }
//     ) &
//     (
//         | {
//               death: real
//           }
//         | {
//               udtm: real
//           }
//     ) &
//     (
//         | {
//               selZ: real
//           }
//         | {
//               uslz: real
//           }
//     ) &
//     (
//         | {
//               fatLOS: boolean
//           }
//         | {
//               ulos: boolean
//           }
//     ) &
//     (
//         | {
//               selCircOnWater: boolean
//           }
//         | {
//               usew: boolean
//           }
//     ) &
//     (
//         | {
//               maxPitch: real
//           }
//         | {
//               umxp: real
//           }
//     ) &
//     (
//         | {
//               maxRoll: real
//           }
//         | {
//               umxr: real
//           }
//     ) &
//     (
//         | {
//               modelScale: real
//           }
//         | {
//               usca: real
//           }
//     )

// type UnitDataInputPart6 = (
//     | {
//           scaleBull: boolean
//       }
//     | {
//           uscb: boolean
//       }
// ) &
//     (
//         | {
//               elevRad: real
//           }
//         | {
//               uerd: real
//           }
//     ) &
//     (
//         | {
//               elevPts: integer
//           }
//         | {
//               uept: integer
//           }
//     ) &
//     (
//         | {
//               animProps: string
//           }
//         | {
//               uani: string
//           }
//     ) &
//     (
//         | {
//               Attachmentanimprops: string
//           }
//         | {
//               uaap: string
//           }
//     ) &
//     (
//         | {
//               Specialart: string
//           }
//         | {
//               uspa: string
//           }
//     ) &
//     (
//         | {
//               unitShadow: string
//           }
//         | {
//               ushu: string
//           }
//     ) &
//     (
//         | {
//               shadowH: real
//           }
//         | {
//               ushh: real
//           }
//     ) &
//     (
//         | {
//               shadowX: real
//           }
//         | {
//               ushx: real
//           }
//     ) &
//     (
//         | {
//               shadowY: real
//           }
//         | {
//               ushy: real
//           }
//     ) &
//     (
//         | {
//               shadowW: real
//           }
//         | {
//               ushw: real
//           }
//     ) &
//     (
//         | {
//               impactZ: real
//           }
//         | {
//               uimz: real
//           }
//     ) &
//     (
//         | {
//               impactSwimZ: real
//           }
//         | {
//               uisz: real
//           }
//     ) &
//     (
//         | {
//               Art: string
//           }
//         | {
//               uico: string
//           }
//     ) &
//     (
//         | {
//               ScoreScreenIcon: string
//           }
//         | {
//               ussi: string
//           }
//     ) &
//     (
//         | {
//               orientInterp: integer
//           }
//         | {
//               uori: integer
//           }
//     )

// type UnitDataInputPart7 = (
//     | {
//           Buttonpos: integer
//       }
//     | {
//           ubpx: integer
//       }
// ) & {
//     ubpy: integer
// } & (
//         | {
//               occH: real
//           }
//         | {
//               uocc: real
//           }
//     ) &
//     (
//         | {
//               customTeamColor: boolean
//           }
//         | {
//               utcc: boolean
//           }
//     ) &
//     (
//         | {
//               propWin: real
//           }
//         | {
//               uprw: real
//           }
//     ) &
//     (
//         | {
//               Attachmentlinkprops: string
//           }
//         | {
//               ualp: string
//           }
//     ) &
//     (
//         | {
//               buildingShadow: string
//           }
//         | {
//               ushb: string
//           }
//     ) &
//     (
//         | {
//               shadowOnWater: boolean
//           }
//         | {
//               ushr: boolean
//           }
//     ) &
//     (
//         | {
//               launchX: real
//           }
//         | {
//               ulpx: real
//           }
//     ) &
//     (
//         | {
//               launchY: real
//           }
//         | {
//               ulpy: real
//           }
//     ) &
//     (
//         | {
//               launchZ: real
//           }
//         | {
//               ulpz: real
//           }
//     ) &
//     (
//         | {
//               launchSwimZ: real
//           }
//         | {
//               ulsz: real
//           }
//     ) &
//     (
//         | {
//               Boneprops: string
//           }
//         | {
//               ubpr: string
//           }
//     ) &
//     (
//         | {
//               fogRad: real
//           }
//         | {
//               ufrd: real
//           }
//     ) &
//     (
//         | {
//               Casterupgardeart: string
//           }
//         | {
//               ucua: string
//           }
//     ) &
//     (
//         | {
//               file: string
//           }
//         | {
//               umdl: string
//           }
//     )

// type UnitDataInputPart8 = (
//     | {
//           fileVerFlags: integer
//       }
//     | {
//           uver: integer
//       }
// ) &
//     (
//         | {
//               red: integer
//           }
//         | {
//               uclr: integer
//           }
//     ) &
//     (
//         | {
//               green: integer
//           }
//         | {
//               uclg: integer
//           }
//     ) &
//     (
//         | {
//               blue: integer
//           }
//         | {
//               uclb: integer
//           }
//     ) &
//     (
//         | {
//               teamColor: integer
//           }
//         | {
//               utco: integer
//           }
//     ) &
//     (
//         | {
//               Targetart: string
//           }
//         | {
//               utaa: string
//           }
//     ) &
//     (
//         | {
//               scale: real
//           }
//         | {
//               ussc: real
//           }
//     ) &
//     (
//         | {
//               spd: integer
//           }
//         | {
//               umvs: integer
//           }
//     ) &
//     (
//         | {
//               moveHeight: real
//           }
//         | {
//               umvh: real
//           }
//     ) &
//     (
//         | {
//               maxSpd: integer
//           }
//         | {
//               umas: integer
//           }
//     ) &
//     (
//         | {
//               moveFloor: real
//           }
//         | {
//               umvf: real
//           }
//     ) &
//     (
//         | {
//               minSpd: integer
//           }
//         | {
//               umis: integer
//           }
//     ) &
//     (
//         | {
//               repulse: boolean
//           }
//         | {
//               urpo: boolean
//           }
//     ) &
//     (
//         | {
//               repulseGroup: integer
//           }
//         | {
//               urpg: integer
//           }
//     ) &
//     (
//         | {
//               repulseParam: integer
//           }
//         | {
//               urpp: integer
//           }
//     ) &
//     (
//         | {
//               repulsePrio: integer
//           }
//         | {
//               urpr: integer
//           }
//     )

// type UnitDataInputPart9 = (
//     | {
//           turnRate: real
//       }
//     | {
//           umvr: real
//       }
// ) &
//     (
//         | {
//               movetp: string
//           }
//         | {
//               umvt: string
//           }
//     ) &
//     (
//         | {
//               MovementSoundLabel: string
//           }
//         | {
//               umsl: string
//           }
//     ) &
//     (
//         | {
//               unitSound: string
//           }
//         | {
//               usnd: string
//           }
//     ) &
//     (
//         | {
//               LoopingSoundFadeOut: integer
//           }
//         | {
//               ulfo: integer
//           }
//     ) &
//     (
//         | {
//               LoopingSoundFadeIn: integer
//           }
//         | {
//               ulfi: integer
//           }
//     ) &
//     (
//         | {
//               RandomSoundLabel: string
//           }
//         | {
//               ursl: string
//           }
//     ) &
//     (
//         | {
//               buffRadius: real
//           }
//         | {
//               uabr: real
//           }
//     ) &
//     (
//         | {
//               buffType: string
//           }
//         | {
//               uabt: string
//           }
//     ) &
//     (
//         | {
//               collision: real
//           }
//         | {
//               ucol: real
//           }
//     ) &
//     (
//         | {
//               tilesetSpecific: boolean
//           }
//         | {
//               utss: boolean
//           }
//     ) &
//     (
//         | {
//               campaign: boolean
//           }
//         | {
//               ucam: boolean
//           }
//     ) &
//     (
//         | {
//               special: boolean
//           }
//         | {
//               uspe: boolean
//           }
//     ) &
//     (
//         | {
//               useClickHelper: boolean
//           }
//         | {
//               uuch: boolean
//           }
//     ) &
//     (
//         | {
//               hostilePal: boolean
//           }
//         | {
//               uhos: boolean
//           }
//     ) &
//     (
//         | {
//               dropItems: boolean
//           }
//         | {
//               udro: boolean
//           }
//     )

// type UnitDataInputPart10 = (
//     | {
//           inEditor: boolean
//       }
//     | {
//           uine: boolean
//       }
// ) &
//     (
//         | {
//               tilesets: string
//           }
//         | {
//               util: string
//           }
//     ) &
//     (
//         | {
//               abilList: string
//           }
//         | {
//               uabi: string
//           }
//     ) &
//     (
//         | {
//               auto: string
//           }
//         | {
//               udaa: string
//           }
//     ) &
//     (
//         | {
//               Hotkey: string
//           }
//         | {
//               uhot: string
//           }
//     ) &
//     (
//         | {
//               Name: string
//           }
//         | {
//               unam: string
//           }
//     ) &
//     (
//         | {
//               EditorSuffix: string
//           }
//         | {
//               unsf: string
//           }
//     ) &
//     (
//         | {
//               Description: string
//           }
//         | {
//               ides: string
//           }
//     ) &
//     (
//         | {
//               Tip: string
//           }
//         | {
//               utip: string
//           }
//     ) &
//     (
//         | {
//               Ubertip: string
//           }
//         | {
//               utub: string
//           }
//     ) &
//     (
//         | {
//               Casterupgradename: string
//           }
//         | {
//               ucun: string
//           }
//     ) &
//     (
//         | {
//               Casterupgradetip: string
//           }
//         | {
//               ucut: string
//           }
//     ) &
//     (
//         | {
//               DependencyOr: string
//           }
//         | {
//               udep: string
//           }
//     ) &
//     (
//         | {
//               Sellunits: string
//           }
//         | {
//               useu: string
//           }
//     ) &
//     (
//         | {
//               Builds: string
//           }
//         | {
//               ubui: string
//           }
//     ) &
//     (
//         | {
//               Sellitems: string
//           }
//         | {
//               usei: string
//           }
//     )

// type UnitDataInputPart11 = (
//     | {
//           Requires: string
//       }
//     | {
//           ureq: string
//       }
// ) &
//     (
//         | {
//               Requiresamount: string
//           }
//         | {
//               urqa: string
//           }
//     ) &
//     (
//         | {
//               upgrades: string
//           }
//         | {
//               upgr: string
//           }
//     ) &
//     (
//         | {
//               stockInitial: integer
//           }
//         | {
//               usit: integer
//           }
//     ) &
//     (
//         | {
//               regenMana: real
//           }
//         | {
//               umpr: real
//           }
//     ) &
//     (
//         | {
//               reptm: integer
//           }
//         | {
//               urtm: integer
//           }
//     ) &
//     (
//         | {
//               bldtm: integer
//           }
//         | {
//               ubld: integer
//           }
//     ) &
//     (
//         | {
//               stockStart: integer
//           }
//         | {
//               usst: integer
//           }
//     ) &
//     (
//         | {
//               mana0: integer
//           }
//         | {
//               umpi: integer
//           }
//     ) &
//     (
//         | {
//               stockRegen: integer
//           }
//         | {
//               usrg: integer
//           }
//     ) &
//     (
//         | {
//               type: string
//           }
//         | {
//               utyp: string
//           }
//     ) &
//     (
//         | {
//               stockMax: integer
//           }
//         | {
//               usma: integer
//           }
//     ) &
//     (
//         | {
//               HP: integer
//           }
//         | {
//               uhpm: integer
//           }
//     ) &
//     (
//         | {
//               manaN: integer
//           }
//         | {
//               umpm: integer
//           }
//     ) &
//     (
//         | {
//               cargoSize: integer
//           }
//         | {
//               ucar: integer
//           }
//     ) &
//     (
//         | {
//               canFlee: boolean
//           }
//         | {
//               ufle: boolean
//           }
//     )

// type UnitDataInputPart12 = (
//     | {
//           bountyplus: integer
//       }
//     | {
//           ubba: integer
//       }
// ) &
//     (
//         | {
//               bountysides: integer
//           }
//         | {
//               ubsi: integer
//           }
//     ) &
//     (
//         | {
//               bountydice: integer
//           }
//         | {
//               ubdi: integer
//           }
//     ) &
//     (
//         | {
//               points: integer
//           }
//         | {
//               upoi: integer
//           }
//     ) &
//     (
//         | {
//               formation: integer
//           }
//         | {
//               ufor: integer
//           }
//     ) &
//     (
//         | {
//               lumberbountyplus: integer
//           }
//         | {
//               ulba: integer
//           }
//     ) &
//     (
//         | {
//               lumberbountysides: integer
//           }
//         | {
//               ulbs: integer
//           }
//     ) &
//     (
//         | {
//               lumberbountydice: integer
//           }
//         | {
//               ulbd: integer
//           }
//     ) &
//     (
//         | {
//               prio: integer
//           }
//         | {
//               upri: integer
//           }
//     ) &
//     (
//         | {
//               fmade: integer
//           }
//         | {
//               ufma: integer
//           }
//     ) &
//     (
//         | {
//               sight: integer
//           }
//         | {
//               usid: integer
//           }
//     ) &
//     (
//         | {
//               nsight: integer
//           }
//         | {
//               usin: integer
//           }
//     ) &
//     (
//         | {
//               race: string
//           }
//         | {
//               urac: string
//           }
//     ) &
//     (
//         | {
//               regenHP: real
//           }
//         | {
//               uhpr: real
//           }
//     ) &
//     (
//         | {
//               hideOnMinimap: boolean
//           }
//         | {
//               uhom: boolean
//           }
//     ) &
//     (
//         | {
//               canSleep: boolean
//           }
//         | {
//               usle: boolean
//           }
//     )

// type UnitDataInputPart13 = (
//     | {
//           RegenType: string
//       }
//     | {
//           uhrt: string
//       }
// ) &
//     (
//         | {
//               lumbercost: integer
//           }
//         | {
//               ulum: integer
//           }
//     ) &
//     (
//         | {
//               lumberRep: integer
//           }
//         | {
//               ulur: integer
//           }
//     ) &
//     (
//         | {
//               goldcost: integer
//           }
//         | {
//               ugol: integer
//           }
//     ) &
//     (
//         | {
//               goldRep: integer
//           }
//         | {
//               ugor: integer
//           }
//     ) &
//     (
//         | {
//               fused: integer
//           }
//         | {
//               ufoo: integer
//           }
//     ) &
//     (
//         | {
//               level: integer
//           }
//         | {
//               ulev: integer
//           }
//     ) &
//     (
//         | {
//               isbldq: boolean
//           }
//         | {
//               ubdq: boolean
//           }
//     )

namespace ObjEdit {
    export type List<T extends any> = T[] | T

    export type StringList = List<string>
    export type RealList = List<real>
    export type IntegerList = List<integer>

    /**
     * Положение кнопки по X
     */
    export type ButtonPosX = 0 | 1 | 2 | 3

    /**
     * Положение кнопки по Y
     */
    export type ButtonPosY = 0 | 1 | 2

    /**
     * Тип движения
     * Нет = ""
     * Пеший - foot
     * Конный - horse
     * Летающий - fly
     * Парящий - hover
     * Плывущий - float
     * Земноводный - amph
     */
    export type MovementType = "" | "foot" | "horse" | "fly" | "hover" | "float" | "amph"

    /**
     * Тип цели
     * Воздушные = air
     * Войска игрока = player
     * Враги = enemies
     * Герои = hero
     * Декорации = decoration
     * Деревья = tree
     * Древа = ancient
     * Друзья = friend
     * Духи = ward
     * Живые = alive
     * Здания = structure
     * Мертвые = dead
     * Механизмы = mechanical
     * Мосты = bridge
     * Наземные = ground
     * Не Древа = nonancient
     * Не герои = nonhero
     * Не сам воин = notself
     * Не самоубийцы = nonsapper
     * Нейтральные = neutral
     * Нет = none
     * Неуязвимые = invulnerable
     * Организмы = organic
     * Предметы = item
     * Прочее = debris
     * Рельеф = terrain
     * Сам воин = self
     * Самоубийцы = sapper
     * Союзники = allies
     * Стены = wall
     * Уязвимые = vulnerable
     */
    export type TargetType = (
        | "air"
        | "player"
        | "enemies"
        | "hero"
        | "decoration"
        | "tree"
        | "ancient"
        | "friend"
        | "ward"
        | "alive"
        | "structure"
        | "dead"
        | "mechanical"
        | "bridge"
        | "ground"
        | "nonancient"
        | "nonhero"
        | "notself"
        | "nonsapper"
        | "neutral"
        | "none"
        | "invulnerable"
        | "organic"
        | "item"
        | "debris"
        | "terrain"
        | "self"
        | "sapper"
        | "allies"
        | "wall"
        | "vulnerable"
    )[]

    /**
     * Звук оружия
     * Нет = ""
     * Легкий деревянный удар = WoodLightBash
     * Легкий металлический удар (режущий) = MetalLightSlice
     * Легкий металлический удар (рубящий) = MetalLightChop
     * Средний деревянный удар = WoodMediumBash
     * Средний металлический удар = MetalMediumBash
     * Средний металлический удар (режущий) = MetalMediumSlice
     * Средний металлический удар (рубящий) = MetalMediumChop
     * Средний удар топором (рубящий) = AxeMediumChop
     * Тяжелый деревянный удар = WoodHeavyBash
     * Тяжелый каменный удар = RockHeavyBash
     * Тяжелый металлический удар = MetalHeavyBash
     * Тяжелый металлический удар (режущий) = MetalHeavySlice
     * Тяжелый металлический удар (рубящий) = MetalHeavyChop
     */
    export type WeaponSound =
        | "WoodLightBash"
        | "MetalLightSlice"
        | "MetalLightChop"
        | "WoodMediumBash"
        | "MetalMediumBash"
        | "MetalMediumSlice"
        | "MetalMediumChop"
        | "AxeMediumChop"
        | "WoodHeavyBash"
        | "RockHeavyBash"
        | "MetalHeavyBash"
        | "MetalHeavySlice"
        | "MetalHeavyChop"

    /**
     * Тип атаки
     * Нет = unknown
     * Обычная = normal
     * Дальний бой = pierce
     * Артиллерия = siege
     * Заклинание = spells
     * Сила Тьмы = chaos
     * Магическая = magic
     * Герой = hero
     */
    export type AttackType =
        | "unknown"
        | "normal"
        | "pierce"
        | "siege"
        | "spells"
        | "chaos"
        | "magic"
        | "hero"

    /**
     * Тип оружия
     * Нет = ""
     * Обычное = normal
     * Мгновенное = instant
     * Артиллерия = artillery
     * Артиллерия (прямолинейный полет) = aline
     * Дальний бой = missile
     * Снаряд (взрыв) = msplash
     * Снаряд (рикошет) = mbounce
     * Снаряд (прямолинейный полет) = mline
     */
    export type WeaponType =
        | ""
        | "normal"
        | "instant"
        | "artillery"
        | "aline"
        | "missile"
        | "msplash"
        | "mbounce"
        | "mline"

    /**
     * Атаки
     * Нет = 0 | WeapsOn.None
     * Только атака 1 = 1 | WeapsOn.OnlyAttackOne
     * Только атака 2 = 2 | WeapsOn.OnlyAttackTwo
     * Обе атаки = 3 | WeapsOn.BothAttacks
     */
    export enum WeapsOn {
        None,
        OnlyAttackOne,
        OnlyAttackTwo,
        BothAttacks
    }

    /**
     * Тип брони
     * Дерево = Wood
     * Камень = Stone
     * Металл = Metal
     * Плоть = Flesh
     * Эфир = Ethereal
     */
    export type ArmorType = "Wood" | "Stone" | "Metal" | "Flesh" | "Ethereal"

    /**
     * Тип защиты
     * Обычная = normal
     * Легкая = small
     * Средняя = medium
     * Тяжелая = large
     * Укрепленная = fort
     * Герой = hero
     * Божественная = divine
     * Без защиты = none
     */
    export type DefenseType =
        | "normal"
        | "small"
        | "medium"
        | "large"
        | "fort"
        | "hero"
        | "divine"
        | "none"

    /**
     * Тип смерти
     * Нельзя оживить, не разлагается = 0 | DeathType.CannotRevive_NotDecompose
     * Можно оживить, не разлагается = 1 | DeathType.CanRevive_NotDecompose
     * Нельзя оживить, разлагается = 2 | DeathType.CannotRevive_Decompose
     * Можно оживить, разлагается = 3 | DeathType.CanRevive_Decompose
     */
    export enum DeathType {
        CannotRevive_NotDecompose,
        CanRevive_NotDecompose,
        CannotRevive_Decompose,
        CanRevive_Decompose
    }

    /**
     * Классификация
     * Великан = giant
     * Вызванный = summoned
     * Дерево = tree
     * Древо = ancient
     * Механический = mechanical
     * Минотавр = tauren
     * Может ходить = standon
     * Нежить = undead
     * Нейтральный = neutral
     * Работник = peon
     * Ратуша = townhall
     * Самоубийца = sapper
     * Страж = ward
     */
    export type UnitClassification =
        | "giant"
        | "summoned"
        | "tree"
        | "ancient"
        | "mechanical"
        | "tauren"
        | "standon"
        | "undead"
        | "neutral"
        | "peon"
        | "townhall"
        | "sapper"
        | "ward"
        | ""

    /**
     * Раса
     * Альянс = human
     * Все = commoner
     * Демоны = demon
     * Живые существа = critters
     * Монстры = creeps
     * Нага = naga
     * Нежить = undead
     * Нет = unknown
     * Ночные эльфы = nightelf
     * Орда = orc
     * Прочие = other
     */
    export type Race =
        | "human"
        | "commoner"
        | "demon"
        | "critters"
        | "creeps"
        | "naga"
        | "undead"
        | "unknown"
        | "nightelf"
        | "orc"
        | "other"

    /**
     * Тип расположения ИИ
     * Нет - _
     * Общие - buffer
     * Ратуша - townhall
     * Ресурс - resource
     * Фабрика - factory
     */
    export type UnitBuffType = "_" | "buffer" | "townhall" | "resource" | "factory"

    /**
     * Регенерация:
     * Нет = none
     * Всегда = always
     * Только на порченой земле = blight
     * Только днем = day
     * Только ночью = night
     */
    export type RegenType = "none" | "always" | "blight" | "day" | "night"

    type UnitDataBody = {
        /**
         * Бой - Атака 1 - анимация снаряда:
         */
        ua1m: string
        /**
         * Бой - Атака 1 - анимация точки обратного хода
         */
        backSw1: real
        /**
         * Бой - Атака 1 - анимация точки повреждения
         */
        dmgpt1: real
        /**
         * Бой - Атака 1 - базовый урон
         */
        dmgplus1: integer
        /**
         * Бой - Атака 1 - буфер области движения
         */
        RngBuff1: real
        /**
         * Бой - Атака 1 - включено автонаведение
         */
        umh1: boolean
        /**
         * Бой - Атака 1 - время перезарядки
         */
        cool1: real
        /**
         * Бой - Атака 1 - дальность
         */
        rangeN1: real
        /**
         * Бой - Атака 1 - дистанция разброса при уроне
         */
        spillDist1: real
        /**
         * Бой - Атака 1 - допустимые цели
         */
        targs1: TargetType
        /**
         * Бой - Атака 1 - звук оружия
         */
        weapType1: WeaponSound
        /**
         * Бой - Атака 1 - максимальное количество целей
         */
        targCount1: integer
        /**
         * Бой - Атака 1 - показать UI
         */
        showUI1: boolean
        /**
         * Бой - Атака 1 - радиус поражения (макс. урон)
         */
        Farea1: integer
        /**
         * Бой - Атака 1 - радиус поражения (мал. урон)
         */
        Qarea1: integer
        /**
         * Бой - Атака 1 - радиус поражения (сред. урон)
         */
        Harea1: integer
        /**
         * Бой - Атака 1 - радиус поражения (цели)
         */
        splashTargs1: TargetType
        /**
         * Бой - Атака 1 - радиус разброса при уроне
         */
        spillRadius1: real
        /**
         * Бой - Атака 1 - скорость снаряда
         */
        ua1z: integer
        /**
         * Бой - Атака 1 - тип атаки
         */
        atkType1: AttackType
        /**
         * Бой - Атака 1 - тип оружия
         */
        weapTp1: WeaponType
        /**
         * Бой - Атака 1 - траектория полета снаряда
         */
        uma1: real
        /**
         * Бой - Атака 1 - урон (эффект от улучшения)
         */
        dmgUp1: integer
        /**
         * Бой - Атака 1 - урон вблизи
         */
        Qfact1: real
        /**
         * Бой - Атака 1 - урон на средней дистанции
         */
        Hfact1: real
        /**
         * Бой - Атака 1 - урон: количество граней у кости
         */
        sides1: integer
        /**
         * Бой - Атака 1 - урон: количество костей
         */
        dice1: integer
        /**
         * Бой - Атака 1 - фактор потери урона
         */
        damageLoss1: real
        /**
         * Бой - Атака 2 - анимация дистанционной атаки
         */
        ua2m: string
        /**
         * Бой - Атака 2 - анимация точки обратного хода
         */
        backSw2: real
        /**
         * Бой - Атака 2 - анимация точки повреждения
         */
        dmgpt2: real
        /**
         * Бой - Атака 2 - базовый урон
         */
        dmgplus2: integer
        /**
         * Бой - Атака 2 - буфер области движения
         */
        RngBuff2: real
        /**
         * Бой - Атака 2 - включено автонаведение
         */
        umh2: integer
        /**
         * Бой - Атака 2 - время перезарядки
         */
        cool2: real
        /**
         * Бой - Атака 2 - дальность
         */
        rangeN2: integer
        /**
         * Бой - Атака 2 - дистанция разброса при уроне
         */
        spillDist2: real
        /**
         * Бой - Атака 2 - допустимые цели
         */
        targs2: TargetType
        /**
         * Бой - Атака 2 - звуки оружия
         */
        weapType2: WeaponSound
        /**
         * Бой - Атака 2 - максимальное количество целей
         */
        targCount2: integer
        /**
         * Бой - Атака 2 - показать UI
         */
        showUI2: boolean
        /**
         * Бой - Атака 2 - радиус поражения (макс. урон)
         */
        Farea2: integer
        /**
         * Бой - Атака 2 - радиус поражения (мал. урон)
         */
        Qarea2: integer
        /**
         * Бой - Атака 2 - радиус поражения (сред. урон)
         */
        Harea2: integer
        /**
         * Бой - Атака 2 - радиус поражения (цели)
         */
        splashTargs2: TargetType
        /**
         * Бой - Атака 2 - радиус разброса при уроне
         */
        spillRadius2: real
        /**
         * Бой - Атака 2 - скорость снаряда
         */
        ua2z: integer
        /**
         * Бой - Атака 2 - тип атаки
         */
        atkType2: AttackType
        /**
         * Бой - Атака 2 - тип оружия
         */
        weapTp2: WeaponType
        /**
         * Бой - Атака 2 - траектория полета снаряда
         */
        uma2: real
        /**
         * Бой - Атака 2 - урон (эффект от улучшения)
         */
        dmgUp2: integer
        /**
         * Бой - Атака 2 - урон вблизи
         */
        Qfact2: real
        /**
         * Бой - Атака 2 - урон на средней дистанции
         */
        Hfact2: real
        /**
         * Бой - Атака 2 - урон: количество граней у кости
         */
        sides2: integer
        /**
         * Бой - Атака 2 - урон: количество костей
         */
        dice2: integer
        /**
         * Бой - Атака 2 - фактор потери урона
         */
        damageLoss2: real
        /**
         * Бой - Атаки
         */
        WeapsOn: WeapsOn
        /**
         * Бой - Дистанция получения приказа
         */
        acquire: real
        /**
         * Бой - Исходная защита
         */
        def: integer
        /**
         * Бой - Минимальная дистанция атаки
         */
        minRange: integer
        /**
         * Бой - Относится к типу целей
         */
        targType: TargetType
        /**
         * Бой - Повышение защиты при улучшении
         */
        defUp: integer
        /**
         * Бой - Тип брони
         */
        armor: ArmorType
        /**
         * Бой - Тип защиты
         */
        defType: DefenseType
        /**
         * Бой - Тип смерти
         */
        DeathType: DeathType
        /**
         * Графика - Анимация: время цветового перехода (сек.)
         */
        blend: real
        /**
         * Графика - Анимация: обратный ход броска
         */
        castbsw: real
        /**
         * Графика - Анимация: скорость бега
         */
        run: real
        /**
         * Графика - Анимация: скорость ходьбы
         */
        walk: real
        /**
         * Графика - Анимация: точка броска
         */
        castpt: real
        /**
         * Графика - Время смерти (сек.)
         */
        death: real
        /**
         * Графика - Высота выбора
         */
        selZ: real
        /**
         * Графика - Использовать расширенную линию обзора
         */
        fatLOS: boolean
        /**
         * Графика - Круг выбора на воде
         */
        selCircOnWater: boolean
        /**
         * Графика - Максимальный угол крена (град.)
         */
        maxPitch: real
        /**
         * Графика - Максимальный угол поворота (град.)
         */
        maxRoll: real
        /**
         * Графика - Масштабирование
         */
        modelScale: real
        /**
         * Графика - Масштабировать снаряды
         */
        scaleBull: boolean
        /**
         * Графика - Наводка (контрольный радиус)
         */
        elevRad: real
        /**
         * Графика - Наодка (контрольные точки)
         */
        elevPts: integer
        /**
         * Графика - Нужная анимация
         */
        animProps: StringList
        /**
         * Графика - Нужная анимация (приложения)
         */
        Attachmentanimprops: StringList
        /**
         * Графика - Особые
         */
        Specialart: StringList
        /**
         * Графика - Отображение тени (боевая единица)
         */
        unitShadow: string
        /**
         * Графика - Отображение тени: высота
         */
        shadowH: real
        /**
         * Графика - Отображение тени: центр (X)
         */
        shadowX: real
        /**
         * Графика - Отображение тени: центр (Y)
         */
        shadowY: real
        /**
         * Графика - Отображение тени: ширина
         */
        shadowW: real
        /**
         * Графика - Падение снаряда (Z)
         */
        impactZ: real
        /**
         * Графика - Падение снаряда (не фикс. Z)
         */
        impactSwimZ: real
        /**
         * Графика - Пиктограмма: игровой интерфейс
         */
        Art: string
        /**
         * Графика - Пиктограмма: экран статистики
         */
        ScoreScreenIcon: string
        /**
         * Графика - Положение вставки
         */
        orientInterp: integer
        /**
         * Графика - Положение кнопки (X)
         */
        ubpx: ButtonPosX
        /**
         * Графика - Положение кнопки (Y)
         */
        ubpy: ButtonPosY
        /**
         * Графика - Радиус взаимодействия
         */
        occH: real
        /**
         * Графика - Разрешить выбор нестандартного цвета команды
         */
        customTeamColor: boolean
        /**
         * Графика - Сдвиг окна (градусы)
         */
        propWin: real
        /**
         * Графика - Ссылки на нужные приложения
         */
        Attachmentlinkprops: StringList
        /**
         * Графика - Текстура тени (здание)
         */
        buildingShadow: string
        /**
         * Графика - Тень на воде
         */
        shadowOnWater: boolean
        /**
         * Графика - Точка начала атаки (X)
         */
        launchX: real
        /**
         * Графика - Точка начала атаки (Y)
         */
        launchY: real
        /**
         * Графика - Точка начала атаки (Z)
         */
        launchZ: real
        /**
         * Графика - Точка начала атаки (не фикс. Z)
         */
        launchSwimZ: real
        /**
         * Графика - Требуемые названия костей
         */
        Boneprops: StringList
        /**
         * Графика - Туман войны: контрольный радиус
         */
        fogRad: real
        /**
         * Графика - Улучшение для мага: пиктограмма
         */
        Casterupgradeart: string
        /**
         * Графика - Файл модели
         */
        file: string
        /**
         * Графика - Файл модели: дополнительные версии
         */
        fileVerFlags: string
        /**
         * Графика - Фоновый цвет 1 (красный)
         */
        red: integer
        /**
         * Графика - Фоновый цвет 2 (зеленый)
         */
        green: integer
        /**
         * Графика - Фоновый цвет 3 (синий)
         */
        blue: integer
        /**
         * Графика - Цвет команды
         */
        teamColor: integer
        /**
         * Графика - Цель
         */
        Targetart: StringList
        /**
         * Графика - Шкала выбора
         */
        scale: real
        /**
         * Движение - Базовая скорость
         */
        spd: integer
        /**
         * Движение - Высота
         */
        moveHeight: real
        /**
         * Движение - Максимальная скорость
         */
        maxSpd: integer
        /**
         * Движение - Минимальная высота
         */
        moveFloor: real
        /**
         * Движение - Минимальная скорость
         */
        minSpd: integer
        /**
         * Движение - Разделение отрядов: включено
         */
        repulse: boolean
        /**
         * Движение - Разделение отрядов: номер отряда
         */
        repulseGroup: integer
        /**
         * Движение - Разделение отрядов: параметр
         */
        repulseParam: integer
        /**
         * Движение - Разделение отрядов: приоритет
         */
        repulsePrio: integer
        /**
         * Движение - Скорость поворота
         */
        turnRate: real
        /**
         * Движение - Тип
         */
        movetp: MovementType
        /**
         * Звук - Движение
         */
        MovementSoundLabel: string
        /**
         * Звук - Набор звуков
         */
        unitSound: string
        /**
         * Звук - Скорость затухания повтора
         */
        LoopingSoundFadeOut: integer
        /**
         * Звук - Скорость усиления повтора
         */
        LoopingSoundFadeIn: integer
        /**
         * Звук - Случайный
         */
        RandomSoundLabel: string
        /**
         * Пути - Радиус расположения ИИ
         */
        buffRadius: real
        /**
         * Пути - Тип расположения ИИ
         */
        buffType: UnitBuffType
        /**
         * Пути - Физический размер
         */
        collision: real
        /**
         * Редактор - Имеются особые данные по типу ландшафта
         */
        tilesetSpecific: boolean
        /**
         * Редактор - Категоризация: кампания
         */
        campaign: boolean
        /**
         * Редактор - Категоризация: особая
         */
        special: boolean
        /**
         * Редактор - Курсор справки
         */
        useClickHelper: boolean
        /**
         * Редактор - Отображать как нейтрально-враждебного
         */
        hostilePal: boolean
        /**
         * Редактор - После смерти прдеметы могут быть выброшены
         */
        dropItems: boolean
        /**
         * Редактор - Размещаемо в Редакторе
         */
        inEditor: boolean
        /**
         * Редактор - Типы ландшафта
         */
        tilesets: string
        /**
         * Способности - Возможные способности
         */
        abilList: StringList
        /**
         * Способности - Способность по умолчанию
         */
        auto: string
        /**
         * Текст - Горячая клавиша
         */
        Hotkey: string
        /**
         * Текст - Название
         */
        Name: string
        /**
         * Текст - Название: суффикс редактора
         */
        EditorSuffix: string
        /**
         * Текст - Описание
         */
        Description: string
        /**
         * Текст - Подсказка: краткая
         */
        Tip: string
        /**
         * Текст - Подсказка: подробная
         */
        Ubertip: string
        /**
         * Текст - Улучшение для мага: названия
         */
        Casterupgradename: StringList
        /**
         * Текст - Улучшение для мага: подсказки
         */
        Casterupgradetip: StringList
        /**
         * Технологии - Взаимосвязь эквивалентов
         */
        DependencyOr: StringList
        /**
         * Технологии - Войск продано
         */
        Sellunits: StringList
        /**
         * Технологии - Зданий построено
         */
        Builds: StringList
        /**
         * Технологии - Предметов продано
         */
        Sellitems: StringList
        /**
         * Технологии - Требования
         */
        Requires: StringList
        /**
         * Технологии - Требования: уровни
         */
        Requiresamount: IntegerList
        /**
         * Технологии - Улучшения
         */
        upgrades: StringList
        /**
         * Характеристики - WESTRING_UEVAL_USIT
         */
        stockInitial: integer
        /**
         * Характеристики - Восстановление маны
         */
        regenMana: real
        /**
         * Характеристики - Время восстановления
         */
        reptm: integer
        /**
         * Характеристики - Время строительства
         */
        bldtm: integer
        /**
         * Характеристики - Задержка перед первым пополнением
         */
        stockStart: integer
        /**
         * Характеристики - Изначальное количество маны
         */
        mana0: integer
        /**
         * Характеристики - Интервал пополнения
         */
        stockRegen: integer
        /**
         * Характеристики - Классификация войск
         */
        type: UnitClassification
        /**
         * Характеристики - Макс. количество
         */
        stockMax: integer
        /**
         * Характеристики - Максимум здоровья (базовый)
         */
        HP: integer
        /**
         * Характеристики - Максимум маны
         */
        manaN: integer
        /**
         * Характеристики - Место на трансп. средствах
         */
        cargoSize: integer
        /**
         * Характеристики - Может бежать
         */
        canFlee: boolean
        /**
         * Характеристики - Награда за уничтожение - базовая
         */
        bountyplus: integer
        /**
         * Характеристики - Награда за уничтожение - кол-во граней у кости
         */
        bountysides: integer
        /**
         * Характеристики - Награда за уничтожение - кол-во костей
         */
        bountydice: integer
        /**
         * Характеристики - Опыт, начисляемый за уничтожение
         */
        points: integer
        /**
         * Характеристики - Построение
         */
        formation: integer
        /**
         * Характеристики - Призовая древесина - базовое значение
         */
        lumberbountyplus: integer
        /**
         * Характеристики - Призовая древесина - количество граней
         */
        lumberbountydies: integer
        /**
         * Характеристики - Призовая древесина - количество кубиков
         */
        lumberbountydice: integer
        /**
         * Характеристики - Приоритет
         */
        prio: integer
        /**
         * Характеристики - Произведено пищи
         */
        fmade: integer
        /**
         * Характеристики - Радиус обзора (днем)
         */
        sight: integer
        /**
         * Характеристики - Радиус обзора (ночью)
         */
        nsight: integer
        /**
         * Характеристики - Раса
         */
        race: Race
        /**
         * Характеристики - Скорость восстановления здоровья
         */
        regenHP: real
        /**
         * Характеристики - Скрыть мини-карту
         */
        hideOnMinimap: boolean
        /**
         * Характеристики - Спит
         */
        canSleep: boolean
        /**
         * Характеристики - Тип восстановления здоровья
         */
        RegenType: RegenType
        /**
         * Характеристики - Требуется древесины
         */
        lumbercost: integer
        /**
         * Характеристики - Требуется древесины на восстановление
         */
        lumberRep: integer
        /**
         * Характеристики - Требуется золота
         */
        goldcost: integer
        /**
         * Характеристики - Требуется золота на восстановление
         */
        goldRep: integer
        /**
         * Характеристики - Требуется пищи
         */
        fused: integer
        /**
         * Характеристики - Уровень
         */
        level: integer
        /**
         * Характеристики - Является зданием
         */
        isbldq: boolean
    }

    /**
     * Используемые классы
     */
    export type RequiresCount = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

    /**
     * Основная характеристика
     * AGI - Ловкость
     * INT - Интеллект
     * STR - Сила
     */
    export type PrimaryAttribute = "AGI" | "INT" | "STR"

    type HeroUnitDataBody = UnitDataBody & {
        /**
         * Способности - Герой
         */
        heroAbilList: StringList
        /**
         * Текст - Имена собственные
         */
        Propernames: StringList
        /**
         * Текст - Использованы имена собственные
         */
        nameCount: integer
        /**
         * Текст - Подсказка: оживить
         */
        Revivetip: string
        /**
         * Текст - Подсказка: пробудить
         */
        Awakentip: string
        /**
         * Технологии - Места возрождения героев
         */
        Reviveat: StringList
        /**
         * Технологии - Требования - используемые классы
         */
        Requirescount: RequiresCount
        /**
         * Технологии - Требования - класс N
         * N от 0 до 7
         */
        Requires: StringList
        /**
         * Характеристики - Герой - не показывать на мини-карте
         */
        hideHeroMinimap: boolean
        /**
         * Характеристики - Герой - скрыть пиктограмму на панели
         */
        hideHeroBar: boolean
        /**
         * Характеристики - Герой: скрыть сообщение о гибели
         */
        hideHeroDeathMsg: boolean
        /**
         * Характеристики - Исходная ловкость
         */
        AGI: integer
        /**
         * Характеристики - Исходная сила
         */
        STR: integer
        /**
         * Характеристики - Исходный разум
         */
        INT: integer
        /**
         * Характеристики - Основная характеристика
         */
        Primary: PrimaryAttribute
        /**
         * Характеристики - Повышение ловкости с каждым уровнем
         */
        AGIplus: real
        /**
         * Характеристики - Повышение разума с каждым уровнем
         */
        INTplus: real
        /**
         * Характеристики - Повышение силы с каждым уровнем
         */
        STRplus: real
    }

    export type UnitDataInput = {
        id: rawcode
        parentId: rawcode
    } & Partial<UnitDataBody>

    export type HeroUnitDataInput = {
        id: rawcode
        parentId: rawcode
    } & Partial<HeroUnitDataBody>

    export type UnitDataKey = keyof UnitDataBody

    export type UnitDataOutputKey = Exclude<
        UnitDataKey,
        Exclude<
            UnitDataKey,
            | "RngBuff1"
            | "spillDist1"
            | "showUI1"
            | "Farea1"
            | "Qarea1"
            | "Harea1"
            | "splashTargs1"
            | "spillRadius1"
            | "dmgUp1"
            | "Qfact1"
            | "Hfact1"
            | "damageLoss1"
            | "RngBuff2"
            | "spillDist2"
            | "showUI2"
            | "Farea2"
            | "Qarea2"
            | "Harea2"
            | "splashTargs2"
            | "spillRadius2"
            | "dmgUp2"
            | "Qfact2"
            | "Hfact2"
            | "damageLoss2"
            | "blend"
            | "fatLOS"
            | "elevRad"
            | "elevPts"
            | "impactZ"
            | "impactSwimZ"
            | "ScoreScreenIcon"
            | "orientInterp"
            | "occH"
            | "customTeamColor"
            | "propWin"
            | "Attachmentlinkprops"
            | "launchX"
            | "launchY"
            | "launchZ"
            | "launchSwimZ"
            | "Boneprops"
            | "fogRad"
            | "Casterupgradeart"
            | "fileVerFlags"
            | "maxSpd"
            | "moveFloor"
            | "minSpd"
            | "LoopingSoundFadeOut"
            | "LoopingSoundFadeIn"
            | "RandomSoundLabel"
            | "buffRadius"
            | "buffType"
            | "tilesetSpecific"
            | "campaign"
            | "special"
            | "useClickHelper"
            | "hostilePal"
            | "inEditor"
            | "tilesets"
            | "EditorSuffix"
            | "type"
            | "prio"
        >
    >

    export const unitDataOutputKeys: Set<UnitDataOutputKey> = new Set([
        "RngBuff1",
        "spillDist1",
        "showUI1",
        "Farea1",
        "Qarea1",
        "Harea1",
        "splashTargs1",
        "spillRadius1",
        "dmgUp1",
        "Qfact1",
        "Hfact1",
        "damageLoss1",
        "RngBuff2",
        "spillDist2",
        "showUI2",
        "Farea2",
        "Qarea2",
        "Harea2",
        "splashTargs2",
        "spillRadius2",
        "dmgUp2",
        "Qfact2",
        "Hfact2",
        "damageLoss2",
        "blend",
        "fatLOS",
        "elevRad",
        "elevPts",
        "impactZ",
        "impactSwimZ",
        "ScoreScreenIcon",
        "orientInterp",
        "occH",
        "customTeamColor",
        "propWin",
        "Attachmentlinkprops",
        "launchX",
        "launchY",
        "launchZ",
        "launchSwimZ",
        "Boneprops",
        "fogRad",
        "Casterupgradeart",
        "fileVerFlags",
        "maxSpd",
        "moveFloor",
        "minSpd",
        "LoopingSoundFadeOut",
        "LoopingSoundFadeIn",
        "RandomSoundLabel",
        "buffRadius",
        "buffType",
        "tilesetSpecific",
        "campaign",
        "special",
        "useClickHelper",
        "hostilePal",
        "inEditor",
        "tilesets",
        "EditorSuffix",
        "type",
        "prio"
    ])

    export type UnitDataOutput<T extends UnitDataKey> = {
        id: rawcode
        parentId: rawcode
    } & Exclude<UnitDataKey, T>

    export type HeroUnitDataKey = keyof HeroUnitDataBody

    export type HeroUnitDataOutput<T extends HeroUnitDataKey> = {
        id: rawcode
        parentId: rawcode
    } & Exclude<HeroUnitDataKey, T>
}
