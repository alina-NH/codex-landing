export const isTablet = () => {
  return process.client ? window.innerWidth < 1024 : false
};