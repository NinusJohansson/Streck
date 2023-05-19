import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";


type ButtonProps = {
    className?: String
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export function Button({className = "", ...props }: 
ButtonProps) {

    return <button className={` h-12 px-6 m-2 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm text-center  ${className} `}{...props}></button>
}
