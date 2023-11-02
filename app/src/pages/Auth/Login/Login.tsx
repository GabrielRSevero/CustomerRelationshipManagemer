import { Form, Formik } from "formik"
import { Box, Input } from "../../../components"
import { EyeIcon, EyeSlashIcon, LockClosedIcon, UserCircleIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import { Link } from "react-router-dom"
import { AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

interface IForm {
  email: string
  password: string
}

const social = [
  {
    label: "GabrielRSevero",
    link: "https://www.linkedin.com/in/gabrielrogeriosevero/",
    icon: <AiFillGithub className="w-10 h-10 text-black" />
  },
  {
    label: "gabrielrogeriosevero",
    link: "https://www.linkedin.com/in/gabrielrogeriosevero/",
    icon: <AiFillLinkedin className="w-10 h-10 text-[#007fbc]" />
  },
  {
    label: "gabrielrogeriosevero@gmail.com",
    link: "mailto:gabrielrogeriosevero@gmail.com",
    icon: <BiLogoGmail className="w-10 h-10 text-red-400" />
  },
  {
    label: "Gabriel Severo",
    link: "https://api.whatsapp.com/send?phone=5566996709422&text=Olá",
    icon: <AiOutlineWhatsApp className="w-10 h-10 text-green-400" />
  },
]

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)

  const initialValues: IForm = {
    email: "",
    password: "",
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (values: IForm, { setSubmitting }: any) => {
    console.log(values)
    setSubmitting(false)
  }

  return (
    <Box className="h-full flex flex-col justify-center items-center bg-orange-50 gap-16">
      <Box className="font-bold text-slate-800 text-xl font-josefin">Bem vindo ao seu gerenciador de relacionamentos!</Box>
      <Box className="flex flex-col justify-center items-center bg-white shadow-xl w-[600px] p-10 gap-10">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, handleChange }) => (
            <Form className="w-full grid gap-4">

              <Input 
                label="Seu e-mail" 
                placeholder="email.example@gmail.com" 
                onChange={handleChange("email")}
                before={<UserCircleIcon className="w-7 h-7 ml-2" />} 
              />

              <Input 
                label="Sua senha" 
                placeholder="********" 
                onChange={handleChange("password")} 
                before={<LockClosedIcon className="w-7 h-7 ml-2" />} 
                type={showPassword ? "text" : "password"}
                after={
                  <button type="button" onClick={handleShowPassword}>
                    {showPassword ? (
                      <EyeSlashIcon className="w-7 h-7 mr-2" /> 
                      ) : (
                      <EyeIcon className="w-7 h-7 mr-2" />
                    )}
                  </button>
                }
              />

              <button className="py-3 w-[80%] mx-auto rounded-full bg-gradient-to-r from-green-600 to-green-400 text-white font-bold mt-8" type="submit" disabled={isSubmitting}>
                Sign in
              </button>
      
            </Form>
          )}
        </Formik>

        <Box className="flex w-full justify-around">
          <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to="#">Não tem uma conta?</Link>
          <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to="#">Esqueceu sua senha?</Link>
        </Box>
      </Box>

      <Box className="flex gap-3 fixed bottom-12">
        {social.map((item, key) => 
          <Link target="_blank" key={key} className="flex gap-3 items-center justify-center border border-slate-300 shadow-sm rounded py-2 px-4 font-medium text-blue-600 dark:text-blue-500 hover:underline" to={item.link}>
            {item.icon}
            {item.label}
          </Link>
        )}
      </Box>
    </Box>
  )
}

export default Login