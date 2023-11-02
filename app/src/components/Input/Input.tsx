import { ChangeEvent } from "react"
import { Box } from ".."

interface IInput {
  onChange?: (event: any) => void
  name?: string
  label?: string
  placeholder?: string
  before?: any
  after?: any
  type?: string
}

export const Input = ({ onChange, name, label, placeholder, before, after, type }: IInput) => {

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event)
  }

  return (
    <Box className="flex flex-col w-full gap-2">
      {label && (
        <label htmlFor={name}>{label}</label>
      )}
      <Box className="flex border border-slate-500">
        {before && (
          <Box className="flex justify-center items-center">
            {before}
          </Box> 
        )}
        <input className="flex-1 outline-none rounded-sm py-2 px-3" type={type || "text"} name={name} placeholder={placeholder} onChange={handleChange} />
        {after && (
          <Box className="flex justify-center items-center">
            {after}
          </Box> 
        )}
      </Box>
    </Box>
  )
}