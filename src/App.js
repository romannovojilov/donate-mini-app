import React, { useState, useEffect } from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import './App.css';

import Donations from './panels/Donations/Donations';
import { useScreenSpinner } from './hooks/useScreenSpinner';
import { useSelector } from 'react-redux';

const App = () => {
	const [activePanel, setActivePanel] = useState('donations');

	const [popout, hidePopout] = useScreenSpinner();
	useEffect(() => hidePopout(), []);

	const state = useSelector(state => state);
	console.log(state);


	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Donations id='donations' go={go} className="App__panel" />
		</View>
	);
}

export default App;

