'use client';

import { useEffect } from 'react';

export default function ScrollTop() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, []);

  return null;
}
