export default function CommunionPage() {
  const paragraphs = [
    `The Holy Eucharist is the Body and Blood of Our Lord Jesus Christ for repentant sinners to eat and drink. As we celebrate the Sacrament we also give public confession to our unity in the Christian faith.`,

    `Bethlehem Evangelical Lutheran Church and her Pastor hold unreservedly to the teachings of the Evangelical Lutheran Confessions contained in the 1580 Book of Concord. We understand this doctrine to be the correct interpretation of the Scriptures and a true exposition of the holy catholic (universal) faith.`,

    `Being mindful of the Scriptural teaching concerning church fellowship, our Congregation practices closed communion. For the spiritual welfare of all, we take very seriously the responsibility to commune only those persons who are members of our confessional fellowship, the Lutheran Church Missouri Synod.`,

    `If you are a communicant member in good standing of a sister LCMS congregation and our Pastor does not know you, please announce your desire to commune to our Pastor before joining us at the Lord’s Table.`,

    `We want to express our sincere welcome to all of our guests. We invite you to join us in prayer and worship and also to pray with us for the unity of all Christians. Thank you.`,

    `If you would like information about our confessional fellowship or about joining our congregation, please speak with our Pastor or leave a comment in the Comments section of the website.`
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-8 py-12 pt-50 text-text-primary leading-relaxed">
      <h2 className="text-lg mb-3 text-text-primary">
        Communing with Us
      </h2>

      <div className="space-y-8 text-lg">
        {paragraphs.map((para, index) => (
          <p key={index} className="text-text-primary">
            {para}
          </p>
        ))}
      </div>
    </main>
  );
}
