'use client'
import React, { useState, useEffect } from 'react';
import s from './styles.module.scss';

type AvatarProps = {
  fullName: string;
};

const getInitials = (name: string): string => {
  const names = name.split(' ');
  if (names.length === 1) {
    return names[0].charAt(0).toUpperCase();
  }
  return names.map(name => name.charAt(0).toUpperCase()).join('');
};

const Avatar = ({ fullName }: AvatarProps) => {
  const [randomClass, setRandomClass] = useState('');

  useEffect(() => {
    const avatarClasses = [s.avatarSalmon, s.avatarBlue, s.avatarGreen, s.avatarPurple, s.avatarYellow, s.avatarPink];
    const chosenClass = avatarClasses[Math.floor(Math.random() * avatarClasses.length)];
    setRandomClass(chosenClass);
  }, []); // Empty dependency array ensures this runs only once on client mount

  const initials = getInitials(fullName);

  return (
    <div className={`${s.avatar} ${randomClass}`}>
      {initials}
    </div>
  );
};

export default Avatar;
