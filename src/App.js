import './App.css';
import profileImg from "./Assets/Avinash_Kumar_Sharma.jpg";

function App() {
  return (
    <div className="App">
<header className="App-header">
  <img
    src={profileImg}
    alt="Avinash Kumar Sharma"
    className="profile-image"
  />

  <div className="profile-details">
    <h1>Avinash Sharma</h1>
    <p>DevOps Engineer</p>
  </div>
</header>

      <main className="container">
        <section id="about">
          <h2>About Me</h2>
          <p>AWS Certified DevOps Engineer with 3.8+ years of experience in AWS cloud, Linux Administration, CI/CD, Docker, Kubernetes, Terraform, and automation using Python and Bash. Strong background in building secure, scalable, and automated infrastructure using IaC and DevOps best practices. Experienced in monitoring, patching, and cloud operations. Focused on improving reliability and delivering cloud-native solutions.</p>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <ul className="skill-list">
            <li>AWS</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Jenkins</li>
            <li>Terraform</li>
            <li>Ansible</li>
            <li>Python</li>
            <li>Linux</li>
            <li>Git</li>
          </ul>
        </section>
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
        <section id="projects">
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
          <div className="project">
            <h3>AWS Solution Architect</h3>
            <p>I have completed this certificate on Nov - 2024</p>
          </div>
          <div className="project">
            <h3>AWS Developer Associate</h3>
            <p>I have completed this certificate on March - 2025</p>
          </div>
        </section>
        

        <section id="contact">
          <h2>Contact</h2>
          <p>Email: kumaravinashsharma82@gmail.com</p>
          <p>Phone: +91 9060071846</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/avinashksharma" target="_blank" className="App-link">linkedin.com/in/avinashksharma</a></p>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Avinash Kumar Sharma. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
