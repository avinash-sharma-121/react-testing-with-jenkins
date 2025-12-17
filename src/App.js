import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Avinash Kumar Sharma</h1>
        <p>DevOps Engineer</p>
      </header>
      <main className="container">
        <section id="about">
          <h2>About Me</h2>
          <p>Hello! I'm a passionate DevOps Engineer with experience in automating deployments, managing cloud infrastructure, and ensuring scalable CI/CD pipelines. I love leveraging technology to streamline development processes and improve system reliability.</p>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <ul className="skill-list">
            <li>AWS</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Jenkins</li>
            <li>Terraform</li>
            <li>Python</li>
            <li>Linux</li>
            <li>Git</li>
          </ul>
        <section id="experience">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>DevOps Engineer</h3>
            <p>Capgemini | August, 2022 - Present</p>
            <p>Responsible for automating deployment processes, managing cloud infrastructure, and ensuring high availability of applications.</p>
          </div>
          <div className="experience-item">
            <h3>Full Stack Engineer</h3>
            <p>Awishcar.com  | May, 2022 - July, 2022</p>
            <p>Managed PHP and JavaScript projects, implemented responsive UIs, and collaborated with cross-functional teams.</p>
          </div>
        </section>
          <h2>Projects</h2>
          <div className="project">
            <h3>CI/CD Pipeline Automation</h3>
            <p>Designed and implemented automated CI/CD pipelines using Jenkins and GitLab CI, reducing deployment time by 50%.</p>
          </div>
          <div className="project">
            <h3>Cloud Infrastructure Management</h3>
            <p>Managed AWS infrastructure with Terraform, ensuring scalable and secure environments for multiple applications.</p>
          </div>
        </section>
        <section id="certificates">
          <h2>Certificates</h2>
          <div className="certificate">
            <h3>AWS Solution Architect</h3>
            <p>I have completed this certificate on nov - 2024</p>
          </div>
          <div className="certificate">
            <h3>AWS Developer Associate</h3>
            <p>I have completed this certificate on March - 2025</p>
          </div>
        </section>
        

        <section id="contact">
          <h2>Contact</h2>
          <p>Email: kumaravinashsharma82@gmail.com</p>
          <p>Phone: +91 9060071846</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/avinashksharma" className="App-link">linkedin.com/in/avinashksharma</a></p>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Avinash Kumar Sharma. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
