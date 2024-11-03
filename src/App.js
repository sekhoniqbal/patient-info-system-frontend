
import { Toaster } from 'react-hot-toast';
import Header from './components/layout/header';
import Sidebar from './components/layout/sidebar';
import MainContent from './components/layout/main-content';
import useAuthentication from './hooks/useAuthentication';
import { useEffect } from 'react';
import LoginPage from './components/pages/login-page';
import authenticationService from './service/authentication-service';

const newAuthInfo = { "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpc2luZ2giLCJpYXQiOjE3MzA1OTMxNDMsImV4cCI6MTczMDYyOTE0M30.i1qLOTflFuVKQkBbVyCYhXB9HZLdjIRKPLhdDwO2IblLXqgGdcGlrW_UMJCRQt6WuRJO7v_f7UfdmezYDAZf9A", "createdAt": "2024-11-03T00:19:03.000+00:00", "expiresAt": "2024-11-03T10:19:03.000+00:00" }

function App() {
  const { authInfo } = useAuthentication();
  return (
    <div className="App">
      {authInfo ?
        <>
          <Header />
          <section class="main">
            <Sidebar />
            <MainContent />
          </section>
        </>
        : <LoginPage />
      }
      <Toaster />
    </div>
  );
}

export default App;
