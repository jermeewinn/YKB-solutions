import React from 'react';
import { Helmet } from 'react-helmet';

const Disclosures = () => {
    return(
        <section id='disclosures'>
            <div>
                <Helmet>
                    <title>YKB Coaching | Disclosures</title>
                </Helmet>
            </div>
            <h1>Disclosures</h1>
            <p>
            WARNING: This product can expose you to [name of chemical], which is known to the State of California to cause cancer. For more information, go to www.P65Warnings.ca.gov.
            </p>
        </section>
    );
};

export default Disclosures;