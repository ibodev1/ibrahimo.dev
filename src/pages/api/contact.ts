import { checkFormData, checkSpamContact } from '@/utils/contact';
import { respond } from '@/utils/helpers';
import type { APIRoute } from 'astro';
import { db, Contact } from 'astro:db';

export const POST: APIRoute = async (ctx) => {
  try {
    const formData = await ctx.request.formData();
    const { name, surname, email, subject, message } = Object.fromEntries(formData.entries());

    const userAgent = ctx.request.headers.get('User-Agent');

    const checkResponse = checkFormData({ name, surname, email, subject, message });
    if (checkResponse instanceof Response) return checkResponse;

    await checkSpamContact(email as string);

    await db.insert(Contact).values({
      name: name as string,
      surname: surname as string,
      email: email as string,
      subject: subject as string,
      message: message as string,
      userAgent
    });

    return respond(200, true, 'Your contact message has been successfully sent.');
  } catch (error) {
    return respond(500, false, (error as Error).message);
  }
};
