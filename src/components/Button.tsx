import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";


type ButtonProps = {
    className?: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export function Button({className = "", ...props }: 
ButtonProps) {

    return <button className={`text-xl py-4 m-2 rounded-lg text-center text backdrop-blur-sm shadow-xl shadow-fuchsia-700/50 ${className} bg-slate-600 self-center`}{...props}></button>
}
