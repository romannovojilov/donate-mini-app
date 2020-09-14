import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import { platform, IOS, FormLayout, File, Div, Button, Group, Input, Select, Radio, FormLayoutGroup } from '@vkontakte/vkui';

import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';
import Icon24CameraOutline from '@vkontakte/icons/dist/24/camera_outline';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import FileUpload from '../../components/FileUpload/FileUpload';
import { useDispatch } from 'react-redux';
import { createDonateRequest } from '../../redux/actions';
import DatePicker from '../../components/DatePicker/DatePicker';

const osName = platform();

const AdditionalFund = ({ id, go, type, className }) => {
	const dispatch = useDispatch();

	const myFunc = (e) => {
		dispatch(createDonateRequest({
			photo: 'https://im0-tub-ru.yandex.net/i?id=24db17edf66ec83ee9b500b4dcf59213&n=13&exp=1', // ссылка на фото
			name: 'Заголовок', // заголовок
			neededAmount: 2000, // необходимая сумма
			purpose: 'Цель сбора', // цель сбора
			description: 'Описание', // описание
			currencyAccountId: 1, // ID счета
			autorId: 1, // автор
			completionType: 0 | 1, // тип поля "сбор совершится"
			completedDate: Date.now() | 0, // если completionType == 1 ? вставляем дату : 0
			type // 0 - целевой; 1 - регулярный
		}));
		go(e);
	};

	return (
		<Panel className={className} id={id}>
			<PanelHeader
				left={<PanelHeaderButton onClick={go} data-to="purposed-fund">
					{osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
				</PanelHeaderButton>}
			>
				Дополнительно
			</PanelHeader>

			<FormLayout>
				<Select
					top="Автор"
					placeholder="Назначьте автора"
				>
					<option value="0">Роман Новожилов</option>
					<option value="1">Дмитрий Есин</option>
					<option value="2">Олег Сапа</option>
				</Select>

				<FormLayoutGroup top="Сбор завершится">
					<Radio name="fundCostReady">Когда соберём сумму</Radio>
					<Radio name="fundByDate" checked>В определённую дату</Radio>
				</FormLayoutGroup>

				<FormLayoutGroup top="Сбор завершится">
					<DatePicker />
				</FormLayoutGroup>

				<Button size="xl" onClick={myFunc} data-to="donations">Создать сбор</Button>
			</FormLayout>
		</Panel>
	);
}

export default AdditionalFund;
