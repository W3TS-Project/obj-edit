namespace ObjEdit {
  /**
   * Классификация
   * Постоянные - Permanent
   * Имеющие заряды - Charged
   * Усиливающие - PowerUp
   * Артефакты - Artifact
   * Подлежащие продаже - Purchasable
   * Только для кампании - Campaign
   * Разные - Miscellaneous
   */
  export type ItemClassification =
    | 'Permanent'
    | 'Charged'
    | 'PowerUp'
    | 'Artifact'
    | 'Purchasable'
    | 'Campaign'
    | 'Miscellaneous'

  type ItemDataBody = {
    /**
     * Бой - Тип брони
     */
    armor: ArmorType
    /**
     * Графика - Используемая модель
     */
    file: string
    /**
     * Графика - Масштабирование
     */
    scale: real
    /**
     * Графика - Пиктограмма интерфейса
     */
    Art: string
    /**
     * Графика - Положение кнопки (X)
     */
    ubpx: integer
    /**
     * Графика - Положение кнопки (Y)
     */
    ubpy: integer
    /**
     * Графика - Размер выборки: редактор
     */
    selSize: real
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
     * Способности - Способности
     */
    abilList: StringList
    /**
     * Текст - Горячая клавиша
     */
    Hotkey: string
    /**
     * Текст - Название
     */
    Name: string
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
     * Технологии - Требования
     */
    Requires: StringList
    /**
     * Технологии - Требования: уровни:
     */
    Requiresamount: IntegerList
    /**
     * Характеристики - WESTRING_UEVAL_ISIT
     */
    stockInitial: integer
    /**
     * Характеристики - Включить как случайный выбор
     */
    pickRandom: boolean
    /**
     * Характеристики - Задержка перед первым появлением
     */
    stockStart: integer
    /**
     * Характеристики - Интервал пополнения
     */
    stockRegen: integer
    /**
     * Характеристики - Используется сразу
     */
    powerup: boolean
    /**
     * Характеристики - Классификация
     */
    class: ItemClassification
    /**
     * Характеристики - Количество зарядов
     */
    uses: integer
    /**
     * Характеристики - Макс. количество
     */
    stockMax: integer
    /**
     * Характеристики - Может быть брошен
     */
    droppable: boolean
    /**
     * Характеристики - Может закончиться
     */
    perishable: boolean
    /**
     * Характеристики - Можно купить в лавках
     */
    sellable: boolean
    /**
     * Характеристики - Можно продать в лавках
     */
    pawnable: boolean
    /**
     * Характеристики - Название
     */
    cooldownID: string
    /**
     * Характеристики - Нужно задействовать
     */
    usable: boolean
    /**
     * Характеристики - Объект подходит для трансформации
     */
    morph: boolean
    /**
     * Характеристики - Падает на землю, если владелец умирает
     */
    drop: boolean
    /**
     * Характеристики - Приоритет
     */
    prio: integer
    /**
     * Характеристики - Пропустить перезарядку
     */
    ignoreCD: boolean
    /**
     * Характеристики - Прочность
     */
    HP: integer
    /**
     * Характеристики - Требуется древесины
     */
    lumbercost: integer
    /**
     * Характеристики - Требуется золота
     */
    goldcost: integer
    /**
     * Характеристики - Уровень
     */
    Level: integer
    /**
     * Характеристики - Уровень (не классифицированный)
     */
    oldLevel: integer
  }

  export type ItemDataInput = {
    id: rawcode
    parentId: rawcode
  } & Partial<ItemDataBody>

  export type ItemDataOutput<T extends ItemDataKeys> = {
    id: rawcode
    parentId: rawcode
  } & Exclude<ItemDataKeys, T>

  export type ItemDataKeys = keyof ItemDataBody
}
