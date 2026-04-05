const services = [
  {
    icon: (
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style={{ width: 48, height: 48, fill: '#ffffff' }}>
        <path d="M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28S47.464 4 32 4zm2 42h-4V28h4v18zm0-24h-4v-4h4v4z"/>
        <circle cx="32" cy="32" r="4" opacity="0.3"/>
        <path d="M20 20h4v4h-4zm20 0h4v4h-4zM20 40h4v4h-4zm20 0h4v4h-4z" opacity="0.6"/>
      </svg>
    ),
    title: 'AI Integration & LLM Engineering',
    desc: 'Building production-ready AI features using OpenAI, Anthropic Claude, and open-source models. Expert in RAG pipelines, vector embeddings, fine-tuning, and agentic systems that deliver measurable business impact — not just demos.',
  },
  
  {
    icon: (
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style={{ width: 48, height: 48, fill: '#ffffff' }}>
        <path d="M56 12H8a4 4 0 00-4 4v32a4 4 0 004 4h48a4 4 0 004-4V16a4 4 0 00-4-4zm0 36H8V16h48v32zM16 28h4v4h-4zm8 0h24v4H24zm-8 8h4v4h-4zm8 0h16v4H24z"/>
      </svg>
    ),
    title: 'Full-Stack Web Development',
    desc: 'End-to-end web application development with React, Next.js, and TypeScript on the frontend, paired with Node.js, Go, or Python/FastAPI on the backend. Clean architecture, rigorous testing, and rapid iteration without cutting corners.',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style={{ width: 48, height: 48, fill: '#ffffff' }}>
        <path d="M20 8h24a4 4 0 014 4v40a4 4 0 01-4 4H20a4 4 0 01-4-4V12a4 4 0 014-4zm0 4v40h24V12H20zm8 34h8v4h-8z"/>
      </svg>
    ),
    title: 'Mobile App Development',
    desc: '8+ years delivering native iOS (Swift/Objective-C) and Android (Kotlin/Java) apps alongside cross-platform solutions in React Native — from architecture and MVP through App Store and Google Play launch, to post-release scaling.',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style={{ width: 48, height: 48, fill: '#ffffff' }}>
        <path d="M8 8h48v4H8zm0 12h48v4H8zm0 12h32v4H8zm0 12h48v4H8zm0 12h32v4H8z"/>
      </svg>
    ),
    title: 'Backend & API Architecture',
    desc: 'Designing RESTful and GraphQL APIs, microservices with Docker and Kubernetes, event-driven systems with Kafka, and real-time infrastructure on AWS. Proven at scale — 2M+ monthly active users across multiple production systems.',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style={{ width: 48, height: 48, fill: '#ffffff' }}>
        <path d="M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28S47.464 4 32 4zm0 52C18.745 56 8 45.255 8 32S18.745 8 32 8s24 10.745 24 24-10.745 24-24 24zm-2-34h4v16h-4zm0 20h4v4h-4z"/>
      </svg>
    ),
    title: 'Cloud & DevOps Engineering',
    desc: 'Infrastructure-as-code with Terraform, automated CI/CD pipelines, containerised deployments on AWS (ECS, Lambda, RDS, S3, CloudFront), and full observability stacks. I treat infrastructure as a first-class engineering concern.',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style={{ width: 48, height: 48, fill: '#ffffff' }}>
        <path d="M56 16H36l-4-8H8a4 4 0 00-4 4v40a4 4 0 004 4h48a4 4 0 004-4V20a4 4 0 00-4-4zm0 36H8V12h21.172l4 8H56v32z"/>
      </svg>
    ),
    title: 'Technical Leadership & Architecture',
    desc: '3+ years leading cross-functional engineering teams — setting architecture standards, running Agile sprints, conducting code reviews, mentoring engineers, and aligning technical execution with business strategy and delivery timelines.',
  },
];

export default function Services() {
  return (
    <div id="services" className="section lb">
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 15px' }}>
        <div className="section-title" style={{ textAlign: 'center' }}>
          <h3>Services</h3>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -15px' }}>
          {services.map((s, i) => (
            <div key={i} className="service-col" style={{ padding: '0 15px', width: '33.333%' }}>
              <div className="services-inner-box">
                <div className="ser-icon">{s.icon}</div>
                <h2>{s.title}</h2>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
