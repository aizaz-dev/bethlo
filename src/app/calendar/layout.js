export const metadata = {
  title: "Calendar",
  description: "View upcoming services and events at Bethlehem Lutheran Church.",
  keywords: ["Calendar", "Events", "Schedule", "Services", "Bethlehem Lutheran Church", "Baudette", "Minnesota"],
  alternates: { canonical: "/calendar" },
  openGraph: { title: "Calendar", url: "/calendar", images: ["/og-default.jpg"] },
};

export default function Layout({ children }) {
  return children;
}