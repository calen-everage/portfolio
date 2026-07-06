export default function Music() {
  return (
    <section id="music" className="music">
      <h2>Music</h2>
      <p>Outside of engineering, I write and produce music. Here's one of my favorites.</p>
      <div className="music-embed">
        <iframe
          title="Spotify track player"
          src="https://open.spotify.com/embed/track/0uSJnUAAVsmHdNLtZ3yRM7?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
      <a
        href="https://open.spotify.com/artist/19clQY99rsqqpebZZbgAO0"
        target="_blank"
        rel="noreferrer"
        className="btn btn-secondary"
      >
        View Full Artist Profile
      </a>
    </section>
  )
}
