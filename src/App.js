import { LocaleProvider, Drawer, Button, Translate } from '@plesk/ui-library';
import { useState } from 'react';
import '@plesk/ui-library/dist/plesk-ui-library.css';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const messages = {
      message: 'progress',
  };

  return (
    <div className="App">
      <header className="App-header">
          <LocaleProvider messages={messages}>
              <>
                  <Button onClick={() => setIsOpen(true)}>show drawer</Button>
                  <Drawer
                      title={'test'}
                      isOpen={isOpen}
                      progress={{ title: <Translate content="message" /> }}
                  >
                      drawer body
                  </Drawer>
              </>
          </LocaleProvider>
      </header>
    </div>
  );
}

export default App;
