import { Formik, Form, FormikHelpers } from 'formik'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { Values } from '@/types/type'
import { registerEvent } from '@/api/registerEvent.api'
import { validationSchema } from '@/helpers/validation'
import { FormInputComponent, FormRadioInputComponent, Title } from '@/components'

import style from './style.module.css'

export default function RegisterEventPage() {
    const { evenId } = useParams()
    const navigate = useNavigate()

    const handleSubmit = (values: Values, { resetForm }: FormikHelpers<Values>) => {
        registerEvent(evenId ?? '', values)
            .then((res) => {
                console.log(res)
                navigate('/current-event/' + evenId)
            })
            .catch((err) => {
                console.log(err)
            })
        resetForm()
    }

    return (
        <>
            <Title>Event registration</Title>

            <div className={style.registerEvent__backWrapper}>
                <Link to="/events" className={style.registerEvent__link}>
                    Back to events
                </Link>
            </div>

            <Formik
                initialValues={{
                    fullName: '',
                    email: '',
                    dateOfBirth: '',
                    about: ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className={style.registerEvent__form}>
                    <FormInputComponent />
                    <FormRadioInputComponent />

                    <button type="submit" className={style.registerEvent__button}>
                        Register
                    </button>
                </Form>
            </Formik>
        </>
    )
}
