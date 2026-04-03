import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#C9A571] focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-[#1E3A5F] text-[#C9A571] hover:bg-[#112544] shadow-sm',
        outline: 'border-2 border-[#1E3A5F] text-[#1E3A5F] bg-transparent hover:bg-[#1E3A5F] hover:text-white shadow-sm',
        ghost: 'text-[#1E3A5F] hover:bg-[#1E3A5F]/10',
        gold: 'bg-[#C9A571] text-[#1E3A5F] hover:bg-[#b8935f]',
      },
      size: {
        default: 'h-12 px-8 py-3 text-base',
        sm: 'h-9 px-5 py-2 text-sm',
        lg: 'h-14 px-10 py-4 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
