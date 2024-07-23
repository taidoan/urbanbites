import React from "react";

/**
 * Custom React hook to determine if the current viewport matches a given media query.
 *
 * @param {string} query - The media query string to evaluate, e.g., `(min-width: 600px)`.
 *
 * @returns {boolean} `true` if the viewport matches the media query, `false` otherwise.
 *
 * @example
 * ```typescript
 * import useMediaQuery from './path/to/useMediaQuery';
 *
 * const isMobile = useMediaQuery('(max-width: 767px)');
 *
 * return (
 *   <div>
 *     {isMobile ? 'Mobile view' : 'Desktop view'}
 *   </div>
 * );
 * ```
 */
const useMediaQuery: (query: string) => boolean = (query) => {
  const [matches, setMatches] = React.useState<boolean>(false);

  React.useEffect(() => {
    const matchQueryList = window.matchMedia(query);

    // Set the initial state based on the current match
    if (matchQueryList.matches !== matches) {
      setMatches(matchQueryList.matches);
    }

    // Event handler for when the media query result changes
    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // Add event listener for changes in media query
    matchQueryList.addEventListener("change", handleChange);

    // Cleanup event listener on component unmount or query change
    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [query, matches]); // Add `matches` to dependency array to handle state changes

  return matches;
};

export default useMediaQuery;
