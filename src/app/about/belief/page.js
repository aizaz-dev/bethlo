export default function BelievePage() {
  const paragraphs = [
    `As we begin sharing a little with you about us, we’d like to start by saying that we are members of the Lutheran Church Missouri Synod (LCMS for short), which was established in 1847. As a local Church, our mission is to provide, through word and Sacrament, for the spiritual care and the well-being of this congregation. *Being strengthened in our faith and empowered by the Holy Spirit, we will reach out to others, in word and deed with the joy of salvation through Christ.* You may be surprised that we first state our need to take care of each other. We know that we can only reach out and care for others when we are in good spiritual health ourselves. To reach that state of wellbeing requires the empowerment that can only be found when we understand and know God. Then, and only then, can we genuinely explain and share Him with others. When one is joyful about a relationship, they cannot help but share it. Thus, we cannot help but share the joy we have come to know in God, through the salvation he has given us.`,

    `Now, you may be asking yourself, what is it we believe about God? Well, we believe that the Bible, Old and New Testament, are the voice of God, spoken to us through the words and testaments of His Prophets and Apostles. We do not believe these things to be the thoughts, stories or ideas of any individual alone, but instead the wisdom God intended to convey through His spirit. Thus allowing these people to use their intellect and abilities to share the knowledge He shared through spirit. Using worldly relations to translate into the words others knew, although there was little in this world that they could closely relate to, they shared God’s message to his people as successfully as they could.`,

    `God, in His word, reveals himself as a single being of one essence, one substance, and yet being three persons – Father, Son and Holy Spirit. Therefore, we use the term: Triune God to describe Him. He is not like anything in creation, so He really cannot be compared to anything else. We believe that God created the earth, universe and all the different kinds of life on earth in six days, giving us the seventh day for rest. On the last day of creation, after He created all things, He created the first man, and from this man the first woman, from whom all people have descended. In so doing, He created marriage; to be practiced between a man and a woman for life. We also believe God is not to blame for the problems and pains of this life. Instead, it’s the result of humanity’s fall into sin, which is an act of disobedience shown to Him. God encourages us to live a healthy, happy and spiritual life by following the guidelines He has laid out for us through the Bible. Additionally, He explains many of the questions we may have about our existence, the world, the animals that inhabit this planet, and even our purpose here.`,

    `God does all of this, not as a master, but as a wise and loving Father. He shares with us how necessary the salvation He offers is by explaining how throughout the history of our existence we’ve squandered our relationship with Him. In His Word, He tells us that the parents to all living humans, out of selfish desire, chose to disobey Him, thereby spawning sin and the consequences of that sin into their lives and all the lives of their descendants. Once entered into this world, sin has ruled the lives of people, bringing death and pain to the world and the universe, of which God appointed us caretakers. In God’s great love for us, He took it upon Himself to take mortal form, as one of us, to free us from eternal suffering. In choosing to accept the punishment for our sins, He paved a path that would allow for the forgiveness of our sins, ultimately providing the opportunity for us to enter His kingdom of Heaven. Where all that trust in Him receive His loving presence and everlasting joy that comes with the peace provided with Him and His creation in the life to come.`,

    `He also paid the price for us to free us from sin’s hold on our lives by showing us forgiveness so that we may follow Him in our words and deeds. He offers the forgiveness He won for us, as the Son who became flesh and blood to die on the cross — giving us His written word and sacred acts of baptism, the Lord’s supper and absolution. Thereby sharing His Spirit with us as a means to create, strengthen, build and sustain our faith/trust in Him so that we can share it with others.`,

    `For information on communing with us, please follow the link in the Communion tab from the About drop-down menu. Additionally, if you would like information about our confessional fellowship or about joining our congregation, please speak with our Pastor or leave a comment in the Comments section of the website.`
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-8 py-12 mt-50 prose">
      <h2 className="text-lg mb-3 font-semibold text-text-primary shadow-text-light">
        What We Believe
      </h2>

      {paragraphs.map((text, index) => (
        <p key={index} className="mb-8 text-lg text-text-primary leading-relaxed shadow-text-light">
          {text.split('*').map((segment, i) =>
            i % 2 === 1 ? (
              <em key={i} className="italic text-primary font-medium">
                {segment}
              </em>
            ) : (
              segment
            )
          )}
        </p>
      ))}
    </main>
  );
}
