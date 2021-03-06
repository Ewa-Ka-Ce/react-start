import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import {BrowserRouter, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import {AnimatedSwitch} from 'react-router-transition';
import List from '../List/ListContainer';
import SearchResultsContainer from '../SearchResults/SearchResultsContainer';
import FAQ from '../FAQ/FAQ';


const App = () => (
  <BrowserRouter>
    <MainLayout>  
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path="/list/:id" component={List} />
        <Route exact path="/search/:id" component={SearchResultsContainer} />
        <Route exact path='/faq' component={FAQ} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;