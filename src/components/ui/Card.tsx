import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from './Button';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'solid' | 'outline';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'glass', children, ...props }, ref) => {
    const variants = {
      glass: 'bg-white/5 backdrop-blur-md border border-white/10 hover:border-nebula-primary/50 transition-colors duration-300',
      solid: 'bg-nebula-bg border border-white/5',
      outline: 'bg-transparent border border-white/20',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl p-6 overflow-hidden relative group',
          variants[variant],
          className
        )}
        {...props}
      >
        {/* Hover Glow Effect */}
        <div className="absolute -inset-px bg-gradient-to-r from-nebula-primary/0 via-nebula-primary/0 to-nebula-primary/0 group-hover:via-nebula-primary/20 transition-all duration-500 opacity-0 group-hover:opacity-100 blur-sm -z-10" />
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
