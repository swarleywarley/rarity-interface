import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

import Home from './views/home'

function getLibrary(provider) {
  return new Web3Provider(provider)
}

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      {/* https://stackoverflow.com/questions/54427793/getting-blank-page-after-react-app-publish-in-github  */}
      <Router basename={process.env.PUBLIC_URL}>   
        <div>
          <Route exact component={Home} path="/" />
        </div>
      </Router>
    </Web3ReactProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
