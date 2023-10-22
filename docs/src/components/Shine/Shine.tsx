import { morfeo } from '@/morfeo';
import React, { ReactNode, useEffect, useId, useRef, useState } from 'react';

const classes = morfeo.css({
  main: {
    pointerEvents: 'none',
  },
  container: {
    pointerEvents: 'none',
    isolation: 'isolate',
  },
  svg: {
    position: 'fixed',
    top: 'raw:0',
    right: 'raw:0',
    bottom: 'raw:0',
    left: 'raw:0',
    width: '100',
    height: '100',
    pointerEvents: 'none',
    zIndex: 'raw:-1',
  },
});

const LIGHTING_COLOR = morfeo.theme.getValue('colors', 'gray');
const STD_DEVIATION = 1.5;
const LIGHT_RADIUS = 300;

type ShineProps = {
  color?: string;
  radius?: number;
  spread?: number;
  className?: string;
  children: ReactNode;
};

export function Shine({ color, radius, spread, ...props }: ShineProps) {
  const filterId = useId();
  const lightingColor = color || LIGHTING_COLOR;
  const lightRadius = radius || LIGHT_RADIUS;
  const stdDeviation = spread || STD_DEVIATION;

  const [mouse, setMouse] = useState({ x: 60, y: 60 });
  const [wrapperBox, setWrapperBox] = useState({ left: 0, top: 0 });
  const wrapperEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerMove(e: PointerEvent) {
      onScroll();
      setMouse({ x: e.clientX, y: e.clientY });
    }

    function onScroll() {
      const rect = wrapperEl.current?.getBoundingClientRect();
      if (rect) {
        setWrapperBox(rect);
      }
    }

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div {...props} className={classes('main', props.className)}>
      <svg width="0" height="0" className={classes('svg')}>
        <filter id={filterId} colorInterpolationFilters="sRGB">
          <feGaussianBlur in="SourceAlpha" stdDeviation={stdDeviation} />
          <feSpecularLighting
            result="light-source"
            surfaceScale="2"
            specularConstant="0.75"
            specularExponent="120"
            lightingColor={lightingColor}
          >
            <fePointLight
              x={mouse.x - wrapperBox.left}
              y={mouse.y - wrapperBox.top}
              z={lightRadius}
            />
          </feSpecularLighting>

          <feComposite
            result="reflections"
            in="light-source"
            in2="SourceAlpha"
            operator="in"
          />

          <feComposite
            in="SourceGraphic"
            in2="reflections"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
          />
        </filter>
      </svg>
      <div
        className={classes('container')}
        style={{ filter: `url(#${filterId})` }}
        ref={wrapperEl}
      >
        {props.children}
      </div>
    </div>
  );
}
