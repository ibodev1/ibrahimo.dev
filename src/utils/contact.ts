import { checkStringValue, respond } from './helpers';
import { db, gte, eq, count, and, Contact } from 'astro:db';

type CheckFormDataProps = {
  name?: FormDataEntryValue;
  surname?: FormDataEntryValue;
  email?: FormDataEntryValue;
  subject?: FormDataEntryValue;
  message?: FormDataEntryValue;
};

const checkFormData = ({ name, surname, email, subject, message }: CheckFormDataProps): Response | null => {
  if (![name, surname, email, subject, message].every(checkStringValue)) {
    const missingField = [name, surname, email, subject, message].findIndex(checkStringValue);
    const fieldNames = ['Name', 'Surname', 'Email', 'Subject', 'Message'];

    return respond(400, false, `${fieldNames[missingField]} is required!`);
  }

  return null;
};

const checkSpamContact = async (email: string): Promise<boolean> => {
  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  const [{ count: contactCount }] = await db
    .select({ count: count() })
    .from(Contact)
    .where(and(gte(Contact.createdAt, oneWeekAgo), eq(Contact.email, email)))
    .execute();

  if (contactCount > 0) {
    throw new Error('You have already been contacted. Please try again after a week.');
  }

  return true;
};

export { type CheckFormDataProps, checkFormData, checkSpamContact };
