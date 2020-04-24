import * as yup from 'yup';

const phoneRegEx = /\(\d{2,}\) \d{1,} \d{4,} \d{4}/g;

const defaulSchema = yup.object().shape({
  email: yup
    .string()
    .required('Este campo é obrigatório')
    .email('O e-mail informado não é válido'),
  full_name: yup.string().required('Este campo é obrigatório'),
  cpf: yup.string().required('Este campo é obrigatório').min(14),
  birthday: yup.string().required('Este campo é obrigatório'),
  phone: yup.string().matches(phoneRegEx, {
    message: 'Número de telefone inválido',
    excludeEmptyString: true,
  }),
});

export default defaulSchema;
