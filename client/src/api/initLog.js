import { baseApi } from "../constants/baseAPI"

export const initLog = async () => {
    const response = await fetch(`${baseApi}/init`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
    })
    await response.json()
}