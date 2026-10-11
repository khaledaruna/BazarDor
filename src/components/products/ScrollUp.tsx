"use client";

import { useEffect } from "react";

interface ScrollToTopProps {
  slug: string;
}

const ScrollUp = ({ slug }: ScrollToTopProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return null;
};

export default ScrollUp;