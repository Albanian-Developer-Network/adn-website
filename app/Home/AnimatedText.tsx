'use client';

import { useCallback, useEffect, useState } from 'react';

interface AnimatedTextProps {
  texts: string[];
}

export default function AnimatedText(props: AnimatedTextProps) {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(1);
  const [isDeleting, setIsDeleting] = useState(false);

  const cycleText = useCallback(() => {
    setCharIndex(0);
    setIndex(index => (index + 1 > props.texts.length - 1 ? 0 : index + 1));
  }, []);

  const cycleForth = useCallback(() => {
    const text = props.texts[index];

    if (charIndex + 1 > text.length) {
      setIsDeleting(true);
    } else {
      setCharIndex(charIndex => charIndex + 1);
    }
  }, [charIndex]);

  const cycleBack = useCallback(() => {
    if (charIndex == -1) {
      setIsDeleting(false);
      cycleText();
    } else {
      setCharIndex(charIndex => charIndex - 1);
    }
  }, [charIndex]);

  useEffect(() => {
    const interval = setInterval(
      isDeleting ? cycleBack : cycleForth,
      isDeleting ? 75 : 200
    );

    return () => {
      clearInterval(interval);
    };
  }, [charIndex, isDeleting]);

  return props.texts[index].substring(0, charIndex);
}
