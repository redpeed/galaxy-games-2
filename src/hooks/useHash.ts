'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'


const useHash = () => {
  const [hash, setHash] = useState('');

  useEffect(() => {
    // Set initial hash
    setHash(window.location.hash);

    // Create event handler
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  return hash;
}

export default useHash;