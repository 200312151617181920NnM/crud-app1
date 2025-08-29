import PropTypes from 'prop-types';

function Form({ onSubmit, username, password }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Username and password are required');
      return;
    }
    onSubmit({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} />
      <input type="password" placeholder="Password" value={password} />
      <button type="submit">Login</button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default Form;
