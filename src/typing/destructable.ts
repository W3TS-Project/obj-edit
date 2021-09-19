import { ArmorType, TargetType } from "./unit"

/**
 * Категория разрушаемого
 * Деревья и разрушаемые объекты - D
 * Блокираторы пути - P
 * Мосты и подъемы - B
 */
export type DestructableCategory = 'D' | 'P' | 'B'

/**
 * Тип ландшафта
 * Ашенваль - A
 * Пустоши - B
 * Темная Цитадель - K
 * Город - Y
 * Даларан - X
 * Развалины Даларана - J
 * Подземелье - D
 * Фелвуд - C
 * Ледяная Корона - I
 * Осенний Лордерон - F
 * Летний Лордерон - L
 * Зимний Лордерон - W
 * Нортренд - N
 * Глушь - O
 * Затонувший город - Z
 * Подземелье - G
 * Деревня - V
 * Осенняя деревня - Q
 * Все - *
 */
export type Tilesets =
  | (
      | 'A'
      | 'B'
      | 'K'
      | 'Y'
      | 'X'
      | 'J'
      | 'D'
      | 'C'
      | 'I'
      | 'F'
      | 'L'
      | 'W'
      | 'N'
      | 'O'
      | 'Z'
      | 'G'
      | 'V'
      | 'Q'
    )[]
  | '*'

export type DestructableData = {
  /**
   * Бой - Тип брони
   */
  armor: ArmorType
  /**
   * Бой - Тип цели
   */
  targType: TargetType
  /**
   * Графика - Видно в Тумане войны
   */
  fogVis: boolean
  /**
   * Графика - Высота полета
   */
  flyH: real
  /**
   * Графика - Высота препятствия
   */
  occH: real
  /**
   * Графика - Заменяемый идентификатор текстур
   */
  texID: integer
  /**
   * Графика - Заменяемый файл текстур
   */
  texFile: string
  /**
   * Графика - Макс. угол поворота (град.)
   */
  maxRoll: real
  /**
   * Графика - Максимальный угол крена (град.)
   */
  maxPitch: real
  /**
   * Графика - Мини-карта: использовать нестандартный цвет
   */
  useMMColor: boolean
  /**
   * Графика - Мини-карта: показать
   */
  showInMM: boolean
  /**
   * Графика - Показать в игре
   */
  selectable: boolean
  /**
   * Графика - Наводка: контрольный радиус
   */
  radius: real
  /**
   * Графика - Радиус Тумана войны
   */
  fogRadius: real
  /**
   * Графика - Размер выбора: игра
   */
  selcircsize: real
  /**
   * Графика - Размер выборки: редактор
   */
  selSize: real
  /**
   * Графика - Тень
   */
  shadow: string
  /**
   * Графика - Увеличение области обзора
   */
  fatLOS: boolean
  /**
   * Графика - Файл моделей: имеется облегченная модель
   */
  lightweight: boolean
  /**
   * Графика - Файл модели
   */
  file: string
  /**
   * Графика - Файл модели: вариации
   */
  numVar: integer
  /**
   * Графика - Файл модели: портрет
   */
  portraitmodel: string
  /**
   * Графика - Фиксированное вращение
   */
  fixedRot: real
  /**
   * Графика - Фоновый цвет 1 (красный)
   */
  colorR: integer
  /**
   * Графика - Фоновый цвет 2 (зеленый)
   */
  colorG: integer
  /**
   * Графика - Фоновый цвет 3 (синий)
   */
  colorB: integer
  /**
   * Графика - Цвет на мини-карте 1 (красный)
   */
  MMRed: integer
  /**
   * Графика - Цвет на мини-карте 2 (зеленый)
   */
  MMGreen: integer
  /**
   * Графика - Цвет на мини-карте 3 (синий)
   */
  MMBlue: integer
  /**
   * Звук - Уничтожение
   */
  deathSnd: string
  /**
   * Пути - Высота склона
   */
  cliffHeight: integer
  /**
   * Пути - Можно пройти
   */
  walkable: boolean
  /**
   * Пути - Текстура пути
   */
  pathTex: string
  /**
   * Пути - Текстура пути (мертвый)
   */
  pathTexDeath: string
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
  category: DestructableCategory
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
   * Редактор - Объект уничтожен
   */
  canPlaceDead: boolean
  /**
   * Редактор - Подсказка для выбранных объектов
   */
  useClickHelper: boolean
  /**
   * Редактор - Типы ландшафта
   */
  tilesets: Tilesets
  /**
   * Текст - Название
   */
  Name: string
  /**
   * Текст - Суффикс редактора
   */
  EditorSuffix: string
  /**
   * Характеристики - Время восстановления
   */
  repairTime: integer
  /**
   * Характеристики - Время строительства
   */
  buildTime: integer
  /**
   * Характеристики - Прочность
   */
  HP: real
  /**
   * Характеристики - Требуется древесины на ремонт
   */
  lumberRep: integer
  /**
   * Характеристики - Требуется золота на ремонт
   */
  goldRep: integer
}

export type DestructableDataInput = {
  parentId: rawcode
} & Partial<DestructableData>

export type DestructableDataOutput<T extends DestructableDataKeys> = {
  id: rawcode
  parentId: rawcode
} & Exclude<DestructableDataKeys, T>

export type DestructableDataKeys = keyof DestructableData
