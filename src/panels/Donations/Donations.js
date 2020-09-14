import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Div, Group, Placeholder, Button, PanelHeader, Panel } from '@vkontakte/vkui';

import './Donations.css';

import DonateRequestCard from '../../components/DonateRequestCard/DonateRequestCard';

const Donations = ({ id, go, className = '' }) => {
    const donateRequests = useSelector(state => state.donate.donateRequests);

    return (
        <Panel id={id} className={`${className} Donations`}>
            <PanelHeader>Пожертвования</PanelHeader>
            {
                donateRequests.length
                ? <Group>
                    {donateRequests.map(donateRequest => (
                        <Div key={donateRequest.id}>
                            <DonateRequestCard
                                donateRequest={donateRequest}
                                onHelp={() => console.log("Обрыв сценария по предоставленному дизайну!")}
                            />
                        </Div>
                    ))}
                    <Div className="Donations__actions">
                        <Button size="xl" level="2" onClick={go} data-to="donation-type">Создать сбор</Button>
                    </Div>
                </Group>
                : <Group className="Donations__empty-content">
                    <Placeholder action={<Button size="l" onClick={go} data-to="donation-type">Создать сбор</Button>} >
                        У Вас пока нет сборов.
                        <br />Начните доброе дело.
                    </Placeholder>
                </Group>
            }
        </Panel>
    );
};

Donations.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default Donations;