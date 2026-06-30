import SectionTitle from "../components/SectionTitle";
import contact from "../data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-neutral-950 py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">

        <SectionTitle
          title="Let's Connect"
          subtitle="I'm always interested in discussing software engineering, data science, and new opportunities."
        />

        <div className="space-y-6 text-lg">

          <p>
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${contact.email}`}
              className="text-blue-500 hover:underline"
            >
              {contact.email}
            </a>
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub Profile
            </a>
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn Profile
            </a>
          </p>

          <p>
            <strong>Location:</strong> {contact.location}
          </p>

        </div>

      </div>
    </section>
  );
}