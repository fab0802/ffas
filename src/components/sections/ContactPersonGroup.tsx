import type { Person } from "@/types/person";
import PersonContactCard from "../cards/PersonContactCard";
import styles from "./ContactPersonGroup.module.css";

export type ContactPersonGroupProps = {
  heading: string;
  subheading?: string;
  persons: Array<{
    person: Person;
    roleLabel: string;
  }>;
};

export default function ContactPersonGroup({
  heading,
  subheading,
  persons,
}: ContactPersonGroupProps) {
  if (persons.length === 0) return null;

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        {subheading && <div className={styles.subheading}>{subheading}</div>}
        <h2 className={styles.heading}>{heading}</h2>
      </header>

      <div className={styles.grid}>
        {persons.map(({ person, roleLabel }) => (
          <PersonContactCard
            key={person.slug}
            person={person}
            roleLabel={roleLabel}
          />
        ))}
      </div>
    </section>
  );
}
