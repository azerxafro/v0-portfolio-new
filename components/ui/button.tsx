import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        default:
          "bg-gradient-to-r from-purple-700 to-purple-500 text-black font-medium hover:opacity-90 transition-opacity",
=======
        default: "bg-gradient-to-r from-[#5416B4] to-[#7027C3] text-white hover:opacity-90 transition-opacity",
>>>>>>> Stashed changes
=======
        default: "bg-gradient-to-r from-[#5416B4] to-[#7027C3] text-white hover:opacity-90 transition-opacity",
>>>>>>> Stashed changes
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-text-primary underline-offset-4 hover:underline",
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        gradient:
          "bg-gradient-to-r from-purple-700 to-purple-500 text-black font-medium hover:opacity-90 transition-opacity",
=======
        gradient: "bg-gradient-to-r from-[#5416B4] to-[#7027C3] text-white hover:opacity-90 transition-opacity",
>>>>>>> Stashed changes
=======
        gradient: "bg-gradient-to-r from-[#5416B4] to-[#7027C3] text-white hover:opacity-90 transition-opacity",
>>>>>>> Stashed changes
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

