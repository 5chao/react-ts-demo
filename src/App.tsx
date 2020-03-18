import * as React from 'react';
import { HashRouter, Switch, Link} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import AxiosHttp from './service/http';
import axios from 'axios';
import RouterGuard from './components/routerGuard';
import routerConfig from './routers';
import './App.css';
import './mock/index'

AxiosHttp.initIntercept(axios)
 
class App extends React.Component {
  public render() {
    return (
      <TransitionGroup>
        <CSSTransition
           appear={true}
           classNames="appAppear"
           timeout={500}
        >
          <HashRouter>
              <div className="nav">
                  <Link to="/">首页</Link>
                  <Link to="/user">会员</Link>
                  <Link to="/404">404</Link>
              </div>
                <Switch>
                    <RouterGuard routerConfig={routerConfig} />
                </Switch>
          </HashRouter>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default App;

