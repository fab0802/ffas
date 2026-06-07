import { contactInfo } from "@/data/contact";
import styles from "./ContactGeneralBlock.module.css";

export default function ContactGeneralBlock() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Allgemein</h2>

      <dl className={styles.list}>
        <div className={styles.row}>
          <dt className={styles.label}>E-Mail</dt>
          <dd className={styles.value}>
            <a href={`mailto:${contactInfo.email}`} className={styles.link}>
              {contactInfo.email}
            </a>
          </dd>
        </div>

        {contactInfo.social.length > 0 && (
          <div className={styles.row}>
            <dt className={styles.label}>Social</dt>
            <dd className={styles.value}>
              <ul className={styles.socialList}>
                {contactInfo.social.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      {channel.label} →
                    </a>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        )}
      </dl>
    </section>
  );
}
