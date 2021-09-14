export const newThread = func => {
    const co = coroutine.create(func)
    const result = coroutine.resume(co)
    if (!result[0]) {
        print(result[1])
        return result[0]
    } else {
        return result[1]
    }
}

export const wait = time => {
    const timer = CreateTimer()
    const co = coroutine.running()

    TimerStart(timer, time, false, () => coroutine.resume(co[0]))

    coroutine.yield()

    PauseTimer(timer)
    DestroyTimer(timer)
}

const getHandledCallback = callback => () => {
    const result = pcall(callback)
    if (!result[0]) {
        print(result[1])
        return result[0]
    } else {
        return result[1]
    }
}

const getHandledThread = callback => () => newThread(getHandledCallback(callback))

export const timerStart = (
    whichTimer,
    timeout,
    periodic,
    handlerFunc
) => TimerStart(whichTimer, timeout, periodic, getHandledThread(handlerFunc))

export const triggerAddAction = (whichTrigger, actionFunc) =>
    TriggerAddAction(whichTrigger, getHandledThread(actionFunc))

export const getCondition = func => Condition(getHandledThread(func))

export const getFilter = func => Filter(getHandledThread(func))

export const forForce = (whichForce, callback) =>
    ForForce(whichForce, getHandledThread(callback))

export const forGroup = (whichGroup, callback) =>
    ForGroup(whichGroup, getHandledThread(callback))

export const enumDestructablesInRect = (r, filterFunc, actionFunc) =>
    EnumDestructablesInRect(r, getFilter(filterFunc), getHandledThread(actionFunc))

export const enumItemsInRect = (r, filterFunc, actionFunc) =>
    EnumItemsInRect(r, getFilter(filterFunc), getHandledThread(actionFunc))