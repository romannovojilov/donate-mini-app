import React, { useState, useEffect } from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import { useScreenSpinner } from './hooks/useScreenSpinner';
import { useSelector } from 'react-redux';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, showPopout, hidePopout] = useScreenSpinner();

	const state = useSelector(state => state);
	console.log(state);

	useEffect(() => {
		const timeout = setTimeout(() => {
			hidePopout();
		}, 1000);
		return () => clearTimeout(timeout);
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<Persik id='persik' go={go} />
		</View>
	);
}

export default App;

