import React, { useState } from 'react';

const Tabs: React.FC<{ tabs: string[]; onTabChange: (tab: string) => void }> = ({ tabs, onTabChange }) => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        onTabChange(tab);
    };

    return (
        <div>
            <ul className="tabs">
                {tabs.map((tab) => (
                    <li key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => handleTabClick(tab)}>
                        {tab}
                    </li>
                ))}
            </ul>
            <div className="tab-content">
                {activeTab === tabs[0] && <div>Content for {tabs[0]}</div>}
                {activeTab === tabs[1] && <div>Content for {tabs[1]}</div>}
                {/* Add more tab content as needed */}
            </div>
        </div>
    );
};

export default Tabs;