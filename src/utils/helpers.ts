export const checkStringValue = (value?: string | FormDataEntryValue | null): boolean => {
  return typeof value === 'string' && value.trim() !== '';
};
