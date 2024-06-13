import { db, gte, eq, count, and, Contact } from 'astro:db';

type CheckFormDataProps = {
  name?: string | undefined;
  surname?: string | undefined;
  email?: string | undefined;
  subject?: string | undefined;
  message?: string | undefined;
};

const checkFormData = ({
  name,
  surname,
  email,
  subject,
  message
}: CheckFormDataProps): Response | null => {
  if (typeof name !== 'string' || name.trim() === '') {
    return Response.json(
      {
        success: false,
        message: 'Name is required!'
      },
      {
        status: 400
      }
    );
  }

  if (typeof surname !== 'string' || surname.trim() === '') {
    return Response.json(
      {
        success: false,
        message: 'Surnname is required!'
      },
      {
        status: 400
      }
    );
  }

  if (typeof email !== 'string' || email.trim() === '') {
    return Response.json(
      {
        success: false,
        message: 'Email is required!'
      },
      {
        status: 400
      }
    );
  }

  if (typeof subject !== 'string' || subject.trim() === '') {
    return Response.json(
      {
        success: false,
        message: 'Subject is required!'
      },
      {
        status: 400
      }
    );
  }

  if (typeof message !== 'string' || message.trim() === '') {
    return Response.json(
      {
        success: false,
        message: 'Message is required!'
      },
      {
        status: 400
      }
    );
  }

  return null;
};

const checkSpamContact = async (email: string): Promise<boolean> => {
  const date = new Date();
  date.setDate(date.getDate() - 7);

  const contactCounts = await db
    .select({ count: count() })
    .from(Contact)
    .where(and(gte(Contact.createdAt, date), eq(Contact.email, email)))
    .execute();

  if (!contactCounts || !Array.isArray(contactCounts)) return true;

  const contactCount: number = Number(contactCounts.find(Boolean)?.count);

  if (!Number.isNaN(contactCount) && contactCount > 0) {
    throw new Error('You have already been contacted please try after a week.');
  }

  return true;
};

export { type CheckFormDataProps, checkFormData, checkSpamContact };
