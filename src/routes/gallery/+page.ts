export const load = async ({ fetch }) => {
    const fetchData = async () => {
        const res = await fetch('/data.json')
        const data = await res.json()
        return data
    }

    return {
        data: fetchData()
    }
}