import { IParticipantsInfo } from '@/types/type'

import style from './style.module.css'

export default function CurrentEventListItems({ data }: { data: IParticipantsInfo[] }) {
    return (
        <ul className={style.currentEventListItems__list}>
            {data.map((item, index: number) => (
                <li key={index} className={style.currentEventListItems__listItems}>
                    <p className={style.currentEventListItems__listTitle}>{item.fullName}</p>
                    <p className={style.currentEventListItems__listEmail}>{item.email}</p>
                    <p className={style.currentEventListItems__listText}>{item.dateOfBirth}</p>
                    <p className={style.currentEventListItems__listText}>{item.aboutEvent[0]}</p>
                </li>
            ))}
        </ul>
    )
}
