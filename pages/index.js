import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
      </Head>
      <div className="hero">
        <h1 className="title-primary">Mulled</h1>
      </div>
      <section id='events'>
        <h2 className="title-secondary">Events</h2>
        <ul className="event-list">
          <li className="event">
            {/* TODO: let a visitor create a google calendar event */}
            <a
              href="https://goo.gl/maps/CD4ZkkoC42An7w9v9"
              target="_blank"
              rel="noreferrer"
              className="event-venue">
              Moldavite Palace
            </a>
            <time className="event-time" datetime="2022-10-07">October 7 2022 9:00 PM </time>
          </li>
        </ul>
      </section>
      <section id='contact'>
        <h2 className="title-secondary">Contact</h2>
      </section>
      {/* TODO: embed a video player */}
      {/* TODO: contact form */}
    </>
  )
}
