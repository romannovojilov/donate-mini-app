import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28TargetOutline from '@vkontakte/icons/dist/28/target_outline';
import Icon28CalendarOutline from '@vkontakte/icons/dist/28/calendar_outline';
import {
    Cell, Group, Div, Card, PanelHeader, Panel, IOS, platform, PanelHeaderButton,
    Headline, Caption
} from '@vkontakte/vkui';

import './DonationType.css';
import { setType } from '../../redux/actions';

const osName = platform();

const DonationType = ({ id, go, className = '' }) => {
    const dispatch = useDispatch();

    const setTypeHandler = e => {
        dispatch(setType(Number(e.currentTarget.dataset.type)));
        go(e);
    };

    return (
        <Panel id={id} className={`${className} DonationType`}>
            <PanelHeader
                left={<PanelHeaderButton onClick={go} data-to="donations">
                    {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
                </PanelHeaderButton>}
            >
                Тип сбора
            </PanelHeader>
            <Group className="DonationType__empty-content">
                <Div>
                    <Card mode="outline" className="DonationType__card" onClick={setTypeHandler} data-type="0" data-to="purposed-fund">
                        <Cell expandable before={<Icon28TargetOutline />}>
                            <Headline weight="medium">Целевой сбор</Headline>
                            <Caption className="DonationType__meta" level="1" weight="regular">Когда есть определённая цель</Caption>
                        </Cell>
                    </Card>
                    <Card mode="outline" className="DonationType__card" onClick={setTypeHandler} data-type="1" data-to="purposed-fund">
                        <Cell expandable before={<Icon28CalendarOutline />}>
                            <Headline weight="medium">Регулярный сбор</Headline>
                            <Caption className="DonationType__meta" level="1" weight="regular">Если помощь нужна ежемесячно</Caption>
                        </Cell>
                    </Card>
                </Div>
            </Group>
        </Panel>
    );
};

DonationType.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default DonationType;