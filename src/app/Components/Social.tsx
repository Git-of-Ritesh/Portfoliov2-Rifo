'use client'

import React, { useRef } from 'react'
const SocialIcons = [
  '/twitter.png',
  '/threads.png',
  'linkedin.png',
  '/dribble.png',
  'social.png',
  'github.png',
  'mail.png',
];

const Social: React.FC = () => {

  const socialContainerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = socialContainerRef.current
    if (!container) return;

    const socialIcons = container.querySelectorAll<HTMLImageElement>('.social-icon')

    socialIcons.forEach((socialIcon) => {
      const rect = socialIcon.getBoundingClientRect();
      const CenterX = rect.left + rect.width/2;
      const distance = Math.abs(e.clientX - CenterX);
      const scale = Math.max(1, 1.8 - distance / 100);
      socialIcon.style.transform = `scale(${scale.toFixed(2)})`;
    })
  }

  const restSocailIcons = () => {
    const container = socialContainerRef.current
    if (!container) return;

    const icons = container.querySelectorAll<HTMLImageElement>('.social-icon');
    icons.forEach((icon) => {
      icon.style.transform = 'scale(1)';
    });
  }

  return (
    <div
      ref={socialContainerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={restSocailIcons}
      className='flex gap-6 mt-5'>
      {SocialIcons.map((src, index) => (
        <img key={index} src={src} alt={`icon-${index}`} className="social-icon w-8 h-8 rounded-full transition-all duration-75 ease-out shadow-xl shadow-gray-400" />
      ))}
    </div>
  )
}

export default Social