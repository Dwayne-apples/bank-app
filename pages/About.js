import React from 'react';

export default function About() {   
    return (
        <div className="background"> {/* Container with a background class for styling */}
            
            {/* Main heading for the About section */}
            <h1 style={{ color: 'white' }}>About</h1>

            {/* Description of the application with padding adjustments */}
            <h4 className='homepage' style={{ height: 'auto', paddingBottom: '400px', paddingTop: '50px' }}>
                This bank app was created by Dwayne Alcala and Michael Bui. Users can access different pages by clicking buttons to go to each section
                or scrolling vertically. It consists of four pages:

                {/* List of pages available in the application */}
                <ul style={{ textAlign: 'left' }}>
                    <li>Homepage</li>
                    <li>About</li>
                    <li>Currency Converter</li>
                    <li>Bank Number validation</li>
                </ul>
            </h4>

        </div> 
    );
};