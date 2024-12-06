import React, { useState } from 'react';
import ArduinoData from '../../../../../assets/Arduino/jsons/Arduino.json';
import ArduinoUnoSVG from '../../../../../assets/Arduino/images/components/ArduinoUno.svg';
import Pin from '../Common/Pin';
import Wire from '../Common/Wire';
import { WireProvider } from '../Common/WireContext';
import './ArduinoUno.css';

const ArduinoUno = () => {
  const { draw, pins } = ArduinoData;
  const [hoveredPin, setHoveredPin] = useState(null);
  const scaleFactor = 350 / 456;

  const handleMouseEnter = (pin) => setHoveredPin(pin);
  const handleMouseLeave = () => setHoveredPin(null);

  return (
    <WireProvider>
      <div className="component-container">
        <svg width="350" height="260" className="component-svg" style={{ background: 'transparent' }}>
          <defs>
            <clipPath id="arduinoClip">
              <path d="M0,0 L350,0 L350,260 L0,260 Z" />
            </clipPath>
          </defs>
          <g clipPath="url(#arduinoClip)">
            <image href={ArduinoUnoSVG} width="350" height="260" className="component-image" />
            {draw.map((element, index) => (
              element.type === 'rectangle' && (
                <rect
                  key={index}
                  width={element.width * scaleFactor}
                  height={element.height * scaleFactor}
                  x={element.x * scaleFactor}
                  y={element.y * scaleFactor}
                  fill={element.fill}
                />
              )
            ))}
            <path
               
              fill="none"
            />
            {pins.map((pin, index) => (
              <Pin
                key={index}
                pin={pin}
                scaleFactor={scaleFactor}
                hoveredPin={hoveredPin}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            ))}
            <Wire />
          </g>
        </svg>
      </div>
    </WireProvider>
  );
};

export default ArduinoUno;