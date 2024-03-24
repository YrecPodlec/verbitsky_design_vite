import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import './App.css'
import {QueryClient, QueryClientProvider} from "react-query";
const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all .5s ease-in-out;
  }

  :root {
    background-color: #1e1f22;
    color: white;
    transition: all .5s ease-in-out;

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: fixed;
      background-image: repeating-linear-gradient(to right, #ffffff, #ffffff 2px, transparent 2px, transparent);
      background-size: 100px 100px;
      background-color: rgba(71, 212, 255, 0);
      top: 0;
      z-index: -999;
      opacity: .1;
    }
  }

  html {
    scroll-behavior: smooth;
  }

  div, h1, h2, h3, h4, h5, h6, p {
    cursor: default;
  }

  div, h1, h2, h3, h4, h5, h6, p, button, input, a {
    letter-spacing: 5px;
    padding: 0;
    margin: 0;
    font-weight: normal;
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #FF9B8D #690009;
  }

  /* Chrome, Edge and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    border-radius: 20px;
    background-color: #690009;
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #FF9B8D;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: rgb(199, 143, 167);
  }

  *::-webkit-scrollbar-thumb:active {
    background-color: rgb(199, 143, 167);
  }
`

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        }
    }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <Global/>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </QueryClientProvider>
  </React.StrictMode>,
)
