import { useEffect } from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
import './App.scss';
import { PONG } from '../ipcs/events';

const Hello = () => {
  return <></>;
};
export default function App() {
  useEffect(() => {
    window['electron'].ping();
    window['electron'].on(PONG, (msg) => {
      console.log(msg);
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
