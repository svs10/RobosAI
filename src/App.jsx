import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import SoftwarePage from './pages/SoftwarePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/product" component={ProductPage} />
            <Route path="/software" component={SoftwarePage} />
            <Route path="/about" component={AboutUsPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
