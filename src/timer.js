import { timerStart } from "./debug"

export const setTimeout = (time, callback, isDestroy = true) => {
    const timer = CreateTimer()
    timerStart(timer, time, false, () => {
        callback()
        if (isDestroy) {
            PauseTimer(timer)
            DestroyTimer(timer)
        }
    })
    return timer
}

export const setInterval = (time, callback) => {
    const timer = CreateTimer()
    timerStart(timer, time, true, () => {
        callback()
    })
    return timer
}
