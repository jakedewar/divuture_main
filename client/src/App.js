import React from 'react';
import { BrowserRouter  as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';
import Goals from './pages/Goals';
import EntryPage from './pages/EntryPage';
import Discover from './pages/Discover';


function App() {
  return (
    <AuthProvider>
      <Router>
          <MenuBar />
          <Container style={{ paddingTop: 100 }}>
            <AuthRoute exact path='/' component={EntryPage} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/goals' component={Goals} />
            <Route exact path='/discover' component={Discover} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route exact path="/posts/:postId" component={SinglePost} />
          </Container>
      </Router>
    </AuthProvider>
  );
};

export default App;
