import type { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
