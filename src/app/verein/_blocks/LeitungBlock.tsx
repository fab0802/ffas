import Image from "next/image";
import { getAllFunctionaries } from "@/helpers";
import styles from "./LeitungBlock.module.css";

function getInitials(firstName: string, lastName: string): string {
  return `${firstName[0] ?? ""}${lastName[0] ?? ""}`.toUpperCase();
}

export default async function LeitungBlock() {
  const functionaries = await getAllFunctionaries();

  return (
    <section
      id="leitung"
      className={styles.block}
      aria-labelledby="leitung-title"
    >
      <header className={styles.header}>
        <p className={styles.eyebrow}>03 — Leitung</p>
        <h2 id="leitung-title" className={styles.title}>
          Wer FFAS <em>trägt</em>
        </h2>
        <p className={styles.lead}>
          FFAS hat keinen Vorstand im klassischen Vereinssinn — aber Menschen,
          die das Ganze tragen, organisieren und nach aussen vertreten.
        </p>
      </header>

      <ul className={styles.grid}>
        {functionaries.map((person) => {
          const fullName = `${person.firstName} ${person.lastName}`;
          return (
            <li key={person.slug} className={styles.card}>
              <div className={styles.avatar}>
                {person.image ? (
                  <Image
                    src={person.image}
                    alt={fullName}
                    width={180}
                    height={180}
                    className={styles.photo}
                  />
                ) : (
                  <span className={styles.initials} aria-hidden="true">
                    {getInitials(person.firstName, person.lastName)}
                  </span>
                )}
              </div>

              <div className={styles.info}>
                <p className={styles.role}>{person.role}</p>
                <h3 className={styles.name}>{fullName}</h3>

                {(person.email || person.phone) && (
                  <ul className={styles.contacts}>
                    {person.email && (
                      <li>
                        <a
                          href={`mailto:${person.email}`}
                          className={styles.contactLink}
                        >
                          {person.email}
                        </a>
                      </li>
                    )}
                    {person.phone && (
                      <li>
                        <a
                          href={`tel:${person.phone.replace(/\s/g, "")}`}
                          className={styles.contactLink}
                        >
                          {person.phone}
                        </a>
                      </li>
                    )}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
