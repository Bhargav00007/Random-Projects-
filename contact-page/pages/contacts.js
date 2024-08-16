import prisma from '@/lib/db';

export async function getServerSideProps() {
  const contacts = await prisma.contact.findMany();
  return {
    props: { contacts },
  };
}

export default function Contacts({ contacts }) {
  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.message}</p>
            <p>{new Date(contact.createdAt).toLocaleString()}</p>
            <hr/>
          </li>
        ))}
      </ul>
    </div>
  );
}
