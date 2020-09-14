import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import { platform, IOS, FormLayout, Button, Input, Select, Textarea } from '@vkontakte/vkui';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import FileUpload from '../../components/FileUpload/FileUpload';
import { useDispatch } from 'react-redux';
import { createDonateRequest } from '../../redux/actions';

import './PurposedFund.css';

const osName = platform();

const PurposedFund = ({ id, go, type = 0, className = '' }) => {
	const dispatch = useDispatch();

	const myFunc = (e) => {
		dispatch(createDonateRequest({
			photo: 'https://proza.ru/pics/2020/04/26/986.jpg', // ссылка на фото
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
				left={<PanelHeaderButton onClick={go} data-to="donation-type">
					{osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
				</PanelHeaderButton>}
			>
				{ type == 1 ? 'Регулярный сбор' : 'Целевой сбор' }
			</PanelHeader>

			<FormLayout>
				<FileUpload />
				<Input top="Название сбора" placeholder="Название сбора" />
				{
					type == 1
						? <Input top="Сумма в месяц, &#8381;" placeholder="Сколько нужно в месяц?" />
						: <Input top="Сумма, &#8381;" placeholder="Сколько нужно собрать?" />
				}
				<Input top="Цель" placeholder="Например, лечение человека" />
				<Textarea top="Описание" placeholder="На что пойдут деньги и как они кому-то помогут?" />
				<Select
					top="Куда получать деньги"
					placeholder="Выберите счет"
				>
					<option value="1">Счёт VK Pay · 1234</option>
					<option value="2">Счёт VK Pay · 5432</option>
					<option value="3">Счёт VK Pay · 2351</option>
				</Select>

				{
					(type == 1) ? (
						<Select
							top="Автор"
							placeholder="Назначьте автора"
						
						>
							<option value="1">Роман Новожилов</option>
							<option value="2">Дмитрий Есин</option>
							<option value="3">Олег Сапа</option>
						</Select>
					)
					: ''
				}

				{
					(type == 1)
						? <Button size="xl" onClick={myFunc} data-to="donations">Создать сбор</Button>
						: <Button size="xl" onClick={go} data-to="additional-fund">Далее</Button>
				}
			</FormLayout>
		</Panel>
	);
}

PurposedFund.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
	className: PropTypes.string,
	type: PropTypes.number
};

export default PurposedFund;
