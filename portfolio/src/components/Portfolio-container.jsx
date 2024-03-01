import React, { useState } from 'react';

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const handlePageChange = (page) => setCurrentPage(page);

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;

        } else if (currentPage === 'About') {
            return <About />;
        } else if (currentPage === 'projects') {
            return <Portfolio />;
        } else if (currentPage === 'Contact') {
            return <Contact />;
        }
    }
    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}

export default PortfolioContainer;
