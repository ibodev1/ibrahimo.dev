import { column, defineDb, defineTable, NOW } from 'astro:db';

const Contact = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    surname: column.text(),
    email: column.text(),
    subject: column.text(),
    message: column.text(),
    userAgent: column.text({ optional: true }),
    createdAt: column.date({ default: NOW })
  }
});

export default defineDb({
  tables: { Contact }
});
