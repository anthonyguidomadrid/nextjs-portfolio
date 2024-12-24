export const getAllCategoryName = (locale?: string) => {
  switch (locale) {
    case 'fr':
      return 'Tous';
    case 'es':
      return 'Todos';
    default:
      return 'All';
  }
};
