import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import SweetAlert from "sweetalert2-react-content";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const FormEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    emailjs
      .sendForm(
        "service_nes24gi",
        "template_d03ar7m",
        e.target,
        "vOv6B7AcclfSr2NBH"
      )
      .then(
        (result) => {
          console.log(result.text);
          MySwal.fire({
            title: "Enviado!",
            text: "El mensaje se despachó correctamente.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          MySwal.fire({
            title: "Oops... hubo un error!",
            text: error.message,
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      );
    // limpiar campos
    e.target.reset();
  };

  return (
    <div class="contact-form">
      <span class="heading">Contact me</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          required=""
          autoComplete="off"
          {...register("name", {
            required: {
              value: true,
              message: "El nombre es requerido",
            },
            maxLength: {
              value: 30,
              message: "Ingresa un máximo de 30 caracteres",
            },
          })}
        />
        {errors.name && (
          <span className="form__input-error">{errors.name.message}</span>
        )}
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          id="inputEmail"
          required=""
          placeholder="***@***.***"
          autoComplete="off"
          {...register("email", {
            required: {
              value: true,
              message: "El mail es requerido",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "El formato no es correcto",
            },
          })}
        />
        {errors.mail && (
          <span className="form__input-error">{errors.mail.message}</span>
        )}
        <label for="message">Message:</label>
        <textarea
          name="message"
          id="formMensaggeId"
          required=""
          {...register("message", {
            required: "El mensaje es requerido",
          })}
        ></textarea>
        {errors.message && (
          <span className="form__input-error">{errors.message.message}</span>
        )}
        <button type="submit" id="button" value="Send Email">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormEmail;
