import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form, FormikHelpers } from 'formik'

import { Input } from '@/components'
import { registerEvent } from '@/api/registerEvent'
import { AboutEventEnum, Values } from '@/types/type'
import { validationSchema } from '@/helpers/validation'

export default function RegisterEventPage() {
    const { evenId } = useParams()
    const navigate = useNavigate()

    const handleSubmit = (values: Values, { resetForm }: FormikHelpers<Values>) => {
        registerEvent(evenId ?? '', values)
            .then((res) => {
                console.log(res)
                navigate('/view-event/' + evenId)
            })
            .catch((err) => {
                console.log(err)
            })
        resetForm()
    }

    return (
        <div>
            <h2>Event registration</h2>

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
                <Form>
                    <Input name="fullName" type="text" label="Full name" placeholder="Your full name" />
                    <Input name="email" type="email" label="Email" placeholder="Your email" />
                    <Input name="dateOfBirth" type="string" label="Date of birth" placeholder="Your date of birth format: DD-MM-YYYY" />

                    <div>
                        <p>Were did you her about this event?</p>
                        <Input name="about" type="radio" label={AboutEventEnum.SOCIAL_MEDIA} value={AboutEventEnum.SOCIAL_MEDIA} />
                        <Input name="about" type="radio" label={AboutEventEnum.FRIENDS} value={AboutEventEnum.FRIENDS} />
                        <Input name="about" type="radio" label={AboutEventEnum.FOUND_MYSELF} value={AboutEventEnum.FOUND_MYSELF} />
                    </div>

                    <button type="submit">Register</button>
                </Form>
            </Formik>
        </div>
    )
}
