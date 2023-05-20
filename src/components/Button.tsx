import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";


type ButtonProps = {
    className?: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export function Button({className = "", ...props }: 
ButtonProps) {

    return <button className={` text-2xl h-1/6 w-full px-6 m-2font-medium rounded-lg text-center backdrop-blur-sm shadow-xl shadow-fuchsia-700/50 ${className} bg-slate-600`}{...props}></button>
}
