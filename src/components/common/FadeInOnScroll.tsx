import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface Props {
  children: JSX.Element;
}

const FadeInWrapper = styled.div`
  animation: fadeIn 0.8s ease-in;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const FadeInOnScroll = ({ children }: Props): JSX.Element => {
  const [scrolledIn, setScrolledIn] = useState(false);
  const elementRef = useRef<HTMLDivElement|null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setScrolledIn(true);
        }
      });
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    }
  }, []);

  return (
    <div ref={elementRef}> 
      {scrolledIn && <FadeInWrapper>{children}</FadeInWrapper>}
    </div>
  )
}