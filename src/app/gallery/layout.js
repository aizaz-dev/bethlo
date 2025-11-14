export const metadata = {
  title: "Gallery",
  description: "Photos from Bethlehem Lutheran Church community and events.",
  keywords: ["Gallery", "Photos", "Community", "Events", "Church", "Bethlehem Lutheran Church", "Baudette"],
  alternates: { canonical: "/gallery" },
  openGraph: { title: "Gallery", url: "/gallery", images: ["/og-default.jpg"] },
};

export default function Layout({ children }) {
  return children;
}