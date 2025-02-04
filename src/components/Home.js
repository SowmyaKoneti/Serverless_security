import React, { useState } from 'react';
import '../App.css';

function Home() {
    const challenges = [
        {
            title: 'Data Privacy',
            description: 'Sensitive data processed across third-party services in distributed serverless environments can lead to privacy risks'
        },
        {
            title: 'Function Isolation',
            description: 'Serverless platforms are multi-tenant environments, which increases the risk of resource contention and data leakage'
        },
        {
            title: 'Privilege Escalation',
            description: ' Functions granted more permissions than necessary pose risks of unauthorized access to sensitive data'
        },
        {
            title: 'Cold Starts',
            description: 'Serverless functions may experience delays during startup when invoked after a period of inactivity, leading to performance bottlenecks'
        },
        {
            title: 'Code Injection Attacks',
            description: 'Malicious code injection in serverless functions can lead to unauthorized actions and data breaches'
        },
        {
            title: 'Denial of Service (DoS) and DDoS',
            description: 'Serverless platforms auto-scaling feature can be exploited, causing resource exhaustion and increased operational costs'
        },

    ];

    const ChallengeCard = ({ title, description }) => {
        const [isFlipped, setIsFlipped] = useState(false);

        const handleClick = () => {
            setIsFlipped(!isFlipped);
        };
        return (
            <div className="challenge-card" onClick={handleClick}>
                <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
                    <div className="card-front">
                        <h2>{title}</h2>
                    </div>
                    <div className="card-back">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="home" className="section">
            <div className="hero">
                <h1 className="main-title">Security for Serverless Computing</h1>
                <p>
                    Increased usage of serverless computing came up with several security constraints that must be put into consideration. These include function isolation, function data privacy, and secure chaining of functions. Function isolation is important as no one function has direct access to another and thereby pinpoints a compromised system.
                </p>
                <p>
                    Another major issue is data privacy, especially for a facility that extends into a multi-tenant area where users’ information might become vulnerable for sharing.
                    Secure function chaining in which several functions are invoked consecutively have also been identified to pose serious problems such as code injection and privilege escalation. These threats mostly get access to vulnerabilities within the serverless frameworks, which in the end results in unauthorized access or even data breaches.
                </p>
                <p>
                    To overcome these issues, strong cybersecurity should be provided by regular IAM practices, security audits, and the need for monitoring tools. By paying attention to these aspects, organizations will be in a position to improve the security of serverless applications while minimizing the risks posed by this more popular computing model.
                </p>
            </div>

            <h2 className='h2'>Key Challenges</h2>
            <div className="challenges-container">
                {challenges.map((challenge, index) => (
                    <ChallengeCard
                        key={index}
                        title={challenge.title}
                        description={challenge.description}
                    />
                ))}
            </div>

            {/* <h2 className='recent-h2'> Recent Trends</h2>
            <p className="recent-trends">In this section, we will explore the latest advancements in securing serverless applications, highlighting trends such as frameworks for defending against threats like code injection and privilege escalation.</p> */}
        </section>
    );
}

export default Home;