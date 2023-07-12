import { Form, Row, Col, Alert } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useCategories } from "../../hooks/useCategories";
import { useDrinks } from "../../hooks/useDrinks";

export default function Header() {
  const { categories } = useCategories();
  const { getDrink, loading } = useDrinks();

  const initialValues = {
    name: "",
    category: "",
  };

  const ValidationSchema = Yup.object({
    name: Yup.string().required("El nombre es obligatorio"),
    category: Yup.string().required("Selecciona una categoría"),
  });

  const handleSubmit = (values) => {
    getDrink(values);
  };

}
