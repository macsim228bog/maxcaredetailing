import React, { useEffect, useRef, useState } from 'react';

// Поддерживаем направления: снизу-вверх, слева-направо, справа-налево
type Direction = 'up' | 'left' | 'right' | 'none';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
}

const FadeIn = ({ children, delay = 0, direction = 'up' }: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Как только 10% блока появляется на экране — запускаем анимацию
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Анимируем только один раз
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Стартовые позиции для разных направлений
  const directions = {
    up: 'translate-y-12',
    left: '-translate-x-12',
    right: 'translate-x-12',
    none: 'translate-y-0 translate-x-0'
  };

  return (
    <div
      ref={ref}
      // duration-1000 дает очень плавное и дорогое появление (1 секунда)
      className={`transition-all duration-1000 ease-out will-change-[opacity,transform] ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${directions[direction]}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;