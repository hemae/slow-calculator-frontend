import {getFullTime} from '@helpers/date'


type Options = { date: string, withTime: boolean }

type Returned = { parsedDate: string }

export default function useDate(options: Options): Returned {

    const {date, withTime} = options

    const dateObj = getFullTime(new Date(Date.parse(date)))

    const time = `${dateObj.hour}:${dateObj.minute < 10 ? '0' : ''}${dateObj.minute}:${dateObj.second < 10 ? '0' : ''}${dateObj.second}`

    return {parsedDate: `${dateObj.date}/${dateObj.month < 10 ? '0' : ''}${dateObj.month}/${dateObj.year}` + (withTime ? ` ${time}` : '')}
}
