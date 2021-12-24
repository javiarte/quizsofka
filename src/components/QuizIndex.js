import React, { Component } from 'react';
import Question from './question/Question';
import Answer from './answer/Answer'
import './QuizIndex.css';
import { GlobalId } from '../Global';

export default class Quiz extends Component {

    state = {
        questions: {     
            1: '¿Cuántos minutos tiene una hora?',
            2: '¿Cuántas patas tiene una araña?',
            3: '¿Qué es un siglo?',
            4: '¿En que ciudad está la torre Eifel?',
            5: '¿Quién es tu primo?',
            6: 'En música, ¿A cuántos tiempos equivale una blanca?',
            7: '¿Qué tipo de instrumento es un piano?',
            8: 'Tercer planeta del sistema solar',
            9: '¿Qué es un número primo?',
            10: '¿Quién pintó la Mona Lisa?',
            11: '¿Cómo se llama la ciencia que estudia los astros?',
            12: '¿Cuál es el río más caudaloso del mundo?',
            13: '¿Cada cuántos años tenemos un año bisiesto?',
            14: '¿Cuántos meses tienen 28 días?',
            15: '¿Quién fue Cleopatra?',
            16: '¿Qué planeta es el más cercano al Sol?',
            17: '¿Para qué sirven las arterias y las venas?',
            18: '¿Qué habla alguien de Brasil?',
            19: '¿Qué tipo de palabra es `aquí`?',
            20: '¿Cuáles son los cinco continentes?',
            21: '¿Cuáles son los planetas del sistema solar?',
            22: '¿Qué quiere decir que una palabra sea esdrújula?',
            23: '¿Cuáles son los tres modos verbales?',
            24: '¿Cuántos kilos son una tonelada?',
            25: '¿Cuál es la capital de Italia?'
        },
        answers: {
            1: {
                1: '120',
                2: '200',
                3: '60',
                4: '30'
            }, 
            2: {
                1: '8',
                2: '6',
                3: '12', 
                4: '4'
            },
            3: {
                1: 'Un día sin ti',
                2: 'Un solo momento',
                3: 'una unidad o periodo de tiempo', 
                4: '10 años'
            },
            4: {
                1: 'Francia',
                2: 'París',
                3: 'Marcia', 
                4: 'San Juan'
            },
            5: {
                1: 'Mi medio hermano',
                2: 'el hijo/a del hermano/a de uno de nuestros padres',
                3: 'Mi mejor amigo', 
                4: 'El sobrino de mi hermana'
            },
            6: {
                1: '4',
                2: '2',
                3: '8', 
                4: '15'
            },
            7: {
                1: 'De teclas que producen sonido',
                2: 'De tripas de gato',
                3: 'de cuerdas percutidas', 
                4: 'De crin de caballo'
            },
            8: {
                1: 'Venus',
                2: 'Tierra',
                3: 'Acuario', 
                4: 'Saturno'
            },
            9: {
                1: 'El número de mi tia',
                2: 'aquellos que únicamente resultan divisibles por uno o por sí mismos',
                3: 'un número gaseoso"', 
                4: 'no es un número'
            },
            10: {
                1: 'Mafalda',
                2: 'Picaso',
                3: 'Leonardo da Vinci', 
                4: 'Andrea'
            },
            11: {
                1: 'Astrología',
                2: 'Cienciología',
                3: 'Mecanografía', 
                4: 'Acnología'
            },
            12: {
                1: 'El everest',
                2: 'El nilo',
                3: 'El Amazonas', 
                4: 'El ganges'
            },
            13: {
                1: '4',
                2: '100',
                3: '50', 
                4: '2'
            },
            14: {
                1: '12',
                2: '2',
                3: '1', 
                4: '5'
            },
            15: {
                1: 'Una faraona de Egipto',
                2: 'Una niña linda',
                3: 'Una Yegua', 
                4: 'Una Madre'
            },
            16: {
                1: 'Mercurio',
                2: 'Venus',
                3: 'Tierra', 
                4: 'Marte'
            },
            17: {
                1: 'Para comer',
                2: 'Para estornudar',
                3: 'Para correr', 
                4: 'llevar la sangre oxigenada desde el corazón al resto del cuerpo'
            },
            18: {
                1: 'Español',
                2: 'Inglés',
                3: 'portugués', 
                4: 'Europeo'
            },
            19: {
                1: 'adverbio de lugar',
                2: 'adverbio de tiempo',
                3: 'Una arruga', 
                4: 'Un antónimo'
            },
            20: {
                1: 'Américo, vespusio, Asencio, Muñoz',
                2: 'Francia, Europa, Venus, Eructo',
                3: 'Europa, África, Asia, América y Oceanía', 
                4: 'Europa, Asia, Valledupar, Quidio, Chocó'
            },
            21: {
                1: 'Mercurio, Venus, la Tierra, Marte, Júpiter, Saturno, Urano y Neptuno',
                2: 'Mercurio, Oseanía, la Tierra, Marte, Júpiter, Saturno, Urano y Neptuno',
                3: 'Mercurio, Venus, la Tierra, Marte, Arcadia, Saturno, Urano y Neptuno', 
                4: 'Mercurio, Venus, la Tierra, Terrallende, Júpiter, Saturno, Urano y Neptuno'
            },
            22: {
                1: 'que fué bruja',
                2: 'que no es brújula',
                3: 'una palabra muy mala', 
                4: 'su sílaba tónica es la antepenúltima de la palabra'
            },
            23: {
                1: 'Griegos, Romanos, Judios',
                2: 'indicativo, subjuntivo, imperativo',
                3: 'Apreciativo, Monógamo, Esdrújulo', 
                4: 'Natural, Real, Disyuntivo'
            },
            24: {
                1: 'mil kilos',
                2: 'dos mil kilos',
                3: 'medio kilo', 
                4: 'un kilo'
            },
            25: {
                1: 'Venechia',
                2: 'Francia',
                3: 'Roma', 
                4: 'Europa'
            },
        }, 
        correctAnswers: {
            1: '3',
            2: '1',
            3: '3',
            4: '2',
            5: '2',
            6: '2',
            7: '3',
            8: '2',
            9: '2',
            10: '3',
            11: '1',
            12: '1',
            13: '1',
            14: '1',
            15: '1',
            16: '1',
            17: '4',
            18: '3',
            19: '4',
            20: '3',
            21: '1',
            22: '4',
            23: '2',
            24: '1',
            25: '3', 
        },
        category: {
            0: 'Fácil',
            1: 'Básica',
            2: 'Normal',
            3: 'Dificil',
            4: 'Experto'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0,
    }

    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]) {
            this.setState({ 
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        } else { 
            this.setState({ 
                correctAnswer: 0,
                clickedAnswer: answer,
            })
        }
    }

    nextStep = step => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0,
        })
    }

    render(){
        let { questions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="Content">
                {step <= 5 ? 
                    (<>
                        <Question
                            question={questions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && 5 >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                    </>) : ( <div className="newChallenger">
                                <h1>Has completado el nivel Básico!</h1>
                                <h1>Para continuar el segundo nivel debes registrarte o loguearte</h1>
                                <p>Tu calificación es: {score} de 5</p>
                                <button onClick={event =>  window.location.href='login/'} className="login" >Entrar</button>
                    </div>
                        /* <div className="finalPage">
                            <h1>Has completado el quiz!</h1>
                            <p>Tu calificación es: {score} of 5</p>
                            <p>Gracias!</p>
                        </div>*/
                    )
                }
            </div>
        );
    }
}