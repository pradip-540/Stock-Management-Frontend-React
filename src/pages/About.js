// CustomerSupport.js

import React from 'react';
import Footer from './Footer';
import Header from '../components/Header';

const CustomerSupport = () => {
    return (
        <>
            <Header />
            <div style={containerStyle}>
                <div style={contentColumnStyle}>
                    <div style={contentStyle}>
                        <h1 style={headingStyle}>Customer Support</h1>
                        <p style={descriptionStyle}>Welcome to our customer support page. We are here to assist you with any questions or issues you may have. Please feel free to contact us using the information below or explore our support resources.</p>
                        <div>
                            <h2 style={sectionHeadingStyle}>Contact Information</h2>
                            <p style={infoStyle}>Phone: 123-456-7890</p>
                            <p style={infoStyle}>Email: support@example.com</p>
                            <p style={infoStyle}>Address: 123 Main Street, City, Country</p>
                        </div>
                        <div>
                            <h2 style={sectionHeadingStyle}>Support Resources</h2>
                            <ul style={listStyle}>
                                <li><a href="/faq" style={linkStyle}>FAQs</a></li>
                                <li><a href="/knowledge-base" style={linkStyle}>Knowledge Base</a></li>
                                <li><a href="/troubleshooting" style={linkStyle}>Troubleshooting Guides</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={imageColumnStyle}>
                    <img src="https://jelvix.com/wp-content/uploads/2021/05/7.png" alt="Support Image" style={imageStyle} />
                </div>
            </div>
            <Footer />
        </>
    );
};

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f8f8f8',
    minHeight: 'calc(100vh - 120px)', // Adjust as needed to ensure the footer stays at the bottom
};

const contentColumnStyle = {
    flex: '1',
    marginRight: '20px',
};

const imageColumnStyle = {
    flex: '1',
};

const contentStyle = {
    maxWidth: '800px',
    textAlign: 'center',
};

const headingStyle = {
    fontSize: '2rem',
    marginBottom: '10px',
    fontfamily: 'Adamina',
};

const descriptionStyle = {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '30px',
};

const sectionHeadingStyle = {
    fontSize: '1.5rem',
    marginBottom: '10px',
};

const infoStyle = {
    fontSize: '1rem',
    marginBottom: '20px',
};

const listStyle = {
    fontSize: '1rem',
    marginBottom: '20px',
    listStyle: 'none',
    padding: 0,
};

const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
};

const imageStyle = {
    width: '100%',
    height: 'auto',
};

export default CustomerSupport;
