import { Formik, Form, FormikHelpers, ErrorMessage } from 'formik'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { Input, Title } from '@/components'
import { AboutEventEnum, Values } from '@/types/type'
import { registerEvent } from '@/api/registerEvent.api'
import { validationSchema } from '@/helpers/validation'

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
                    <ul className={style.registerEvent__formList}>
                        <li className={style.registerEvent__formItem}>
                            <Input name="fullName" type="text" label="Full name" placeholder="Your full name" />
                            <ErrorMessage name="fullName" render={(msg) => <div className={style.registerEvent__error}>{msg}</div>} />
                        </li>
                        <li className={style.registerEvent__formItem}>
                            <Input name="email" type="email" label="Email" placeholder="Your email" />
                            <ErrorMessage name="email" render={(msg) => <div className={style.registerEvent__error}>{msg}</div>} />
                        </li>
                        <li className={style.registerEvent__formItem}>
                            <Input name="dateOfBirth" type="string" label="Date of birth" placeholder="Your date of birth format: DD-MM-YYYY" />
                            <ErrorMessage name="dateOfBirth" render={(msg) => <div className={style.registerEvent__error}>{msg}</div>} />
                        </li>
                    </ul>

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
                                <Input name="about" type="radio" label={AboutEventEnum.SOCIAL_MEDIA} value={AboutEventEnum.SOCIAL_MEDIA} />
                            </li>
                            <li>
                                <Input name="about" type="radio" label={AboutEventEnum.FRIENDS} value={AboutEventEnum.FRIENDS} />
                            </li>
                            <li>
                                <Input name="about" type="radio" label={AboutEventEnum.FOUND_MYSELF} value={AboutEventEnum.FOUND_MYSELF} />
                            </li>
                        </ul>
                    </div>

                    <button type="submit" className={style.registerEvent__button}>
                        Register
                    </button>
                </Form>
            </Formik>
        </>
    )
}
