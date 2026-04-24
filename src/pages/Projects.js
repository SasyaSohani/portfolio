
function Projects() {
  return (
    <div className="container">
      <h1>My Projects</h1>

      <div className="card">
        <h2>Hybrid Friend Recommender Model</h2>
        <p>Designed and implemented a hybrid friend recommender system that integrates structural link prediction based
on shared neighbors with attribute-based similarity derived from gender and branch attributes. Evaluated structural-only, attribute-only, and hybrid models using AUC-ROC and Precision@k, demonstrating
that the hybrid model achieves superior performance in ranking true friendships over non-friendships.</p>
        <a href="https://github.com/SasyaSohani/friend-recommender-network-analysis">View on GitHub</a>
      </div>

      <div className="card">
        <h2> Full-stack Weather Application</h2>
        <p>Deployed a production-ready full-stack weather application integrating real-time and 5-day forecast data through
a secure backend proxy. Implemented a secure API gateway to fetch and filter third-party weather data while protecting API keys via
environment variables; integrated a responsive, mobile-friendly UI and robust error and loading state handling. Debugged and resolved real-world deployment issues and deployed the application to ensure reliable end-to-end
functionality.</p>
        <a href="https://github.com/SasyaSohani/weather-app-frontend">View on GitHub</a>
      </div>

    </div>
  );
}
export default Projects;