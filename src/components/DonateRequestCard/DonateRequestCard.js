import React from 'react';
import { Headline, Progress, Card, Caption, Button } from '@vkontakte/vkui';
import './DonateRequestCard.css';
import { useSelector } from 'react-redux';


const DonateRequestCard = ({ donateRequest, onHelp = () => {} }) => {

    const autor = useSelector(state => state.autors.find(autor => autor.id === donateRequest.autorId));

    const status = donateRequest.type
        ? 'Помощь нужна каждый месяц'
        : donateRequest.completionType
            ? `Закончится через ${((donateRequest.completedDate - Date.now()) / 86400000).toFixed(0)} дней`
            : `Осталось собрать ${donateRequest.neededAmount - donateRequest.currentAmount} ₽`;

    const progressPercent = donateRequest.currentAmount * 100 / donateRequest.neededAmount;

    const progressLabel = donateRequest.type
        ? `Собрано в сентябре ${donateRequest.currentAmount} ₽`
        : `Собрано ${donateRequest.currentAmount} ₽ из ${donateRequest.neededAmount} ₽`;

    return (
        <Card className="DonateRequestCard" mode="shadow">
            <img className="DonateRequestCard__photo" src={donateRequest.photo} alt={donateRequest.name} />
            <div className="DonateRequestCard__header">
                <Headline className="DonateRequestCard__title" weight="medium">{donateRequest.name}</Headline>
                <Caption className="DonateRequestCard__meta" level="1" weight="regular">{autor.name} · {status}</Caption>
            </div>
            <div className="DonateRequestCard__actions">
                <div className="DonateRequestCard__progress">
                    <Caption level="1" weight="regular" style={{ marginBottom: 8 }}>{progressLabel}</Caption>
                    <Progress value={progressPercent} />
                </div>
                <Button mode="outline" onClick={() => onHelp(donateRequest)}>Помочь</Button>
            </div>
        </Card>
    )
}

export default DonateRequestCard;