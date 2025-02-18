import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import './App.css';
import About from './pages/About.jsx';
import Article from './pages/Article.jsx';
import Home from './pages/Home.jsx';
import ArticlesList from './pages/ArticlesList.jsx'
import NavBar from './NavBar.jsx';
import Layout from './Layout.jsx';
import NotFound from "./pages/NotFound.jsx"


const routes = [{
  path: "/",
  element: <Layout />, 
  errorElement: <NotFound />,
    children: [{
      path: "/",
      element: <Home />
    }, {
      path: "/about", 
      element: <About />
    }, {
      path: "/articles", 
      element: <ArticlesList />
    }, {
      path: "/articles/:name", 
      element: <Article />
    }]
}]


const router = createBrowserRouter(routes);

function App (){
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App