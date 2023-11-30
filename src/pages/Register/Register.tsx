import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollTo } from 'framer-motion-scroll-to-hook';
import { RiArrowRightLine } from 'react-icons/ri';
import {
  Footer,
  Transition,
  Button,
  Loading,
} from '../../components';
import GameCard from '../Home/components/GameCard';

const cardDuration = 10;

function Register() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollTo = useScrollTo();
  const navigate = useNavigate();
  const navigateToHome = () => navigate('/');
  const navigateToLogin = () => navigate('/login');
  function Register() {
    let interval: NodeJS.Timer | number;
    (async () => {
      setIsLoading(true);
      interval = setInterval(() => {
        setIsLoading(false);
        navigateToHome();
      }, cardDuration * 1000);
    })();
    return () => clearInterval(interval as number);
  }

  useEffect(() => {
    scrollTo();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Transition className="Login" direction="left">
      {!isLoading
        ? < Transition className="login-wrapper">
          <div className='left'>
              <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    // onFocus={() => setFormMaxWidth(700)}
                    // onBlur={() => setFormMaxWidth(400)}
                  />
              </div>
              <div>
                <input
                    type="text"
                    placeholder="Phone number"
                    value={phoneValue}
                    onChange={(e) => setPhoneValue(e.target.value)}
                    // onFocus={() => setFormMaxWidth(700)}
                    // onBlur={() => setFormMaxWidth(400)}
                  />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                  // onFocus={() => setFormMaxWidth(700)}
                  // onBlur={() => setFormMaxWidth(400)}
                />
              </div>
            <div>
              <Button
                className="Store"
                handleClick={Register}
              >
                Register <RiArrowRightLine />
              </Button>

              <Button
                className="Store"
                handleClick={navigateToLogin}
              >
                Already have an account? Login
                {/* <RiArrowRightLine /> */}
              </Button>
            </div>
          </div>
          <div className='right'>
            <GameCard
                id={1}
                name={"adsaf"}
                backgroundImage={"https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"}
                duration={cardDuration}
                big={true}
              />
          </div>
        </Transition>
        : <Loading />
      }
      <Footer />
    </Transition>
  );
}

export default Register;
