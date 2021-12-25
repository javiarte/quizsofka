import React, { Component } from 'react';
import Question from './question/Question';
import Answer from './answer/Answer'
import './loggedQuiz.css';

export default class LoggedQuiz extends Component {

    state = {
        questions: {     
            1: 'En música, ¿A cuántos tiempos equivale una blanca?',
            2: '¿Qué tipo de instrumento es un piano?',
            3: 'Tercer planeta del sistema solar',
            4: '¿Qué es un número primo?',
            5: '¿Quién pintó la Mona Lisa?',
            6: '¿Cómo se llama la ciencia que estudia los astros?',
            7: '¿Cuál es el río más caudaloso del mundo?',
            8: '¿Cada cuántos años tenemos un año bisiesto?',
            9: '¿Cuántos meses tienen 28 días?',
            10: '¿Quién fue Cleopatra?',
            11: '¿Qué planeta es el más cercano al Sol?',
            12: '¿Para qué sirven las arterias y las venas?',
            13: '¿Qué habla alguien de Brasil?',
            14: '¿Qué tipo de palabra es `aquí`?',
            15: '¿Cuáles son los cinco continentes?',
            16: '¿Cuáles son los planetas del sistema solar?',
            17: '¿Qué quiere decir que una palabra sea esdrújula?',
            18: '¿Cuáles son los tres modos verbales?',
            19: '¿Cuántos kilos son una tonelada?',
            20: '¿Cuál es la capital de Italia?'
        },
        answers: {
            1: {
                1: '4',
                2: '2',
                3: '8', 
                4: '15'
            },
            2: {
                1: 'De teclas que producen sonido',
                2: 'De tripas de gato',
                3: 'de cuerdas percutidas', 
                4: 'De crin de caballo'
            },
            3: {
                1: 'Venus',
                2: 'Tierra',
                3: 'Acuario', 
                4: 'Saturno'
            },
            4: {
                1: 'El número de mi tia',
                2: 'aquellos que únicamente resultan divisibles por uno o por sí mismos',
                3: 'un número gaseoso"', 
                4: 'no es un número'
            },
            5: {
                1: 'Mafalda',
                2: 'Picaso',
                3: 'Leonardo da Vinci', 
                4: 'Andrea'
            },
            6: {
                1: 'Astrología',
                2: 'Cienciología',
                3: 'Mecanografía', 
                4: 'Acnología'
            },
            7: {
                1: 'El everest',
                2: 'El nilo',
                3: 'El Amazonas', 
                4: 'El ganges'
            },
            8: {
                1: '4',
                2: '100',
                3: '50', 
                4: '2'
            },
            9: {
                1: '12',
                2: '2',
                3: '1', 
                4: '5'
            },
            10: {
                1: 'Una faraona de Egipto',
                2: 'Una niña linda',
                3: 'Una Yegua', 
                4: 'Una Madre'
            },
            11: {
                1: 'Mercurio',
                2: 'Venus',
                3: 'Tierra', 
                4: 'Marte'
            },
            12: {
                1: 'Para comer',
                2: 'Para estornudar',
                3: 'Para correr', 
                4: 'llevar la sangre oxigenada desde el corazón al resto del cuerpo'
            },
            13: {
                1: 'Español',
                2: 'Inglés',
                3: 'portugués', 
                4: 'Europeo'
            },
            14: {
                1: 'adverbio de lugar',
                2: 'adverbio de tiempo',
                3: 'Una arruga', 
                4: 'Un antónimo'
            },
            15: {
                1: 'Américo, vespusio, Asencio, Muñoz',
                2: 'Francia, Europa, Venus, Eructo',
                3: 'Europa, África, Asia, América y Oceanía', 
                4: 'Europa, Asia, Valledupar, Quidio, Chocó'
            },
            16: {
                1: 'Mercurio, Venus, la Tierra, Marte, Júpiter, Saturno, Urano y Neptuno',
                2: 'Mercurio, Oseanía, la Tierra, Marte, Júpiter, Saturno, Urano y Neptuno',
                3: 'Mercurio, Venus, la Tierra, Marte, Arcadia, Saturno, Urano y Neptuno', 
                4: 'Mercurio, Venus, la Tierra, Terrallende, Júpiter, Saturno, Urano y Neptuno'
            },
            17: {
                1: 'que fué bruja',
                2: 'que no es brújula',
                3: 'una palabra muy mala', 
                4: 'su sílaba tónica es la antepenúltima de la palabra'
            },
            18: {
                1: 'Griegos, Romanos, Judios',
                2: 'indicativo, subjuntivo, imperativo',
                3: 'Apreciativo, Monógamo, Esdrújulo', 
                4: 'Natural, Real, Disyuntivo'
            },
            19: {
                1: 'mil kilos',
                2: 'dos mil kilos',
                3: 'medio kilo', 
                4: 'un kilo'
            },
            20: {
                1: 'Venechia',
                2: 'Francia',
                3: 'Roma', 
                4: 'Europa'
            },
        }, 
        correctAnswers: {
            1: '2',
            2: '3',
            3: '2',
            4: '2',
            5: '3',
            6: '1',
            7: '1',
            8: '1',
            9: '1',
            10: '1',
            11: '1',
            12: '4',
            13: '3',
            14: '4',
            15: '3',
            16: '1',
            17: '4',
            18: '2',
            19: '1',
            20: '3', 
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
        let { questions, answers, correctAnswer, clickedAnswer, step, score, isLoggedIn, GlobalId } = this.state;
        return(
            <div className="Content">
                {step <= 20 ? 
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
                            clickedAnswer && 20 >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Siguiente</button>
                    </>) : ( <div className="finalPage">
                            <h1>Has completado el quiz!</h1>
                            <p>Tu calificación es: {score} of 20</p>
                            <p>Gracias!</p>
                        </div>
                    )
                }
            </div>
        );
    }
}