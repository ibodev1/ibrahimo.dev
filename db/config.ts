import { column, defineDb, defineTable } from 'astro:db';

const Contact = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    surname: column.text(),
    email: column.text(),
    subject: column.text(),
    message: column.text(),
    createdAt: column.date({ default: new Date() })
  }
});

export default defineDb({
  tables: { Contact }
});
