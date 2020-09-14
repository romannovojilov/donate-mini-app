import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';
import Progress from '@vkontakte/vkui/dist/components/Progress/Progress';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import catImg from '../../img/Thinking-of-getting-a-cat.png';
import HeadLine from '@vkontakte/vkui/dist/components/Typography/Headline/Headline';
import SubHead from '@vkontakte/vkui/dist/components/Typography/Subhead/Subhead';
import Caption from '@vkontakte/vkui/dist/components/Typography/Caption/Caption';
import './Post.scss';

const osName = platform();

const Post = props => (
    <Panel id={props.id}>
        <div className='post__header'>
            <img src={catImg} alt='PostHeader' width='100%'></img>
        </div>
        <Group>
            <Div>
                <Title level={1} weight={'bold'}>Добряши помогают котикам</Title>
                <SubHead>Автор Матвей Правосудов</SubHead>
                <Caption>Сбор закончится через 5 дней</Caption>
            </Div>
        </Group>
        <Group>
            <Div>
                <Title level={1} weight={'bold'}>Добряши помогают котикам</Title>
                <Progress value='12'></Progress>
            </Div>
        </Group>

    </Panel>
)


export default Post