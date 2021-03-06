import React, { useState, useEffect } from 'react';
import './Welcome.css';
import Button from '../Button/Button';
import SelectDeck from '../SelectDeck/SelectDeck';
import Contador from '../Contador/Contador';
import logo from '../../assets/images/logo.png';

const Welcome = (props) => {
    const { selectedDeck, setScreen, setSelectedDeck, decks, meta, setMeta } =
        props;
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (selectedDeck) {
            setDisabled(false);
        }
    }, [selectedDeck]);

    return (
        <div className="welcome-container">
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
            <SelectDeck
                decks={decks}
                setSelectedDeck={setSelectedDeck}
                selectedDeck={selectedDeck}
                setMeta={setMeta}
            />
            {selectedDeck ? (
                <>
                    <p className="deck-description">
                        Este deck tem {decks[selectedDeck].length} cartas
                    </p>
                    <p className="deck-description">Qual sua meta?</p>
                    <Contador
                        max={decks[selectedDeck].length}
                        meta={meta}
                        setMeta={setMeta}
                    />
                </>
            ) : (
                <p className="deck-description">Escolha um deck</p>
            )}
            <Button
                {...props}
                disabled={disabled}
                handleClick={() => setScreen('GameScreen')}
                mensagem={'Iniciar Recall!'}
            />
        </div>
    );
};

export default Welcome;
