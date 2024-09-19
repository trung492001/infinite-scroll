export function debounce(
  func: (...args: any[]) => void,
  delay: number
): (...args: any[]) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function executedFunc(...args: any[]): void {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func(...args);
      timeout = null;
    }, delay);
  };
}
