import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGithubRepos } from "../../actions/profile";

const ProfileGithub = ({ username, getGithubRepos, repos, reposLoading }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    if (username) {
      setError(null);

      // Clean the username if it's a full URL
      let cleanUsername = username;
      if (username.includes("github.com/")) {
        cleanUsername = username.split("github.com/")[1].split("/")[0];
      }

      // Only proceed if we have a valid username
      if (cleanUsername && cleanUsername.trim() !== "") {
        getGithubRepos(cleanUsername);
      } else {
        setError("Invalid GitHub username");
      }
    }
  }, [getGithubRepos, username]);

  if (reposLoading) {
    return (
      <div className="profile-github">
        <h2 className="text-primary my-1">GitHub Repos</h2>
        <p>Loading repositories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-github">
        <h2 className="text-primary my-1">GitHub Repos</h2>
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  if (!repos || repos.length === 0) {
    return (
      <div className="profile-github">
        <h2 className="text-primary my-1">GitHub Repos</h2>
        <p>No repositories found.</p>
      </div>
    );
  }

  return (
    <div className="profile-github">
      <h2 className="text-primary my-1">GitHub Repos</h2>
      {repos.map((repo) => (
        <div key={repo.id} className="repo bg-white p-1 my-1">
          <div>
            <h4>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h4>
            <p>{repo.description || "No description available"}</p>
          </div>
          <div>
            <ul>
              <li className="badge badge-primary">
                Stars: {repo.stargazers_count}
              </li>
              <li className="badge badge-dark">
                Watchers: {repo.watchers_count}
              </li>
              <li className="badge badge-light">Forks: {repo.forks_count}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
  reposLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
  reposLoading: state.profile.reposLoading,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
