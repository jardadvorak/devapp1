// src/pagesstaticcontent/EuropeanCapitalsQuiz.jsx
// European Capitals Quiz Component

import React, { useState, useEffect } from 'react';
import { useWindowSize } from '../utilities/UseWindowSize';
import { screenWidthSettings } from '../config/styles/page_width';

const EuropeanCapitalsQuiz = () => {
    // Handle responsiveness
    const windowSize = useWindowSize();
    const isMobileScreen = windowSize.width < screenWidthSettings.mobileScreenMaxWidth;
    const isSmallScreen = windowSize.width >= screenWidthSettings.mobileScreenMaxWidth && windowSize.width < screenWidthSettings.smallScreenMaxWidth;

    // European countries data
    const europeanCountries = [
        { country: "Albánie", capital: "Tirana" },
        { country: "Andorra", capital: "Andorra la Vella" },
        { country: "Arménie", capital: "Jerevan" },
        { country: "Rakousko", capital: "Vídeň" },
        { country: "Ázerbájdžán", capital: "Baku" },
        { country: "Bělorusko", capital: "Minsk" },
        { country: "Belgie", capital: "Brusel" },
        { country: "Bosna a Hercegovina", capital: "Sarajevo" },
        { country: "Bulharsko", capital: "Sofie" },
        { country: "Chorvatsko", capital: "Záhreb" },
        { country: "Kypr", capital: "Nikósie" },
        { country: "Česká republika", capital: "Praha" },
        { country: "Dánsko", capital: "Kodaň" },
        { country: "Estonsko", capital: "Tallinn" },
        { country: "Finsko", capital: "Helsinki" },
        { country: "Francie", capital: "Paříž" },
        { country: "Gruzie", capital: "Tbilisi" },
        { country: "Německo", capital: "Berlín" },
        { country: "Řecko", capital: "Athény" },
        { country: "Maďarsko", capital: "Budapešť" },
        { country: "Island", capital: "Reykjavík" },
        { country: "Irsko", capital: "Dublin" },
        { country: "Itálie", capital: "Řím" },
        { country: "Kazachstán", capital: "Nur-Sultan" },
        { country: "Kosovo", capital: "Priština" },
        { country: "Lotyšsko", capital: "Riga" },
        { country: "Lichtenštejnsko", capital: "Vaduz" },
        { country: "Litva", capital: "Vilnius" },
        { country: "Lucembursko", capital: "Lucemburk" },
        { country: "Malta", capital: "Valletta" },
        { country: "Moldavsko", capital: "Kišiněv" },
        { country: "Monako", capital: "Monaco" },
        { country: "Černá Hora", capital: "Podgorica" },
        { country: "Nizozemsko", capital: "Amsterdam" },
        { country: "Severní Makedonie", capital: "Skopje" },
        { country: "Norsko", capital: "Oslo" },
        { country: "Polsko", capital: "Varšava" },
        { country: "Portugalsko", capital: "Lisabon" },
        { country: "Rumunsko", capital: "Bukurešť" },
        { country: "Rusko", capital: "Moskva" },
        { country: "San Marino", capital: "San Marino" },
        { country: "Srbsko", capital: "Bělehrad" },
        { country: "Slovensko", capital: "Bratislava" },
        { country: "Slovinsko", capital: "Lublaň" },
        { country: "Španělsko", capital: "Madrid" },
        { country: "Švédsko", capital: "Stockholm" },
        { country: "Švýcarsko", capital: "Bern" },
        { country: "Turecko", capital: "Ankara" },
        { country: "Ukrajina", capital: "Kyjev" },
        { country: "Spojené království", capital: "Londýn" },
        { country: "Vatikán", capital: "Vatikán" }
    ];

    // State management
    const [currentScreen, setCurrentScreen] = useState('intro');
    const [quizType, setQuizType] = useState('countryToCapital');
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [showFeedback, setShowFeedback] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [quizDateTime, setQuizDateTime] = useState('');

    // Utility functions
    const shuffle = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const generateWrongAnswers = (correctAnswer, allCountries, mode) => {
        let wrongAnswers;
        if (mode === 'countryToCapital') {
            wrongAnswers = allCountries
                .filter(country => country.capital !== correctAnswer)
                .map(country => country.capital);
        } else {
            wrongAnswers = allCountries
                .filter(country => country.country !== correctAnswer)
                .map(country => country.country);
        }
        
        return shuffle(wrongAnswers).slice(0, 3);
    };

    const prepareQuestions = () => {
        const shuffledCountries = shuffle(europeanCountries);
        const selectedCountries = shuffledCountries.slice(0, 10);
        
        const questions = selectedCountries.map(country => {
            try {
                if (quizType === 'countryToCapital') {
                    const wrongAnswers = generateWrongAnswers(country.capital, europeanCountries, 'countryToCapital');
                    const allOptions = shuffle([country.capital, ...wrongAnswers]);
                    
                    return {
                        text: `Jaké je hlavní město země ${country.country}?`,
                        options: allOptions,
                        correct: country.capital,
                        country: country.country
                    };
                } else {
                    const wrongAnswers = generateWrongAnswers(country.country, europeanCountries, 'capitalToCountry');
                    const allOptions = shuffle([country.country, ...wrongAnswers]);
                    
                    return {
                        text: `Které země je hlavním městem ${country.capital}?`,
                        options: allOptions,
                        correct: country.country,
                        capital: country.capital
                    };
                }
            } catch (error) {
                console.error('Chyba při vytváření otázky pro zemi:', country, error);
                return null;
            }
        }).filter(question => question !== null);
        
        setSelectedQuestions(questions);
    };

    // Event handlers
    const startQuiz = () => {
        setCurrentScreen('quizMode');
    };

    const startSelectedQuiz = () => {
        if (!quizType) {
            alert('Prosím vyberte typ kvízu');
            return;
        }
        
        setCurrentScreen('quiz');
        setQuizDateTime(new Date().toLocaleString('cs-CZ'));
        setStartTime(new Date());
        setCurrentQuestion(0);
        setCorrectAnswers(0);
        setSelectedAnswer('');
        setShowFeedback(false);
        
        prepareQuestions();
    };

    const goBackToIntro = () => {
        setCurrentScreen('intro');
    };

    const handleAnswerSelect = (answer) => {
        setSelectedAnswer(answer);
    };

    const checkAnswer = () => {
        if (!selectedAnswer) {
            alert('Prosím vyberte odpověď');
            return;
        }

        const question = selectedQuestions[currentQuestion];
        if (!question) {
            console.error('Otázka neexistuje pro index:', currentQuestion);
            return;
        }
        
        const isCorrect = selectedAnswer === question.correct;
        if (isCorrect) setCorrectAnswers(prev => prev + 1);
        
        setShowFeedback(true);

        setTimeout(() => {
            if (currentQuestion + 1 < selectedQuestions.length) {
                setCurrentQuestion(prev => prev + 1);
                setSelectedAnswer('');
                setShowFeedback(false);
            } else {
                showResults();
            }
        }, 2000);
    };

    const showResults = () => {
        setCurrentScreen('results');
    };

    const restartQuiz = () => {
        setCurrentScreen('intro');
        setCurrentQuestion(0);
        setCorrectAnswers(0);
        setSelectedAnswer('');
        setShowFeedback(false);
        setSelectedQuestions([]);
    };

    // Styles
    const getStyles = () => ({
        container: {
            fontFamily: 'Arial, sans-serif',
            maxWidth: '800px',
            margin: '20px auto',
            padding: '0 20px',
            color: 'var(--text-color-normal)'
        },
        question: {
            margin: '20px 0',
            padding: '15px',
            background: 'var(--background-color-2)',
            borderRadius: '5px'
        },
        options: {
            margin: '10px 0'
        },
        option: {
            display: 'block',
            margin: '8px 0',
            cursor: 'pointer',
            padding: '8px',
            background: 'var(--background-color-1)',
            border: '2px solid #ddd',
            borderRadius: '4px',
            transition: 'all 0.2s'
        },
        optionHover: {
            background: '#f0f8ff',
            borderColor: '#007bff'
        },
        button: {
            padding: '10px 20px',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '5px'
        },
        buttonSecondary: {
            padding: '10px 20px',
            background: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '5px'
        },
        buttonSuccess: {
            padding: '10px 20px',
            background: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '5px'
        },
        feedback: {
            margin: '10px 0',
            padding: '10px',
            borderRadius: '5px'
        },
        feedbackCorrect: {
            background: '#d4edda',
            color: '#155724'
        },
        feedbackIncorrect: {
            background: '#f8d7da',
            color: '#721c24'
        },
        stats: {
            margin: '10px 0',
            fontStyle: 'italic'
        },
        countryName: {
            fontWeight: 'bold',
            color: '#2c5aa0'
        },
        radioLabel: {
            display: 'block',
            margin: '10px 0',
            cursor: 'pointer',
            padding: '8px',
            background: 'var(--background-color-1)',
            border: '2px solid #ddd',
            borderRadius: '4px'
        }
    });

    const styles = getStyles();

    // Render different screens
    const renderIntro = () => (
        <div style={styles.container}>
            <h1>Kvíz - Evropská hlavní města</h1>
            <h2>{quizDateTime}</h2>
            <p>V tomto kvízu si otestujete znalost hlavních měst evropských zemí.</p>
            <p>Pro každou otázku vyberte správnou odpověď ze čtyř možností.</p>
            <p><strong>V každém kole se náhodně vybere 10 zemí ze všech evropských zemí.</strong></p>
            <button style={styles.button} onClick={startQuiz}>Začít kvíz</button>
        </div>
    );

    const renderQuizMode = () => (
        <div style={styles.container}>
            <h2>Vyberte typ kvízu</h2>
            <div style={{ margin: '20px 0' }}>
                <label style={styles.radioLabel}>
                    <input 
                        type="radio" 
                        name="quizType" 
                        value="countryToCapital" 
                        checked={quizType === 'countryToCapital'}
                        onChange={(e) => setQuizType(e.target.value)}
                        style={{ marginRight: '8px' }}
                    />
                    <strong>Země → Hlavní město</strong><br />
                    <small style={{ marginLeft: '24px', color: '#666' }}>Ukáže se země, vybíráte hlavní město</small>
                </label>
                <label style={styles.radioLabel}>
                    <input 
                        type="radio" 
                        name="quizType" 
                        value="capitalToCountry"
                        checked={quizType === 'capitalToCountry'}
                        onChange={(e) => setQuizType(e.target.value)}
                        style={{ marginRight: '8px' }}
                    />
                    <strong>Hlavní město → Země</strong><br />
                    <small style={{ marginLeft: '24px', color: '#666' }}>Ukáže se hlavní město, vybíráte zemi</small>
                </label>
            </div>
            <button style={styles.button} onClick={startSelectedQuiz}>Pokračovat</button>
            <button style={styles.buttonSecondary} onClick={goBackToIntro}>Zpět</button>
        </div>
    );

    const renderQuiz = () => {
        if (selectedQuestions.length === 0 || currentQuestion >= selectedQuestions.length) {
            return <div>Načítání...</div>;
        }

        const question = selectedQuestions[currentQuestion];
        const isCorrect = showFeedback && selectedAnswer === question.correct;

        return (
            <div style={styles.container}>
                <div style={styles.question}>
                    <p>Otázka {currentQuestion + 1} z {selectedQuestions.length}</p>
                    <p dangerouslySetInnerHTML={{ 
                        __html: question.text.replace(question.country || question.capital, 
                            `<span style="font-weight: bold; color: #2c5aa0;">${question.country || question.capital}</span>`) 
                    }} />
                    <div style={styles.options}>
                        {question.options.map((option, index) => (
                            <label 
                                key={index} 
                                style={{
                                    ...styles.option,
                                    backgroundColor: selectedAnswer === option ? '#f0f8ff' : 'var(--background-color-1)',
                                    borderColor: selectedAnswer === option ? '#007bff' : '#ddd'
                                }}
                                onClick={() => !showFeedback && handleAnswerSelect(option)}
                            >
                                <input 
                                    type="radio" 
                                    name="answer" 
                                    value={option}
                                    checked={selectedAnswer === option}
                                    onChange={() => handleAnswerSelect(option)}
                                    disabled={showFeedback}
                                    style={{ marginRight: '8px' }}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>
                
                {showFeedback && (
                    <div style={{
                        ...styles.feedback,
                        ...(isCorrect ? styles.feedbackCorrect : styles.feedbackIncorrect)
                    }}>
                        {isCorrect ? 'Správně!' : `Nesprávně. Správná odpověď je ${question.correct}.`}
                    </div>
                )}

                {showFeedback && (
                    <div style={styles.stats}>
                        Skóre: {correctAnswers} z {currentQuestion + 1}
                    </div>
                )}

                {!showFeedback && (
                    <button style={styles.button} onClick={checkAnswer}>Potvrdit odpověď</button>
                )}
            </div>
        );
    };

    const renderResults = () => {
        const endTime = new Date();
        const duration = startTime ? Math.round((endTime - startTime) / 1000) : 0;
        const percentage = Math.round((correctAnswers / selectedQuestions.length) * 100);
        
        let performanceMessage = '';
        if (percentage >= 90) {
            performanceMessage = 'Výborně! Jste expert na evropskou geografii! 🏆';
        } else if (percentage >= 70) {
            performanceMessage = 'Velmi dobře! Máte solidní znalosti. 👏';
        } else if (percentage >= 50) {
            performanceMessage = 'Dobře, ale je co zlepšovat. 👍';
        } else {
            performanceMessage = 'Je třeba více se učit. Zkuste to znovu! 📚';
        }
        
        const modeText = quizType === 'countryToCapital' ? 'Země → Hlavní město' : 'Hlavní město → Země';

        return (
            <div style={styles.container}>
                <h2>Výsledky kvízu</h2>
                <h3>{endTime.toLocaleString('cs-CZ')}</h3>
                <div>
                    <p><strong>{performanceMessage}</strong></p>
                    <p>Typ kvízu: <strong>{modeText}</strong></p>
                    <p>Získali jste {correctAnswers} z {selectedQuestions.length} bodů ({percentage}%).</p>
                    <p>Čas: {duration} sekund</p>
                    <p><em>Každý kvíz obsahuje 10 náhodně vybraných evropských zemí.</em></p>
                </div>
                <button style={styles.buttonSuccess} onClick={restartQuiz}>Hrát znovu</button>
            </div>
        );
    };

    // Main render
    switch (currentScreen) {
        case 'intro':
            return renderIntro();
        case 'quizMode':
            return renderQuizMode();
        case 'quiz':
            return renderQuiz();
        case 'results':
            return renderResults();
        default:
            return renderIntro();
    }
};

export default EuropeanCapitalsQuiz;
