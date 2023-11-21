import { useState } from "react"

export const useFormChange = (initialForm = {}, validations = {}) => {

  const [values, setValues] = useState(initialForm)
  const [errors, setErrors] = useState({});
  const [visibleErrors, setVisibleErrors] = useState({});


    const handleInputChange = (e) => {

      const { type, name, checked, value } = e.target

        // Validación numérica para type number
        if (validations[name] === "number" && !/^\d*\.?\d*$/.test(value)) {
          setErrors({
            ...errors,
            [name]: "Debe ser un valor numérico",
          });
          setVisibleErrors({
            ...visibleErrors,
            [name]: true,
          });
          console.error(`Error en ${name}: ${errors[name]}`);
          return;
        }

      const numericValue = validations[name] === "number" ? parseFloat(value) : value;

        // Validación específica para el campo precio
        if (name === "precio" && numericValue < 1) {
          setErrors({
            ...errors,
            [name]: "El precio debe ser mayor o igual a 1",
          });
          setVisibleErrors({
            ...visibleErrors,
            [name]: true,
          });
          console.error(`Error en ${name}: ${errors[name]}`);
          return;
        }

        // Validación específica para el campo stock
        if (name === "stock" && numericValue < 0) {
          setErrors({
            ...errors,
            [name]: "El stock debe ser mayor o igual a 0",
          });
          setVisibleErrors({
            ...visibleErrors,
            [name]: true,
          });
          console.error(`Error en ${name}: ${errors[name]}`);
          return;
        }

        setValues({
          ...values,
          [name]: type === "checkbox" ? checked : numericValue,
        })
    };

  return [values, setValues, handleInputChange]

}