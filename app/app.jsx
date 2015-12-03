import './favicon.ico'
import './index.html'
import 'babel-core/polyfill'
import 'normalize.css/normalize.css'
import './scss/app.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { devTools, persistState } from 'redux-devtools'
import {CompositeMonitor, debugPanelDecorator} from 'redux-devtools-monitor-dock'
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'
import Main from './containers/App'
import reducer from './reducers/reducers'

const topRightBottomDebugPanelDecorator = debugPanelDecorator({top:true, right:true, bottom:true})

const finalCreateStore = compose(
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)

let store = finalCreateStore(reducer)

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Main />
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store}
                    monitor={LogMonitor}
                    visibleOnLoad={true} />
        </DebugPanel>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
