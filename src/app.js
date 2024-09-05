import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatPage from './routes/chat/pages/chat-page';
import LoginPage from './routes/login/pages/login-page';
import MainPage from './routes/main/pages/main-page';
import SajuPage from './routes/saju/pages/saju-page';
import { Header } from './components/header';
import SetProfilePage from './routes/set-profile/pages/set-profile-page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex flex-col">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/saju" element={<SajuPage />} />
              <Route path="/set-profile" element={<SetProfilePage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
