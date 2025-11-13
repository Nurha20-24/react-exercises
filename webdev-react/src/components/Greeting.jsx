import PropTypes from 'prop-types';

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
    <>
      <div>
        Moikka, nimesi on {name}, ja ikäsi on {age}, {teacherText}
      </div>
    </>
  );
};

// kevyt tyyppitarkastus propsille

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isTeacher: PropTypes.bool,
};

export default Greeting;
