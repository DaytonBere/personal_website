import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4><b><a href={data.link}>{data.school}</a>, {data.year}</b></h4>
      <p className="degree">{data.degree}</p>
      <p className="degree">{data.minor ? `Minor: ${data.minor}` : ''}</p>
      <p className="degree">GPA: {data.gpa}</p>
    </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    gpa: PropTypes.number.isRequired,
    minor: PropTypes.string,
  }).isRequired,
};

export default Degree;
