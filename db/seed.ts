import { db, Contact } from 'astro:db';

export default async function () {
  await db.insert(Contact).values([
    {
      name: 'İbrahim',
      surname: 'Ödev',
      email: 'seed@email.com',
      subject: 'Subject!',
      message: 'Message Content!'
    }
  ]);
}
