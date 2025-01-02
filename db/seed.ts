import { db, Contact } from 'astro:db';

export default async function () {
  await db.insert(Contact).values([
    {
      name: 'İbrahim',
      surname: 'Ödev',
      email: 'seed@email.com',
      subject: 'Subject!',
      message: 'Message Content!',
      userAgent: 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'
    },
    {
      name: 'İbrahim',
      surname: 'Ödev',
      email: 'seed.two@email.com',
      subject: 'Subject Two!',
      message: 'Message Content \n Two!',
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0'
    }
  ]);
}
