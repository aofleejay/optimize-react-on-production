import React from 'react'

const App = (props) => (
  <div>
    <nav className="navbar">
      <div className="navbar-brand">
        <a className="navbar-item" href="http://bulma.io">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
        </a>
      </div>
    </nav>
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Optimize React on production
          </h1>
          <h2 className="subtitle">
            Example project
          </h2>
        </div>
      </div>
    </section>
  </div>
)

export default App
