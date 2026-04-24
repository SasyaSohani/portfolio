import profile from "../assets/profile.jpg"
function Home() {
  return (
    <div className="container">

      <div className="profile card">
        <h1>My Portfolio</h1>
        <img src={profile} alt="profile" />
        <p style={{ opacity: 0.8 }}>Welcome to my personal portfolio website</p>
        <p>Computer Science Student</p>
      </div>

              <div className="button-group">
          <a href="/SasyaSohani_Resume-1.pdf" download className="btn">Download Resume</a>
          <a href="https://www.linkedin.com/in/sasyasohani/" target="_blank" className="btn">LinkedIn</a>
          <a href="https://github.com/SasyaSohani" target="_blank" className="btn">GitHub</a>
           </div>
          

      <div className="card">
        <h2>About Me</h2>
        <p>
          I am a Computer Science & Engineering student currently pursuing my BTech in Mahindra University. I am interested in exploring software development through hands-on projects and continuous learning.
        </p>
      </div>

      <div className="card">
        <h2>Research Interests</h2>

        <div className="grid">
          <div>
            <h3>Machine Learning</h3>
            <p>
              Interested in fundamental machine learning concepts such as model training, evaluation, and how algorithms learn patterns from data. Exploring areas like classification and neural networks through practical implementation.
            </p>
          </div>

          <div>
            <h3>Data Analytics</h3>
                  <p>Interested in analyzing data to extract meaningful insights, including data cleaning, visualization, and understanding trends to support data-driven decision making. Currently building foundational skills in this area.</p>

          </div>
        </div>
      </div>

      {/* Skills */}
        <div className="card">
        <h2>Skills</h2>
        <div className="skills">
          <span className="skill">C</span>
          <span className="skill">C++</span>
          <span className="skill">Python</span>
          <span className="skill">Java</span>
          <span className="skill">NodeJS</span>
          <span className="skill">ExpressJS</span>
          <span className="skill">HTML</span>
          <span className="skill">CSS</span>
          <span className="skill">JavaScript</span>
          <span className="skill">React</span>
          <span className="skill">JQuery</span>
          <span className="skill">JSON</span>
          <span className="skill">MySql</span>
          <span className="skill">Microsoft SQL Server</span>
          <span className="skill">VS Code</span>
          <span className="skill">Git</span>
          <span className="skill">MATLAB</span>
          <span className="skill">Jupyter Notebook</span>
          <span className="skill">Pandas</span>
          <span className="skill">NumPy</span>
          <span className="skill">Matplotlib</span>
          <span className="skill">PyTorch</span>
          <span className="skill">Torchvision</span>
        </div>
      </div>


      <div className="card">
        <h2>Personal Details</h2>
        <p>Name: Sasya Sohani Nagulavancha</p>
        <p>Phone: 9959522322</p>
    <p>Email: sasyasohani@email.com</p>
      <p>College Email: se23ucse117@mahindrauniversity.edu.in</p>

      </div>

    </div>
  );
}
export default Home;