import Image from 'next/image';

const experiences = [
  {
    img: '/uploads/blog-01.jpg',
    title: 'Lead AI & Full-Stack Engineer',
    desc: 'Architected an LLM-powered automation platform processing 500K+ daily requests. Built a RAG pipeline that reduced manual review overhead by 70% and cut time-to-insight from days to seconds.',
    link: 'https://codefulcrum.com/',
  },
  {
    img: '/uploads/blog-02.jpg',
    title: 'Senior Full-Stack & Mobile Developer',
    desc: 'Delivered 12 production apps across web and mobile. Integrated on-device ML models into iOS/Android apps and led a team of 6 engineers through 3 major product launches.',
    link: 'https://www.intuit.com/',
    highlight: true,
  },
  {
    img: '/uploads/blog-03.jpg',
    title: 'Mobile & Backend Engineer',
    desc: 'Built scalable microservices on AWS handling 2M+ monthly active users. Shipped 5 native mobile apps from concept to launch, maintaining 4.8★ average ratings across stores.',
    link: 'https://www.beyondkey.com/',
  },
];

export default function Experience() {
  return (
    <div id="blog" className="section lb">
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 15px' }}>
        <div className="section-title" style={{ textAlign: 'center' }}>
          <h3>Professional Experience</h3>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -15px' }}>
          {experiences.map((exp, i) => (
            <div key={i} className="exp-col" style={{ padding: '0 15px', width: '33.333%' }}>
              <figure className={`snip1401${exp.highlight ? ' hover' : ''}`}>
                <Image
                  src={exp.img}
                  alt={exp.title}
                  width={345}
                  height={230}
                  style={{ width: '100%', height: 230, objectFit: 'cover' }}
                />
                <figcaption>
                  <h3>{exp.title}</h3>
                  <p>{exp.desc}</p>
                </figcaption>
                <a href={exp.link} target="_blank" rel="noopener noreferrer" aria-label={exp.title} />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
