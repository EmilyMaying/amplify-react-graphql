//App.js]
import { Authenticator } from '@aws-amplify/ui-react';

import { Protected } from './components/login/Protected';
import { RequireAuth } from './components/login/RequireAuth';
import { Login } from './components/login/Login';
import { ProtectedSecond } from './components/login/ProtectSecond';
import { Home } from './components/home/Home';
import { Layout } from './components/layout/Layout';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <Protected />
              </RequireAuth>
            }
          />
          <Route
            path="/protected2"
            element={
              <RequireAuth>
                <ProtectedSecond />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Authenticator.Provider>
      <MyRoutes />
    </Authenticator.Provider>
  );
}

export default App;