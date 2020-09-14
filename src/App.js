import React, { useState, useEffect } from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import './App.css';

import Donations from './panels/Donations/Donations';
import DonationType from './panels/DonationType/DonationType';
import PurposedFund from './panels/PurposedFund/PurposedFund';
import AdditionalFund from './panels/AdditionalFund/AdditionalFund';
import { useScreenSpinner } from './hooks/useScreenSpinner';
import { useSelector } from 'react-redux';

const App = () => {
    const [activePanel, setActivePanel] = useState('donations');
    const [popout, hidePopout] = useScreenSpinner();
    useEffect(() => hidePopout(), []);

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to);
    };

    const type = useSelector(state => state.donate.type);


    return (
        <View activePanel={activePanel} popout={popout}>
            <Donations id='donations' go={go} className="App__panel" />
            <DonationType id='donation-type' go={go} className="App__panel" />
            <PurposedFund id='purposed-fund' go={go} type={type} className="App__panel" />
            <AdditionalFund id='additional-fund' go={go} type={type} className="App__panel" />
        </View>
    );
}

export default App;
