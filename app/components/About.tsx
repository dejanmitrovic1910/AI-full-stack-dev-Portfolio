import Image from 'next/image';

export default function About() {
  return (
    <div id="about" className="section wb">
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 15px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -15px', alignItems: 'center' }}>
          <div className="about-col" style={{ padding: '0 15px', width: '50%' }}>
            <div className="message-box">
              <h2>About Me</h2>
              <p>
                I&apos;m a Senior AI Full-Stack &amp; Mobile Developer with 8+ years of experience
                architecting and shipping production-grade systems across web, mobile, and intelligent
                automation. I specialise in integrating large language models and machine learning
                pipelines into scalable full-stack applications — building everything from
                React/Next.js frontends and distributed backends to native iOS &amp; Android apps
                published on the App Store and Google Play.
              </p>
              <p>
                My engineering philosophy centres on writing clean, maintainable code that solves
                real business problems. I have led cross-functional teams, defined system
                architecture, and delivered projects used by millions of users — always balancing
                speed of delivery with long-term technical quality.
              </p>
            </div>
          </div>

          <div className="about-col" style={{ padding: '0 15px', width: '50%' }}>
            <Image
              src="/images/about-1.png"
              alt="Senior AI Full-Stack Developer"
              width={540}
              height={400}
              unoptimized
              style={{ width: '100%', height: 'auto', borderRadius: 4 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
