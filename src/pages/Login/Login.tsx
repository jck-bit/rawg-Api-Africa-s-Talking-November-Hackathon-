import { useNavigate } from 'react-router-dom';
import { RiArrowRightLine } from 'react-icons/ri';
import { Transition, Button, Loading } from '../../components';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setIsLoading(true);

      // Perform validation (you can add more validation logic)
      if (!email || !password || !username || !phoneNumber) {
        alert('Please enter all required fields.');
        return;
      }

      // Send login request to the server
      const response = await fetch('https://apps.ingenious.or.ke:5503/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          username, // Include username in the request
          phoneNumber, // Include phoneNumber in the request
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful
        console.log('Login successful');
        // Store the token in local storage or state (depends on your app structure)
        // Redirect to the home page or any other route
        navigate('/');
      } else {
        // Login failed, display an error message
        console.error('Login failed:', data.error || 'Unknown error');
        alert('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Transition className="Login" direction="left">
      {!isLoading ? (
        <Transition className="login-wrapper">
          <div className="left">
            <div>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <Button className="Store" handleClick={handleLogin}>
                Login <RiArrowRightLine />
              </Button>
            </div>
          </div>
          <div className="right">
            {/* You can include any additional content on the right side */}
          </div>
        </Transition>
      ) : (
        <Loading />
      )}
    </Transition>
  );
};

export default Login;
