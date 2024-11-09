export const checkStringValue = (value?: string | FormDataEntryValue | null): boolean => {
  return typeof value === 'string' && value.trim() !== '';
};

export const respond = <T = any>(status: number, success: boolean, message: string, data?: T): Response => {
  return new Response(
    JSON.stringify({
      status,
      success,
      message,
      data
    }),
    {
      status,
      headers: { 'Content-Type': 'application/json' }
    }
  );
};
