import { cn } from '@/utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import LoaderSpinner from './LoaderSpinner'

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    variant?: 'primary' 
    isLoading?: boolean
    isSuccess?: boolean
}

export default function Button({
    className,
    variant,
    children,
    isLoading,
    isSuccess,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            className={cn(
                buttonVariants({ variant }),
                className,
                `flex items-center justify-center ${(isLoading || isSuccess) && 'pointer-events-none'}`
            )}>
            {isLoading ? <LoaderSpinner /> : children}
        </button>
    )
}

export const buttonVariants = cva(
    'px-2.5 py-2 flex items-center justify-center cursor-pointer  rounded-[8px] text-[16px]  font-medium tracking-wide focus:outline-0  hover:opacity-80',
    {
        variants: {
            variant: {
                primary: 'bg-primary text-white rounded-full px-5 whitespace-nowrap',
            }
        },
        defaultVariants: {
            variant: 'primary'
        }
    }
)
