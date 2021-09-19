import { Tilesets } from "./destructable"

/**
 * Количество вариаций
 */
export type Variation = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

/**
 * Категория декорации
 * Доп. декорации - O
 * Постройки - S
 * Вода - W
 * Склоны и рельеф - C
 * Окружение - E
 * Спецэффекты - Z
 */
export type DoodadCategory = 'O' | 'S' | 'W' | 'C' | 'E' | 'Z'

export type DoodadData = {
  /**
   * Графика - Анимация в Тумане войны
   */
  animInFog: boolean
  /**
   * Графика - Вариации
   */
  numVar: Variation
  /**
   * Графика - Видно в Тумане войны
   */
  showInFog: boolean
  /**
   * Графика - Имеет тень
   */
  shadow: boolean
  /**
   * Графика - Макс. угол поворота (град.)
   */
  maxRoll: real
  /**
   * Графика - Максимальный угол крена (град.)
   */
  maxPitch: real
  /**
   * Графика - Масштаб по умолчанию
   */
  defScale: real
  /**
   * Графика - Мини-карта: использовать нестандартный цвет
   */
  useMMColor: boolean
  /**
   * Графика - Мини-карта: показать
   */
  showInMM: boolean
  /**
   * Графика - Плавает
   */
  floats: boolean
  /**
   * Графика - Радиус видимости
   */
  visRadius: real
  /**
   * Графика - Размер выборки
   */
  selSize: real
  /**
   * Графика - Файл модели
   */
  file: string
  /**
   * Графика - Фиксированное вращение
   */
  fixedRot: real
  /**
   * Графика - Вариация N - Фоновый цвет 1 (красный)
   * Массив фонового цвета "Красный" от 1 до numVar
   */
  vertR: integer[]
  /**
   * Графика - Вариация N - Фоновый цвет 2 (зеленый)
   * Массив фонового цвета "Зеленый" от 1 до numVar
   */
  vertG: integer[]
  /**
   * Графика - Вариация N - Фоновый цвет 3 (синий)
   * Массив фонового цвета "Синий" от 1 до numVar
   */
  vertB: integer[]
  /**
   * Графика - Цвет мини-карты 1 (красный)
   */
  MMRed: integer
  /**
   * Графика - Цвет мини-карты 2 (зеленый)
   */
  MMGreen: integer
  /**
   * Графика - Цвет мини-карты 3 (синий)
   */
  MMBlue: integer
  /**
   * Звук - Проигрываемый звук
   */
  soundLoop: string
  /**
   * Пути - Можно пройти
   */
  walkable: boolean
  /**
   * Пути - Текстура пути
   */
  pathTex: string
  /**
   * Редактор - Включить в список пользователя
   */
  UserList: boolean
  /**
   * Редактор - Имеются особые данные по типу ландшафта
   */
  tilesetSpecific: boolean
  /**
   * Редактор - Категория
   */
  category: DoodadCategory
  /**
   * Редактор - Курсор справки
   */
  useClickHelper: boolean
  /**
   * Редактор - Максимальный масштаб
   */
  maxScale: real
  /**
   * Редактор - Минимальный масштаб
   */
  minScale: real
  /**
   * Редактор - Можно поместить случайный масштаб
   */
  canPlaceRandScale: boolean
  /**
   * Редактор - Можно размещать на воде
   */
  onWater: boolean
  /**
   * Редактор - Можно размещать на склонах
   */
  onCliffs: boolean
  /**
   * Редактор - Нет звука при выборе
   */
  ignoreModelClick: boolean
  /**
   * Редактор - Типы ландшафта
   */
  tilesets: Tilesets
  /**
   * Текст - Название
   */
  Name: string
}

export type DoodadDataInput = {
  id: rawcode
  parentId: rawcode
} & Partial<DoodadData>

export type DoodadDataOutput<T extends DoodadDataKeys> = {
  id: rawcode
  parentId: rawcode
} & Exclude<DoodadDataKeys, T>

export type DoodadDataKeys = keyof DoodadData
