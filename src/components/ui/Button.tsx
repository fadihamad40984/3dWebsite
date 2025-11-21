import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-nebula-primary text-white hover:bg-nebula-primary/80 shadow-[0_0_15px_rgba(157,78,221,0.5)]',
      secondary: 'bg-nebula-secondary text-nebula-bg hover:bg-nebula-secondary/80 shadow-[0_0_15px_rgba(0,243,255,0.5)]',
      outline: 'border border-nebula-primary text-nebula-primary hover:bg-nebula-primary/10',
      ghost: 'text-gray-300 hover:text-white hover:bg-white/5',
    };

    const sizes = {
      sm: 'px-4 py-1.5 text-xs',
      md: 'px-6 py-2 text-sm',
      lg: 'px-8 py-3 text-base',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center rounded-none font-orbitron font-bold uppercase tracking-widest transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, cn };
