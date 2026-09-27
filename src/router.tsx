import { createBrowserRouter, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Impact from './pages/Impact'
import Stories from './pages/Stories'
import GetInvolved from './pages/GetInvolved'
import Contact from './pages/Contact'
import Donate from './pages/Donate'
import Volunteer from './pages/Volunteer'
import Partnerships from './pages/Partnerships'
import FAQ from './pages/FAQ'
import { PageTransition } from './components/PageTransition'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <PageTransition><Home /></PageTransition> },
        { path: 'about', element: <PageTransition><About /></PageTransition> },
        { path: 'programs', element: <PageTransition><Programs /></PageTransition> },
        { path: 'impact', element: <PageTransition><Impact /></PageTransition> },
        { path: 'stories', element: <PageTransition><Stories /></PageTransition> },
        { path: 'get-involved', element: <PageTransition><GetInvolved /></PageTransition> },
        { path: 'contact', element: <PageTransition><Contact /></PageTransition> },
        { path: 'donate', element: <PageTransition><Donate /></PageTransition> },
        { path: 'volunteer', element: <PageTransition><Volunteer /></PageTransition> },
        { path: 'partnerships', element: <PageTransition><Partnerships /></PageTransition> },
        { path: 'faq', element: <PageTransition><FAQ /></PageTransition> },
      ],
    },
    { path: '*', element: <Navigate to="/" replace /> },
  ],
  {
    future: {
      v7_startAction: true,
      v7_relativeSiblings: true,
    },
  },
)