import * as yup from 'yup';

export const loginSchema = yup.object().shape(
    {   login: yup.string().required("Login é obrigatorio"),
        password: yup.string().required("Senha é obrigatorio")}
)

export const signupSchema = yup.object().shape(
    {   login: yup.string().required("Login é obrigatorio"),
        password: yup.string().required("Senha é obrigatorio"),
        password2: yup.string().required("Senha é obrigatorio")
    }
)