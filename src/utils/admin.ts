import { createId } from '@paralleldrive/cuid2';
import { db, Admin, eq, NOW } from 'astro:db';

export const generateRandomPassword = (): string => createId();

export const upsertAdminPassword = async (password: string) => {
  const adminEqual = eq(Admin.id, 1);
  const adminSettings = await db.select().from(Admin).where(adminEqual);
  const hasPassword = !!adminSettings.find(Boolean);

  if (hasPassword) {
    await db.update(Admin).set({ password, updatedAt: NOW }).where(adminEqual).execute();
  } else {
    await db.insert(Admin).values({ password }).execute();
  }
};

export const checkLastAdminPassword = async (password: string): Promise<boolean> => {
  const adminEqual = eq(Admin.id, 1);
  const adminSettings = await db.select().from(Admin).where(adminEqual);
  const admin = adminSettings?.find(Boolean);
  if (!admin) return false;

  return admin.password === password;
};
