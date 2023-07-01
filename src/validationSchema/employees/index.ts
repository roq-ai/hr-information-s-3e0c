import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  vacation_data: yup.string(),
  payroll_data: yup.string(),
  company_id: yup.string().nullable(),
});
