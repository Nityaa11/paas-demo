import './App.css'

function App() {
  const features = [
    {
      icon: '⚡',
      title: 'Deployment Automation',
      text: 'Build and deploy applications quickly without managing complex infrastructure.'
    },
    {
      icon: '☁',
      title: 'Managed Infrastructure',
      text: 'Let the cloud provider handle servers, storage, networking and scaling.'
    },
    {
      icon: '↗',
      title: 'Scalable Applications',
      text: 'Scale your application as demand changes with flexible cloud resources.'
    }
  ]

  const services = [
    {
      number: '01',
      title: 'AWS Amplify',
      text: 'Develop and host modern web applications with an integrated AWS workflow.'
    },
    {
      number: '02',
      title: 'AWS Lambda',
      text: 'Run application code without provisioning or managing servers.'
    },
    {
      number: '03',
      title: 'Elastic Beanstalk',
      text: 'Deploy and manage applications while AWS handles the underlying infrastructure.'
    }
  ]

  return (
    <div className="app">
      <nav className="navbar">
        <div className="brand">
          <span className="brand-mark">P</span>
          <span>CloudPaaS</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </div>

        <a className="nav-button" href="#services">AWS PaaS <span>↗</span></a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">CLOUD COMPUTING • PAAS</p>

            <h1>
              Build. Deploy.
              <span> Scale.</span>
            </h1>

            <p className="hero-text">
              A simple platform for developing and deploying applications
              without the complexity of managing cloud infrastructure.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#services">
                Get Started <span>→</span>
              </a>
              <a className="secondary-btn" href="#features">
                Explore PaaS
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <strong>AWS</strong>
                <small>Cloud Platform</small>
              </div>
              <div>
                <strong>24/7</strong>
                <small>Availability</small>
              </div>
              <div>
                <strong>∞</strong>
                <small>Scalability</small>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow"></div>
            <div className="cloud-card">
              <div className="cloud-top">
                <span>PAAS</span>
                <span className="status"><i></i> ONLINE</span>
              </div>

              <div className="cloud-symbol">☁</div>

              <div className="architecture">
                <div className="arch-node">APP</div>
                <div className="arch-line"></div>
                <div className="arch-node">PAAS</div>
                <div className="arch-line"></div>
                <div className="arch-node">CLOUD</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section light-section" id="features">
          <div className="section-heading">
            <p className="eyebrow dark">WHY PAAS?</p>
            <h2>Everything you need to <span>ship faster.</span></h2>
            <p>
              PaaS removes the infrastructure burden so developers can focus
              on building useful applications.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="icon-box">{feature.icon}</div>
                <p className="card-number">0{features.indexOf(feature) + 1}</p>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <a href="#services">Learn more →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section" id="services">
          <div className="process-copy">
            <p className="eyebrow">HOW IT WORKS</p>
            <h2>From code to cloud in <span>four steps.</span></h2>
            <p>
              A PaaS environment provides the tools and managed services
              required to move an application from development to deployment.
            </p>
          </div>

          <div className="process">
            <div className="step">
              <span>01</span>
              <div>
                <h3>Develop</h3>
                <p>Write and test your application locally.</p>
              </div>
            </div>
            <div className="step">
              <span>02</span>
              <div>
                <h3>Push</h3>
                <p>Store the project in a GitHub repository.</p>
              </div>
            </div>
            <div className="step">
              <span>03</span>
              <div>
                <h3>Build</h3>
                <p>AWS automatically builds the application.</p>
              </div>
            </div>
            <div className="step">
              <span>04</span>
              <div>
                <h3>Deploy</h3>
                <p>The application becomes available online.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section services-section" id="about">
          <div className="section-heading">
            <p className="eyebrow dark">AWS SERVICES</p>
            <h2>Popular tools in the <span>PaaS ecosystem.</span></h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="service-arrow">↗</div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-mark">P</span>
            <span>CloudPaaS</span>
          </div>
          <p>Design and Deploy a PaaS Environment</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#services">AWS Services</a>
        </div>

        <p className="copyright">Cloud Computing Lab • AWS PaaS</p>
      </footer>
    </div>
  )
}

export default App
