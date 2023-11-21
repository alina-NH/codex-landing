import defaultContent from '../content/default.json';

export const showAlert = (currentAlert: Alert, newAlert: Alert) => {
  currentAlert.type = newAlert.type;

  if (newAlert.type === AlertType.error) {
    currentAlert.message = isCustomError(newAlert.message)
      ? newAlert.message
      : defaultContent.serverErrors.defaultError;
  } else {
    currentAlert.message = newAlert.message;
  }

  currentAlert.isVisible = newAlert.isVisible;
  
  window.setTimeout(() => {
    currentAlert.isVisible = false;
  }, 5000);
};

const isCustomError = (message: string) => {
  const customErrors = [
    ...Object.values(defaultContent.formErrors).map(error => Object.values(error)).flat(),
    ...Object.values(defaultContent.serverErrors),
  ];

  return customErrors.includes(message);
};