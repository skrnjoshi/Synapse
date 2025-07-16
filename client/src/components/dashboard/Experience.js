import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';
import formatDate from '../../utils/formatDate';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td data-label="Company">{exp.company}</td>
      <td className="hide-sm" data-label="Title">{exp.title}</td>
      <td data-label="Years">
        {formatDate(exp.from)} - {exp.to ? formatDate(exp.to) : 'Now'}
      </td>
      <td>
        <button
          onClick={() => deleteExperience(exp._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Experience Credentials</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th className="hide-sm">Title</th>
              <th className="hide-sm">Years</th>
              <th />
            </tr>
          </thead>
          <tbody>{experiences}</tbody>
        </table>
      </div>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
