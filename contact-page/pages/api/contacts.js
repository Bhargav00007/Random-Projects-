import prisma from '@/lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    try {
      const contact = await prisma.contact.create({
        data: { name, email, message },
      });
      res.status(200).json(contact);
    } catch (error) {
      res.status(500).json({ error: 'Failed to save contact' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
