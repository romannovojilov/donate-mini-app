import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Title from '@vkontakte/vkui/dist/components/Typography/Title/Title';
import Progress from '@vkontakte/vkui/dist/components/Progress/Progress';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import catImg from '../../img/Thinking-of-getting-a-cat.png';
import SubHead from '@vkontakte/vkui/dist/components/Typography/Subhead/Subhead';
import Caption from '@vkontakte/vkui/dist/components/Typography/Caption/Caption';
import InfoRow from '@vkontakte/vkui/dist/components/InfoRow/InfoRow';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import './Post.scss';
import '../../components/DonateRequestCard/DonateRequestCard.css'


const Post = ({ id }) => {
    console.log('OnPOST PAGE')
    return (<Panel id={id}>
        <div className='post__header'>
            <img src={catImg} alt='PostHeader' width='100%'></img>
        </div>
        <Group>
            <Div>
                <Title level={1} weight={'bold'}>Добряши помогают котикам</Title>
                <SubHead weight={'medium'} style={{color: '#6D7885'}}>Автор Матвей Правосудов</SubHead>
                <InfoRow header='Сбор закончится через 5 дней'></InfoRow>
                <Caption></Caption>
            </Div>

        </Group>
        <Group>
            <Div>
                <Caption weight="medium">Нужно собрать до 10 сентября</Caption>
            </Div>
            <Div>
                <ProgressBar value={8750} maxValue={10000}></ProgressBar>
            </Div>
        </Group>
        <Group>
            <Div>
                <Caption weight='medium'>
                    Привет-привет, добряш
                    Я создал это событие, чтобы показать какие у меня прекрасные добряши и буду счастлив, если получится вдохновить кого-нибудь хотя бы на маленький перевод в пользу фонда Юна.
                <ul className='Description__list'>
                        <li>Если получится собрать 1 000 рублей, то это будет 5 обработанных животных от блох и клещей.</li>
                        <li>Собранные 5 000 рублей превратятся в 25 кг корма для подопечных фонда.</li>
                        <li>А 10 000 рублей позволят провести курс занятий с кинологом по социализации сложной собаки. Чтобы она легче нашла свой дом.</li>
                    </ul>
                В благотворительности не бывает маленьких сумм, поэтому если вы хотите помочь, то переведите любую сумму, будь-то 10 рублей или 1000 💚
                </Caption>
            </Div>
        </Group>
        <FixedLayout vertical='bottom' className="Post__progress">
            <Div style={{ display: 'flex' }}>
                <div className="DonateRequestCard__progress">
                    <Caption level="1" weight="medium" style={{ marginBottom: 8 }}>Собрано 8 750 ₽ из 10 000 ₽</Caption>
                    <Progress value={40} className='Progress_green' />
                </div>
                <Button mode="commerce">Помочь</Button>
            </Div>
        </FixedLayout>
    </Panel>)
}


export default Post