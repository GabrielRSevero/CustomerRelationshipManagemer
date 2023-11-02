import { ReactNode } from "react"

interface IBox {
  className?: string
  children?: ReactNode
}

export const Box = ({ children, className }: IBox) => {
  return (
    <div className={className}>{children}</div>
  )
}