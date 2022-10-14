import { FatalErrorBoundary, MetaTags, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import 'mvp.css/mvp.css'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import './devices.min.css'
import './index.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%AppTitle">
      <RedwoodApolloProvider>
        <MetaTags
          title="Device Frame"
          description="Preview and share what your site looks like in a mobile device frame."
        />
        <Routes />
      </RedwoodApolloProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
