import { Field } from 'formik'

import style from './style.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export default function InputComponent({ label, ...props }: InputProps) {
    return (
        <div className={style.InputComponent__wrapper}>
            <label htmlFor={props.id} className={style.InputComponent__label}>
                {label}
            </label>
            <Field className={style.InputComponent__input} {...props} />
        </div>
    )
}
