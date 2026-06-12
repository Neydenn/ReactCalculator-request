import { baseApi } from "../constants/baseAPI"

export const logExample = async (example) => {
    const response = await fetch(`${baseApi}/logger`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            example: example,
        }),
    })
    await response.json()
}