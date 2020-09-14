import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Icon20Dropdown from '@vkontakte/icons/dist/20/dropdown';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';
import Icon28ChevronDownOutline from '@vkontakte/icons/dist/28/chevron_down_outline';

import { platform, IOS } from '@vkontakte/vkui';
import './DatePicker.css';

const osName = platform();

const DatePicker = props => {
    return (
        <div className="Date__container">
            <input className="Date__element" type="date" placeholder="Выберите дату" /> 
            <span className="Date__icon">{osName === IOS ? <Icon24Dropdown /> : <Icon24Dropdown />}</span>
        </div>
    );
}

export default DatePicker;