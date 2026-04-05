const reasons = [
  {
    emoji: '⚡',
    title: 'Speed Without Compromise',
    desc: 'I move fast, but never at the expense of quality. Using structured workflows and agile delivery, I ensure your project stays on track and launches on time.',
  },
  {
    emoji: '🧠',
    title: 'Future-Ready Expertise',
    desc: 'From AI automation to modern full-stack systems, I integrate cutting-edge technologies that keep your product ahead of the curve—not playing catch-up.',
  },
  {
    emoji: '🔒',
    title: 'Reliability You Can Count On',
    desc: 'Clean architecture, secure development practices, and scalable infrastructure are at the core of everything I build. You get solutions that are stable, maintainable, and production-ready.',
  },
  {
    emoji: '🗣',
    title: 'Clear, Consistent Communication',
    desc: 'No guesswork, no silence. I keep you informed at every stage with clear updates, practical insights, and zero unnecessary jargon.',
  },
  {
    emoji: '🚀',
    title: 'End-to-End Ownership',
    desc: 'From planning and design to deployment and optimisation, I handle the full lifecycle—so you don\'t have to coordinate multiple developers or worry about gaps.',
  },
];

export default function WhyWorkWithMe() {
  return (
    <div id="why" className="section wb">
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 15px' }}>

        {/* Header */}
        <div className="section-title" style={{ textAlign: 'center' }}>
          <h3>Why Work With Me</h3>
        </div>
        <p style={{
          textAlign: 'center',
          color: '#999',
          fontSize: 15,
          maxWidth: 680,
          margin: '0 auto 60px',
          lineHeight: 1.8,
        }}>
          I don&apos;t just write code — I build reliable, scalable products designed to perform,
          grow, and last. When you work with me, you&apos;re partnering with someone who takes
          full ownership of your project from idea to execution.
        </p>

        {/* Cards */}
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -15px', justifyContent: 'center' }}>
          {reasons.map((r, i) => (
            <div
              key={i}
              className="why-col"
              style={{ padding: '0 15px', width: '33.333%', marginBottom: 30 }}
            >
              <div className="why-card">
                {/* Icon circle — top right, no surrounding text */}
                <div className="why-icon-circle">{r.emoji}</div>
                <h4 className="why-title">{r.title}</h4>
                <p className="why-desc">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
