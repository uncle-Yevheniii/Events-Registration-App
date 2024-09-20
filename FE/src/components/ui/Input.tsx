import { Field, ErrorMessage } from 'formik'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export default function InputComponent({ label, ...props }: InputProps) {
    return (
        <div>
            <label htmlFor={props.id}>
                {label}
                <Field {...props} />
                <ErrorMessage name={props.name as string} component="div" />
            </label>
        </div>
    )
}
