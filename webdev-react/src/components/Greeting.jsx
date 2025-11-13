import PropTypes from 'prop-types';

/*
const Greeting = (props) => {
  console.log(props);
  const {name, age, isTeacher} = props;

  let teacherText = '';

  if (isTeacher) {
    teacherText = 'On opettaja';
  } else {
    teacherText = 'Ei ole opettaja';
  }

  return (
    <p>
      Moikka, nimesi on {name}, ja ikäsi on {age}, {teacherText}
    </p>
  );
};
*/

// kevyt tyyppitarkastus propsille

const Greeting = ({name, age, isTeacher}) => {
  return (
    <p>
      Moikka, nimesi on {name}, ja ikäsi on {age}
      {isTeacher && 'Ja olet opettaja.'}
    </p>
  );
};

// Kevyt tyyppitarkastus
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isTeacher: PropTypes.bool,
};

export default Greeting;
