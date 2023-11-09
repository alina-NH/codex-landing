export const isMobile = () => {
  return process.client ? window.innerWidth < 768 : false
};