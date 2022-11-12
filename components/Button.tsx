import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const button = cva("inline-block rounded-md font-bold", {
  variants: {
    intent: {
      primary: "text-cream bg-dark py-4 px-8 text-lg hover:bg-gradient-to-br from-purple via-[#CB30E3] to-orange",
      secondary: "text-dark bg-white py-3 px-4 border border-dark text-sm md:text-base md:px-6 hover:bg-dark hover:text-light",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
})

export interface ButtonProps extends React.HTMLAttributes<HTMLAnchorElement>, VariantProps<typeof button> {}

export const Button:React.FC<ButtonProps> = ({className, intent, ...props}) => (
  <a href="#" className={`${ button({ intent, class: className }) } `} {...props}>Request Beta Access</a>
);