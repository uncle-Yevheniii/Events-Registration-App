import { ErrorMessage } from 'formik'

import InputComponent from './Input'
import { AboutEventEnum } from '@/types/type'

import style from './style.module.css'

export default function FormRadioInputComponent() {
    return (
        <div className={style.registerEvent__radioWrapper}>
            <div className={style.registerEvent__radioTitleWrapper}>
                <p className={style.registerEvent__radioTitle}>Were did you her about this event?</p>
                <ErrorMessage
                    name="about"
                    render={(msg) => <div className={style.registerEvent__error}>{msg}</div>}
                    className={style.registerEvent__error}
                />
            </div>

            <ul className={style.registerEvent__radioList}>
                <li className={style.registerEvent__radio}>
                    <InputComponent name="about" type="radio" label={AboutEventEnum.SOCIAL_MEDIA} value={AboutEventEnum.SOCIAL_MEDIA} />
                </li>
                <li>
                    <InputComponent name="about" type="radio" label={AboutEventEnum.FRIENDS} value={AboutEventEnum.FRIENDS} />
                </li>
                <li>
                    <InputComponent name="about" type="radio" label={AboutEventEnum.FOUND_MYSELF} value={AboutEventEnum.FOUND_MYSELF} />
                </li>
            </ul>
        </div>
    )
}
