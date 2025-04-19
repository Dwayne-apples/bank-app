import React from 'react';
import Link from 'next/link';

export default function Homepage() {  

    return (
        <div className="background"> {/* Main container with a background class */}
    
            <header className="navigationBar"> {/* Navigation bar section */}
                
                {/* Heading with a class and inline style to change text color to blue */}
                <h1 className="homepage" style={{ color: '#007bff' }}> 
                    Welcome to Bank App
                </h1>
    
            </header>    
    
        </div>
    );
};