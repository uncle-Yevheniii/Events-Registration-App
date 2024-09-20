import * as Yup from 'yup'

enum AboutEventEnum {
    SOCIAL_MEDIA = 'Social media',
    FRIENDS = 'Friends',
    FOUND_MYSELF = 'Found myself'
}

export const validationSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(6, 'Full name must be at least 6 characters long.')
        .max(50, 'Full name must be at most 50 characters long.')
        .required('Full name is required!'),
    email: Yup.string().email('Email must be valid.').required('Email is required!'),
    dateOfBirth: Yup.string()
        .matches(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-(19|20)\d{2}$/, 'Date of birth must be in format DD-MM-YYYY.') // Перевірка формату дати
        .required('Date of birth is required!'),
    about: Yup.mixed().oneOf(Object.values(AboutEventEnum)).required('About event is required!')
})
