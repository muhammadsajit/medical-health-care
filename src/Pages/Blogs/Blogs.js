import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center text-primary'>Frequent Question</h1>
            <div className='ps-3'>
              <h2>Difference between authorization and authentication</h2>
              <p>Authorization determines what resources a user can access and Authentication verifies who the user is.Authorization works through settings that are implemented and maintained by the organization and Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authorization always takes place after authentication and Authentication is the first step of a good identity and access management process.Authorization isn't visible to or changeable by the user and Authentication is visible to and partially changeable by the user.Example: After an employee successfully authenticates, the system determines what information the employees are allowed to access and Example: Employees in a company are required to authenticate through the network before accessing their company email.</p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Blogs;
