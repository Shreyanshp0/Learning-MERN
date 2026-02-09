import React, {useRef, useState, useEffect} from 'react'
import './Portfolio.css'
import profilePic from './Portfoliopic.jpeg'

const Portfolio = () => {
    const scroll = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    const time = useRef(null)
   
    const [timer, setTimer]=useState(0)
         useEffect(() => { 
            time.current = setInterval(() => {
              setTimer(prev => prev + 1);
            }, 1000);
            return () => clearInterval(time.current);
          }, []);
          const formatTime = (totalSeconds) => {
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
          };

          useEffect(() => {
            // Intersection Observer keeps sections animating on scroll without extra libraries
            const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('visible')
                  observer.unobserve(entry.target)
                }
              })
            }, {threshold: 0.2})

            const sections = document.querySelectorAll('.section')
            sections.forEach((section) => observer.observe(section))

            return () => observer.disconnect()
          }, [])

  return (
    <div className="portfolio-container">
      <div className="Header glass-card">
        <div className="title-block">
          <p className="eyebrow">Frontend · Full-Stack</p>
          <h1>Shreyansh Pandey</h1>
          <p className="tagline">Building thoughtful web experiences with React, Node, and modern tooling.</p>
        </div>
        <div className="avatar-frame">
          <span className="status-pill">Open to collaboration</span>
          <img src={profilePic} alt="Shreyansh profile" />
        </div>
      </div>
        <div className="live-timer glass-chip">
          <span>Crafting for</span>
          <strong>{formatTime(timer)}</strong>
        </div>
        <div className="Top-nav-bar">
            <nav>
                <button onClick={() => scroll('introduction')}>Introduction</button>
                <button onClick={() => scroll('about')}>About me</button>
                <button onClick={() => scroll('skills')} >Skills</button>
                <button onClick={() => scroll('projects')}>Projects</button>
                <button onClick={() => scroll('learning')}>What I’m Currently Learning</button>
                <button onClick={() => scroll('achievements')}>Achievements</button>
                <button onClick={() => scroll('contact')}>Contact Me</button>
             
            </nav>
        </div>
        <div id="introduction" className="Introduction section glass-card">
          <h2>Introduction</h2>
          <p>
            Hi, I’m Shreyansh 👋
            A passionate Frontend / Full-Stack Developer who loves building clean, interactive, and user-friendly web applications.
            I enjoy turning complex problems into simple, beautiful, and intuitive solutions. Currently focused on React, JavaScript, and modern web technologies, while constantly learning and improving.
          </p>
          <p>
            With a keen eye for design and a love for coding, I strive to create digital experiences that not only look great but also perform seamlessly. My journey in web development started with curiosity about how websites work, and it has evolved into a passion for crafting innovative solutions.
          </p>
        </div>
        <div id="about" className="About section glass-card">
          <h2>About Me</h2>
          <p>
            I’m a motivated developer with a strong foundation in web development and problem-solving. I enjoy working on real-world projects that challenge my logic and creativity.
            💡 Curious about how things work under the hood
            🧠 Strong in fundamentals (HTML, CSS, JavaScript, React)
            🚀 Always learning new tools and best practices
            🤝 Team player with good communication skills
            My goal is to build products that are efficient, scalable, and user-centric.
          </p>
          <p>
            Beyond coding, I have a background in [mention any background, e.g., computer science studies or self-taught]. I believe in continuous learning and often experiment with new frameworks and libraries to stay updated with industry trends. When not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>
        <div id="skills" className="Skills section glass-card">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-card glass-card">
              <h3>Frontend</h3>
              <ul className="badge-list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Tailwind CSS</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js (Hooks, State, Props)</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="skill-card glass-card">
              <h3>Backend & APIs</h3>
              <ul className="badge-list">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div className="skill-card glass-card">
              <h3>Programming & Tools</h3>
              <ul className="badge-list">
                <li>Java</li>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>npm</li>
                <li>Postman</li>
                <li>Figma</li>
              </ul>
            </div>
            <div className="skill-card glass-card">
              <h3>Other Strengths</h3>
              <ul className="badge-list">
                <li>Problem Solving</li>
                <li>Version Control</li>
                <li>Agile Delivery</li>
                <li>MongoDB</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="projects" className="project section glass-card">
            <h2>Projects</h2>
            <div className="project-grid">
              <article className="project-card glass-card">
                <div className="project-meta">
                  <p className="project-tag">Authentication · React</p>
                  <h3>Login System</h3>
                </div>
                <p>A login experience with API integration, field validation, and helpful feedback patterns.</p>
                <ul>
                  <li>User validation & error prompts</li>
                  <li>Password visibility toggle</li>
                  <li>Responsive dashboard shell</li>
                </ul>
              </article>
              <article className="project-card glass-card">
                <div className="project-meta">
                  <p className="project-tag">React Hooks</p>
                  <h3>Timer / Stopwatch</h3>
                </div>
                <p>An interval-safe timer leveraging `useRef` and `useState` for precise control.</p>
                <ul>
                  <li>Start · Stop · Reset flow</li>
                  <li>Prevents stacked intervals</li>
                  <li>Micro interactions for buttons</li>
                </ul>
              </article>
              <article className="project-card glass-card">
                <div className="project-meta">
                  <p className="project-tag">Game · Web APIs</p>
                  <h3>AI Escape Room</h3>
                </div>
                <p>Trivia-driven escape room with hints, scoring, and immersive theming.</p>
                <ul>
                  <li>Dynamic riddle generator</li>
                  <li>Time-based hint unlocks</li>
                  <li>Session score tracker</li>
                </ul>
              </article>
              <article className="project-card glass-card">
                <div className="project-meta">
                  <p className="project-tag">Full Stack</p>
                  <h3>E-commerce Platform</h3>
                </div>
                <p>Product catalog, cart flow, and authentication backed by React, Node, and MongoDB.</p>
                <ul>
                  <li>Smart product filtering</li>
                  <li>Persistent cart state</li>
                  <li>JWT-based auth</li>
                </ul>
              </article>
              <article className="project-card glass-card">
                <div className="project-meta">
                  <p className="project-tag">API Integration</p>
                  <h3>Weather Insight</h3>
                </div>
                <p>Real-time climate dashboard with geolocation search and extended forecasting.</p>
                <ul>
                  <li>Current conditions & alerts</li>
                  <li>7-day forecast cards</li>
                  <li>City + GPS lookup</li>
                </ul>
              </article>
            </div>
        </div>
      <div id="learning" className="Current-learn section glass-card">
        <h2>What I’m Currently Learning</h2>
        <ul>
          <li>Advanced React patterns</li>
          <li>Backend development with Node.js</li>
          <li>Data Structures & Algorithms</li>
          <li>Full-stack project architecture</li>
          <li>Cloud deployment with AWS or Azure</li>
          <li>Machine Learning basics with Python</li>
          <li>UI/UX principles for better design</li>
        </ul>
      </div>
      <div id="achievements" className="Achievements section glass-card">
        <h2>Achievements</h2>
        <ul>
          <li>Completed multiple web development projects</li>
          <li>Active contributor to open-source repositories</li>
          <li>Certified in JavaScript fundamentals</li>
          <li>Participated in coding hackathons</li>
        </ul>
      </div>
      <div id="contact" className="Contact section glass-card">
        <h2>Contact</h2>
        <div className="contact-grid">
          <a className="contact-card glass-card" href="mailto:shreysandhya.pandey124@gmail.com">
            <span role="img" aria-label="email">📧</span>
            <div>
              <p>Email</p>
              <strong>shreyansh1706@gmail.com</strong>
            </div>
          </a>
          <a className="contact-card glass-card" href="https://github.com/Shreyanshp0" target="_blank" rel="noreferrer">
            <span role="img" aria-label="github">💻</span>
            <div>
              <p>GitHub</p>
              <strong>github.com/Shreyanshp0</strong>
            </div>
          </a>
          <a className="contact-card glass-card" href="https://www.linkedin.com/in/shreyansh-pandey-/" target="_blank" rel="noreferrer">
            <span role="img" aria-label="linkedin">🌐</span>
            <div>
              <p>LinkedIn</p>
              <strong>in/shreyansh-pandey-</strong>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
