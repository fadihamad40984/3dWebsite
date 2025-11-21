import { type HTMLAttributes, forwardRef, useEffect, useRef } from 'react';
import { cn } from './Button';
import { useInView } from 'framer-motion';
import { useStore } from '../../store/useStore';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id: string;
  sectionIndex?: number;
}

const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ className, id, sectionIndex, children, ...props }, _ref) => {
    const internalRef = useRef(null);
    const isInView = useInView(internalRef, { margin: "-50% 0px -50% 0px" });
    const setCurrentSection = useStore((state) => state.setCurrentSection);

    useEffect(() => {
      if (isInView && sectionIndex !== undefined) {
        setCurrentSection(sectionIndex);
      }
    }, [isInView, sectionIndex, setCurrentSection]);

    return (
      <section
        ref={internalRef}
        id={id}
        className={cn('relative w-full py-20 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center', className)}
        {...props}
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          {children}
        </div>
      </section>
    );
  }
);

SectionWrapper.displayName = 'SectionWrapper';

export default SectionWrapper;
