import { IParticipantsInfo } from '@/types/type'

export default function CurrentEventListItems({ data }: { data: IParticipantsInfo[] }) {
    return (
        <ul>
            {data.map((item, index: number) => (
                <li key={index}>
                    <p>{item.fullName}</p>
                    <p>{item.email}</p>
                    <p>{item.dateOfBirth}</p>
                    <p>{item.aboutEvent[0]}</p>
                </li>
            ))}
        </ul>
    )
}
