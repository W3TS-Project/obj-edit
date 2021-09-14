import { setInterval } from "./timer"

export let interval = 30.

let time = 0.

const timer = setInterval(interval, () => time += interval)

export const getTime = () => TimerGetElapsed(timer) + time