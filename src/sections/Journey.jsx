import SectionTitle from "../components/SectionTitle";
import TimelineItem from "../components/TimelineItem";

export default function Journey() {
  return (
    <section id="journey" className="bg-black px-6 py-24">
      <div className="max-w-5xl mx-auto">

        <SectionTitle
          title="My Journey"
          subtitle="The experiences that shaped my transition into technology."
        />

        <TimelineItem
          year="South Africa"
          title="BSc Genetics"
          location="Completed"
          description="Built a strong foundation in scientific research, critical thinking, and data analysis."
        />

        <TimelineItem
          year="Hungary"
          title="BSc Computer Science"
          location="University of Nyíregyháza"
          description="Currently studying software engineering, algorithms, databases, and computer science fundamentals."
        />

        <TimelineItem
          year="Professional Certificates"
          title="IBM Data Analysis"
          location="IBM"
          description="Learned Python, SQL, data visualization, and analytical techniques."
        />

        <TimelineItem
          year="Professional Certificates"
          title="Microsoft Backend Development"
          location="Microsoft"
          description="Strengthened backend development skills and software engineering practices."
        />

        <TimelineItem
          year="Current"
          title="Cybersecurity"
          location="TryHackMe"
          description="Learning Linux, networking, web security, and offensive security while exploring Red Teaming."
        />

      </div>
    </section>
  );
}