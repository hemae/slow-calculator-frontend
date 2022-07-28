export const getFullTime = (date: Date) => ({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    time: date.getTime()
})

export function getAge(birthDate: string | null): number | null {

    if (!birthDate) return null

    const today = new Date()

    const todayData = {
        date: today.getDate(),
        month: today.getMonth() + 1,
        year: today.getFullYear()
    }

    const [year, month, date] = birthDate.split('-').map(el => +el)

    return Math.floor(todayData.year - year + (todayData.month - month) / 12 + (todayData.date - date) / 365.25)
}
