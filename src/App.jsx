import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardContainer from "./components/CardContainer";
import { ApiProvider } from "./context/ApiContext";

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="min-h-screen xl:container mx-auto text-white">
      <ApiProvider>
        <header>
          <Navbar onSearchChange={handleSearchChange} />
        </header>
        <Hero />

        {/* Context Api Sending to different components */}

        <CardContainer searchTerm={searchTerm}/>
      </ApiProvider>
    </div>
  );
};

export default App;
