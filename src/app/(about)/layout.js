import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "20+ Projects Completed 📂",
  "Eager to Grow as a Frontend Developer 🌱",
  "Driven to Exceed Expectations 🌟",
  "Growing Developer 👨‍💻",
  "Certified in Full Stack Development 🎓",
  "Contributed to Group Learning Sessions 📝",
  "Awarded for Excellence in Web Development Projects🏆",
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
