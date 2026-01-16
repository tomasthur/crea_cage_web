'use client';

import { useEffect, useRef, ReactNode, useState } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'fade-in';
  delay?: number;
  className?: string;
}

export default function AnimateOnScroll({ 
  children, 
  animation = 'fade-in-up',
  delay = 0,
  className = '' 
}: AnimateOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setTimeout(() => {
              element.classList.add(`animate-${animation}`);
              setHasAnimated(true);
            }, delay);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '50px',
      }
    );

    // Okamžite skontroluj, či je prvok už viditeľný
    const checkInitialVisibility = () => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible && !hasAnimated) {
        setTimeout(() => {
          element.classList.add(`animate-${animation}`);
          setHasAnimated(true);
        }, delay);
      }
    };

    // Malý delay pre správne meranie po načítaní stránky
    setTimeout(checkInitialVisibility, 100);
    
    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [animation, delay, hasAnimated]);

  return (
    <div ref={elementRef} className={`opacity-0-init ${className}`}>
      {children}
    </div>
  );
}
