import { ErrorMessage } from 'formik'

import InputComponent from './Input'

import style from './style.module.css'

export default function FormInputComponent() {
    return (
        <ul className={style.registerEvent__formList}>
            <li className={style.registerEvent__formItem}>
                <InputComponent name="fullName" type="text" label="Full name" placeholder="Your full name" />
                <ErrorMessage name="fullName" render={(msg) => <div className={style.registerEvent__error}>{msg}</div>} />
            </li>
            <li className={style.registerEvent__formItem}>
                <InputComponent name="email" type="email" label="Email" placeholder="Your email" />
                <ErrorMessage name="email" render={(msg) => <div className={style.registerEvent__error}>{msg}</div>} />
            </li>
            <li className={style.registerEvent__formItem}>
                <InputComponent name="dateOfBirth" type="string" label="Date of birth" placeholder="Your date of birth format: DD-MM-YYYY" />
                <ErrorMessage name="dateOfBirth" render={(msg) => <div className={style.registerEvent__error}>{msg}</div>} />
            </li>
        </ul>
    )
}
