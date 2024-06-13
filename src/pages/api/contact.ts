import { checkFormData, checkSpamContact } from '@/utils/contact';
import type { APIRoute } from 'astro';
import { db, Contact } from 'astro:db';

export const POST: APIRoute = async (ctx) => {
  try {
    const formData = await ctx.request.formData();
    const name = formData.get('name')?.toString();
    const surname = formData.get('surname')?.toString();
    const email = formData.get('email')?.toString();
    const subject = formData.get('subject')?.toString();
    const message = formData.get('message')?.toString();

    const checkResponse = checkFormData({
      name,
      surname,
      email,
      subject,
      message
    });

    if (checkResponse !== null && checkResponse instanceof Response) {
      return checkResponse;
    }

    await checkSpamContact(email!);

    await db.insert(Contact).values({
      name,
      surname,
      email,
      subject,
      message
    });

    return Response.json(
      {
        success: true,
        message: 'Your contact message has been successfully sent.'
      },
      {
        status: 200
      }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: (error as Error).message
      },
      {
        status: 500
      }
    );
  }
};