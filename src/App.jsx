import React, { useState } from 'react';
import Welcome from './components/Welcome/Welcome';
import GameScreen from './components/GameScreen/GameScreen';

const App = () => {
    const decks = {
        React: [
            {
                pergunta: 'O que é o JSX?',
                resposta: 'Uma extensão de linguagem do JavaScript',
            },
            {
                pergunta: 'O React é __',
                resposta:
                    'uma biblioteca JavaScript para construção de interfaces',
            },
            {
                pergunta: 'Componentes devem iniciar com __ ',
                resposta: 'letra maiúscula',
            },
            {
                pergunta: 'Podemos colocar __ dentro do JSX',
                resposta: 'expressões',
            },
            {
                pergunta: 'O ReactDOM nos ajuda __',
                resposta:
                    'interagindo com a DOM para colocar componentes React na mesma',
            },
            {
                pergunta: 'Usamos o npm para __',
                resposta:
                    'gerenciar os pacotes necessários e suas dependências',
            },
            {
                pergunta: 'Usamos props para __ ',
                resposta: 'passar diferentes informações para componentes ',
            },
            {
                pergunta: 'Usamos estado (state) para __',
                resposta:
                    'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
            },
        ],
        Fundamentos: [
            {
                pergunta: 'O nome que damos pra esse processo de disponibilizar ou atualizar um site pro público é ',
                resposta: 'Deploy',
            },
            {
                pergunta:
                    'O que é O Endereço IP?',
                resposta: 'é um endereço exclusivo que identifica um dispositivo na Internet ou em uma rede local',
            },
            {
                pergunta: 'O que é endereço MAC?',
                resposta: 'é um endereço físico e único, que é associado à interfaces de comunicação',
            },
            {
                pergunta: 'O que é DNS?',
                resposta: 'converte nomes de domínio legíveis por humanos em endereços IP',
            },
            {
                pergunta: 'O que é GIT?',
                resposta: ' um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software',
            },
        ],
        Paulistão: [
            {
                pergunta: 'Quem e porque o Corinthians vai ser campeão Paulista?',
                resposta: 'Corinthians',
            },
            {
                pergunta: 'Quem e porque o Corinthians vai ser campeão Paulista?',
                resposta: 'Palmeiras',
            },
            {
                pergunta: 'Quem e porque o Corinthians vai ser campeão Paulista?',
                resposta: 'São Paulo',
            },
            {
                pergunta: 'Quem e porque o Corinthians vai ser campeão Paulista?',
                resposta: 'Ponte Preta',
            },
            {
                pergunta: 'Quem e porque o Corinthians vai ser campeão Paulista?',
                resposta: 'Bebida Energética',
            },
        ],
    };
    const [acertos, setAcertos] = useState(0);
    const [meta, setMeta] = useState(0);
    const [selectedDeck, setSelectedDeck] = useState('');
    const [screen, setScreen] = useState('Welcome');

    return (
        <>
            {screen === 'Welcome' && (
                <Welcome
                    decks={decks}
                    setScreen={setScreen}
                    setSelectedDeck={setSelectedDeck}
                    selectedDeck={selectedDeck}
                    meta={meta}
                    setMeta={setMeta}
                />
            )}
            {screen === 'GameScreen' && (
                <GameScreen
                    decks={decks}
                    setScreen={setScreen}
                    selectedDeck={selectedDeck}
                    acertos={acertos}
                    setAcertos={setAcertos}
                    meta={meta}
                />
            )}
        </>
    );
};

export default App;
