export const getMediaUrl = (relativeUrl?: string) => {
  if (!relativeUrl) return '';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  return `${baseUrl}${relativeUrl ?? ''}`;
};
