export const scrollTo = (element: string) => {
  return window.scrollTo({
    top: (document.querySelector(element) as HTMLElement).offsetTop ?? 0,
    behavior: 'smooth',
  });
};