import Image from "next/image";
import type { Person } from "@/types/person";
import styles from "./PersonContactCard.module.css";

export type PersonContactCardProps = {
  person: Person;
  roleLabel: string;
};

function initials(person: Person): string {
  return `${person.firstName[0] ?? ""}${person.lastName[0] ?? ""}`.toUpperCase();
}

export default function PersonContactCard({
  person,
  roleLabel,
}: PersonContactCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.avatar}>
        {person.image ? (
          <Image
            src={person.image}
            alt=""
            fill
            sizes="80px"
            className={styles.avatarImage}
          />
        ) : (
          <span className={styles.avatarFallback}>{initials(person)}</span>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.role}>{roleLabel}</div>
        <h3 className={styles.name}>
          {person.firstName} {person.lastName}
        </h3>

        <ul className={styles.contacts}>
          <li>
            <a
              href={`mailto:${person.email}`}
              className={styles.link}
              aria-label={`E-Mail an ${person.firstName} ${person.lastName}`}
            >
              {person.email}
            </a>
          </li>
          <li>
            <a
              href={`tel:${person.phone.replace(/\s+/g, "")}`}
              className={styles.linkPhone}
              aria-label={`${person.firstName} ${person.lastName} anrufen`}
            >
              {person.phone}
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}
