export const checkStringValue = (value?: string | FormDataEntryValue | null): boolean => {
  return typeof value === 'string' && value.trim() !== '';
};

export const respond = (status: number, success: boolean, message: string): Response => {
  return new Response(
    JSON.stringify({
      status,
      success,
      message
    }),
    {
      status,
      headers: { 'Content-Type': 'application/json' }
    }
  );
};
