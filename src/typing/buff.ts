import { TargetAttachCount } from "./ability"
import { Race, StringList } from "./unit"

/**
 * Детализация
 * Низк. - 0
 * Средн. - 1
 * Высок. - 2
 */
export enum SpellDetail {
  Low,
  Medium,
  High,
}

type BuffDataBody = {
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
   * Графика - Молния
   */
  LightningEffect: string
  /**
   * Графика - Особые
   */
  SpecialArt: StringList
  /**
   * Графика - Особый объект воздействия
   */
  Specialattach: StringList
  /**
   * Графика - Пиктограмма
   */
  Buffart: string
  /**
   * Графика - Скорость дистанционной атаки
   */
  Missilespeed: integer
  /**
   * Графика - Точка прикрепления эффекта
   */
  Effectattach: StringList
  /**
   * Графика - Траектория ракеты
   */
  Missilearc: real
  /**
   * Графика - Треубемая детализация
   */
  Spelldetail: SpellDetail
  /**
   * Графика - Цель
   */
  TargetArt: StringList
  /**
   * Графика - Эффект
   */
  EffectArt: StringList
  /**
   * Звук - Звук эффекта
   */
  Effectsound: string
  /**
   * Звук - Звук эффекта (повтор)
   */
  Effectsoundlooped: string
  /**
   * Текст - Название (только для Редактора)
   */
  EditorName: string
  /**
   * Текст - Подсказка
   */
  Bufftip: string
  /**
   * Текст - Подсказка: подробная
   */
  Buffubertip: string
  /**
   * Текст - Суффикс редактора
   */
  EditorSuffix: string
  /**
   * Характеристики - Раса
   */
  race: Race
  /**
   * Характеристики - Является эффектом
   */
  isEffect: boolean
}

export type BuffDataInput = {
  id: rawcode
  parentId: rawcode
} & Partial<BuffDataBody>

export type BuffDataOutput<T extends BuffDataKeys> = {
  id: rawcode
  parentId: rawcode
} & Exclude<BuffDataKeys, T>

export type BuffDataKeys = keyof BuffDataBody
