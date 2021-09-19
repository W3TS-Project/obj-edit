import { LevelProp } from './ability'
import { ButtonPosX, ButtonPosY, List, Race, StringList } from './unit'

export type UpgradeVal = integer | real | boolean

export type UpgradeValList = List<UpgradeVal>

/**
 * Класс
 * Нет - _
 * Броня - armor
 * Артиллерия - artillery
 * Ближний бой - melee
 * Дальний бой - ranged
 * Магия - caster
 */
export type UpgradeClass =
  | '_'
  | 'armor'
  | 'artillery'
  | 'melee'
  | 'ranged'
  | 'caster'

type UpgradeDataBody = {
  /**
   * Графика - Положение кнопки (X)
   */
  gbpx: ButtonPosX
  /**
   * Графика - Положение кнопки (Y)
   */
  gbpy: ButtonPosY
  /**
   * Данные - Эффект N
   * N от 0 до 3
   */
  effect: StringList
  /**
   * Данные - Эффект N - изначально
   * N от 0 до 3
   */
  base: UpgradeValList
  /**
   * Данные - Эффект N - Прирост
   * N от 0 до 3
   */
  mod: UpgradeValList
  /**
   * Характеристики - Класс
   */
  class: UpgradeClass
  /**
   * Характеристики - Относится ко всем войскам
   */
  global: boolean
  /**
   * Характеристики - Раса
   */
  race: Race
  /**
   * Характеристики - Требуется времени (первое улучшение)
   */
  timebase: integer
  /**
   * Характеристики - Требуется времени (последующие улучшения)
   */
  timemod: integer
  /**
   * Характеристики - Требуется древесины (первое улучшение)
   */
  lumberbase: integer
  /**
   * Характеристики - Требуется древесины (следующие улучшения)
   */
  lumbermod: integer
  /**
   * Характеристики - Требуется золота (первое улучшение)
   */
  goldbase: integer
  /**
   * Характеристики - Требуется золота (следующие улучшения)
   */
  goldmod: integer
  /**
   * Характеристики - Уровни
   */
  maxlevel: integer
  /**
   * Характеристики - Фиксированная зависимость
   */
  inherit: boolean
  /**
   * Уровень N - Графика - Пиктограмма
   * N от 0 до maxlevel - 1
   */
  Art: LevelProp<string>
  /**
   * Уровень N - Текст - Горячая клавиша
   * N от 0 до maxlevel - 1
   */
  Hotkey: LevelProp<string>
  /**
   * Уровень N - Текст - Название
   * N от 0 до maxlevel - 1
   */
  Name: LevelProp<string>
  /**
   * Уровень N - Текст - Подсказка
   * N от 0 до maxlevel - 1
   */
  Tip: LevelProp<string>
  /**
   * Уровень N - Текст - Подсказка: подробная
   * N от 0 до maxlevel - 1
   */
  Ubertip: LevelProp<string>
  /**
   * Уровень N - Текст - Суффикс редактора
   * N от 0 до maxlevel - 1
   */
  EditorSuffix: LevelProp<string>
  /**
   * Уровень N - Технологии - Требования
   * N от 0 до maxlevel - 1
   */
  Requires: LevelProp<string>
  /**
   * Уровень N - Технологии - Требования: уровни
   * N от 0 до maxlevel - 1
   */
  Requiresamount: LevelProp<integer>
}

export type UpgradeDataInput = {
  id: rawcode
  parentId: rawcode
} & Partial<UpgradeDataBody>

export type UpgradeDataOutput<T extends UpgradeDataKeys> = {
  id: rawcode
  parentId: rawcode
} & Exclude<UpgradeDataKeys, T>

export type UpgradeDataKeys = keyof UpgradeDataBody
