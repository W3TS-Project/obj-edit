import { ButtonPosX, ButtonPosY, List, Race, StringList, TargetType } from "./unit"

/**
 * Сценарий воздействия
 */
export type TargetAttachCount = 0 | 1 | 2 | 3 | 4 | 5 | 6

/**
 * Точки приложения заклинания
 */
export type CasterAttachCount = 0 | 1 | 2

export type LevelToArray<T extends Object> = (lvl: integer) => T[]

export type LevelProp<T extends Object> = List<T> | LevelToArray<T>

export type LevelData = LevelProp<Primitive>

export type AbilityData = {
  /**
   * Графика - Анимации
   */
  Animnames: StringList
  /**
   * Графика - Анимация дистанционной атаки
   */
  Missileart: StringList
  /**
   * Графика - Включено автоматическое наведение
   */
  MissileHoming: boolean
  /**
   * Графика - Воздействие на цель 1
   */
  Targetattach: StringList
  /**
   * Графика - Воздействие на цель 2
   */
  Targetattach1: StringList
  /**
   * Графика - Воздействие на цель 3
   */
  Targetattach2: StringList
  /**
   * Графика - Воздействие на цель 4
   */
  Targetattach3: StringList
  /**
   * Графика - Воздействие на цель 5
   */
  Targetattach4: StringList
  /**
   * Графика - Воздействие на цель 6
   */
  Targetattach5: StringList
  /**
   * Графика - Задать сценарий воздействия
   */
  Targetattachcount: TargetAttachCount
  /**
   * Графика - Маг
   */
  CasterArt: StringList
  /**
   * Графика - Область воздействия
   */
  Areaeffectart: StringList
  /**
   * Графика - Особые
   */
  SpecialArt: StringList
  /**
   * Графика - Особый объект воздействия
   */
  Specialattach: StringList
  /**
   * Графика - Пиктограмма: используется
   */
  Art: string
  /**
   * Графика - Пиктограмма: не используется
   */
  Unart: string
  /**
   * Графика - Положение кнопки: используется (X)
   */
  abpx: ButtonPosX
  /**
   * Графика - Положение кнопки: используется (Y)
   */
  abpy: ButtonPosY
  /**
   * Графика - Положение кнопки: не используется (X)
   */
  aubx: ButtonPosX
  /**
   * Графика - Положение кнопки: не используется (Y)
   */
  auby: ButtonPosY
  /**
   * Графика - Скорость дистанционной атаки
   */
  Missilespeed: real
  /**
   * Графика - Точка приложения заклинания 1
   */
  Casterattach: StringList
  /**
   * Графика - Точка приложения заклинания 2
   */
  Casterattach1: StringList
  /**
   * Графика - Точки приложения заклинания
   */
  Casterattachcount: CasterAttachCount
  /**
   * Графика - Траектория ракеты
   */
  Missilearc: real
  /**
   * Графика - Цель
   */
  TargetArt: StringList
  /**
   * Графика - Эффект
   */
  EffectArt: StringList
  /**
   * Графика - Эффекты молнии
   */
  LightningEffect: StringList
  /**
   * Звук - Звук эффекта
   */
  Effectsound: string
  /**
   * Звук - Звук эффекта (повтор)
   */
  Effectsoundlooped: string
  /**
   * Текст - Горячая клавиша: используется
   */
  Hotkey: string
  /**
   * Текст - Горячая клавиша: не используется
   */
  Unhotkey: string
  /**
   * Текст - Название
   */
  Name: string
  /**
   * Уровень N - Текст - Подсказка: используется, нормальная
   * N от 0 до levels - 1
   */
  Tip: LevelProp<string>
  /**
   * Уровень N - Текст - Подсказка: используется, подробная
   * N от 0 до levels - 1
   */
  Ubertip: LevelProp<string>
  /**
   * Уровень N - Текст - Подсказка: не используется
   * N от 0 до levels - 1
   */
  Untip: LevelProp<string>
  /**
   * Уровень N - Текст - Подсказка: не используется, подробная
   * N от 0 до levels - 1
   */
  Unubertip: LevelProp<string>
  /**
   * Текст - Порядок строк: включен
   */
  Order: order
  /**
   * Текст - Порядок строк: выключен
   */
  Unorder: order
  /**
   * Текст - Порядок строк: используется
   */
  Orderon: order
  /**
   * Текст - Порядок строк: не используется
   */
  Orderoff: order
  /**
   * Текст - Суффикс редактора
   */
  EditorSuffix: string
  /**
   * Технологии - Проверять зависимости
   */
  checkDep: boolean
  /**
   * Технологии - Требования
   */
  Requires: LevelProp<string>
  /**
   * Технологии - Требования: уровни
   */
  Requiresamount: LevelProp<string>
  /**
   * Уровень N - Характеристики - Время подготовки заклинания
   * N от 0 до levels - 1
   */
  Cast: LevelProp<real>
  /**
   * Уровень N - Характеристики - Длительность воздействия: герой
   * N от 0 до levels - 1
   */
  HeroDur: LevelProp<real>
  /**
   * Уровень N - Характеристики - Длительность: нормальная
   * N от 0 до levels - 1
   */
  Dur: LevelProp<real>
  /**
   * Уровень N - Характеристики - Заклинания
   * N от 0 до levels - 1
   */
  BuffID: LevelProp<string>
  /**
   * Уровень N - Характеристики - Затрачиваемая мана
   * N от 0 до levels - 1
   */
  Cost: LevelProp<integer>
  /**
   * Уровень N - Характеристики - Область воздействия
   * N от 0 до levels - 1
   */
  Area: LevelProp<real>
  /**
   * Характеристики - Относится к герою
   */
  hero: boolean
  /**
   * Характеристики - Относится к предмету
   */
  item: boolean
  /**
   * Уровень N - Характеристики - Перезарядка
   * N от 0 до levels - 1
   */
  Cool: LevelProp<real>
  /**
   * Характеристики - Приоритет для кражи заклятия
   */
  priority: integer
  /**
   * Уровень N - Характеристики - Радиус действия
   * N от 0 до levels - 1
   */
  Rng: LevelProp<real>
  /**
   * Уровень N - Характеристики - Разрешенные цели
   * N от 0 до levels - 1
   */
  targs: LevelProp<TargetType>
  /**
   * Характеристики - Раса
   */
  race: Race
  /**
   * Характеристики - Уровни
   */
  levels: integer
  /**
   * Уровень N - Характеристики - Эффекты
   * N от 0 до levels - 1
   */
  EfctID: LevelProp<string>
  /**
   * Уровень N - Данные - Параметр A
   * N от 0 до levels - 1
   */
  DataA: LevelData
  /**
   * Уровень N - Данные - Параметр B
   * N от 0 до levels - 1
   */
  DataB: LevelData
  /**
   * Уровень N - Данные - Параметр C
   * N от 0 до levels - 1
   */
  DataC: LevelData
  /**
   * Уровень N - Данные - Параметр D
   * N от 0 до levels - 1
   */
  DataD: LevelData
  /**
   * Уровень N - Данные - Параметр E
   * N от 0 до levels - 1
   */
  DataE: LevelData
  /**
   * Уровень N - Данные - Параметр F
   * N от 0 до levels - 1
   */
  DataF: LevelData
  /**
   * Уровень N - Данные - Параметр G
   * N от 0 до levels - 1
   */
  DataG: LevelData
  /**
   * Уровень N - Данные - Параметр H
   * N от 0 до levels - 1
   */
  DataH: LevelData
  /**
   * Уровень N - Данные - Параметр I
   * N от 0 до levels - 1
   */
  DataI: LevelData
  /**
   * Уровень N - Данные - идентификатор боевой единицы
   * N от 0 до levels - 1
   */
  UnitID: LevelProp<string>
}

type HeroAbilityData = AbilityData & {
  /**
   * Текст - Подсказка: выучить
   */
  Researchtip: string
  /**
   * Текст - Подсказка: выучить, подробная
   */
  Researchubertip: string
}

export type AbilityDataInput = {
  id: rawcode
  parentId: rawcode
} & Partial<AbilityData>

export type HeroAbilityDataInput = {
  id: rawcode
  parentId: rawcode
} & Partial<HeroAbilityData>

export type AbilityDataOutput<T extends AbilityDataKeys> = {
  id: rawcode
  parentId: rawcode
} & Exclude<AbilityDataKeys, T>

export type HeroAbilityDataOutput<T extends HeroAbilityDataKeys> = {
  id: rawcode
  parentId: rawcode
} & Exclude<HeroAbilityDataKeys, T>

export type AbilityDataKeys = keyof AbilityData

export type HeroAbilityDataKeys = keyof HeroAbilityData
