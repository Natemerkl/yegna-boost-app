import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { CreateCampaign } from './pages/CreateCampaign';
import { CampaignManagement } from './pages/CampaignManagement';
import { DonorPage } from './pages/DonorPage';
import { Community } from './pages/Community';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<CreateCampaign />} />
          <Route path="manage" element={<CampaignManagement />} />
          <Route path="donate" element={<DonorPage />} />
          <Route path="community" element={<Community />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);