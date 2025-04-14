
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import routing components
import './App.css';
import Header from './componets/Header';  // Corrected the typo here
import ProjectsSection from './componets/Project';  // Corrected the typo here

// Import pages
import Home from './pages/Home';
import Contact from './pages/Contact';
// import About from './pages/About';
import Skills from './componets/Skills'; 

function App() {
  return (
    <Router>  
      <Header />
      <div>
        {/* Set up routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<ProjectsSection />} />
         
          <Route path="/skills" element={<Skills />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;


















// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import routing components
// import './App.css';
// import Header from './componets/Header';  // Correct the typo in the path (componets -> components)
// import ProjectsSection from './componets/Project';
// // import ContactForm from './componets/ContactForm';
// import InteractiveResume from './components/InteractiveResume';
// // Import pages
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// // import About from './pages/About';



// function App() {
//   return (
//     <Router>  
//       <Header />
//       <div>
//         {/* Set up routes for different pages */}
//         <Routes>
//           <Route path="/" element={<Home />} />
        
//            {/* <Route path="/about" element={<About />} />*/}
//           {/* <Route path="/contact" element={<ContactForm />} />  */}
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/projects" element={<ProjectsSection />} /> 
//           <Route path="/resume" element={<InteractiveResume />} /> 
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
