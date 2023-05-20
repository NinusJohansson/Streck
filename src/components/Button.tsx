import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const filterbg = (
<svg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'>
  <filter id='noiseFilter'>
    <feTurbulence 
      type='fractalNoise' 
      baseFrequency='1' 
      numOctaves='3' 
      stitchTiles='stitch'/>
  </filter>
  
  <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
</svg>
)

type ButtonProps = {
    className?: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export function Button({className = "", ...props }: 
ButtonProps) {

    return <button className={` text-2xl h-1/6 w-full px-6 m-2font-medium rounded-lg text-center backdrop-blur-sm shadow-xl shadow-fuchsia-700/50 ${className} bg-slate-600`}{...props}></button>
}
