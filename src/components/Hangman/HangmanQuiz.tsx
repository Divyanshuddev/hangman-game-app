import { Input, Stack, Typography, Alert, Snackbar, Modal, Box, Button } from "@mui/material";
import categoryData from '../formatted_category_words.json';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
    letterBox: {
        color: "white",
        fontSize: {
            lg:70,
            md:70,
            sm:20,
            xs:20
        },
        fontFamily: "Berlin Sans FB",
    },
    root: {
        width: "100%"
    },
    letterStack: {
        backgroundColor: "#2463FF",
        width: {
            lg:150,
            md:150,
            sm:50,
            xs:50
        },
        height: {
            lg:150,
            md:150,
            sm:50,
            xs:50
        },
        boxShadow: "1px 1px 10px black",
        borderRadius: 6,
        boxSizing: "border-box"
    },
    input: {
        color: "white",
        width: "50%",
        fontSize: {
            lg:70,
            md:70,
            sm:20,
            xs:20
        },
        backgroundColor: "#2463FF",
        borderBottom: "6px solid white",
        "&:focus": {
            outline: "none !important"
        }
    },
    correctInput: {
        backgroundColor: "#4CAF50",
    },
    incorrectInput: {
        backgroundColor: "#F44336",
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        textAlign: 'center',
        width: '400px',
    },
    modalTitle: {
        fontSize: '2rem',
        marginBottom: '1rem',
        color: '#2463FF',
    },
    modalButton: {
        marginTop: '1rem',
        backgroundColor: '#2463FF',
        color: 'white',
        '&:hover': {
            backgroundColor: '#1a4cb8',
        },
    },
};

type HangmanQuizProps = {
    categoryName: string;
    progress: () => void;
};

type WordItem = {
    word: string;
    fill_in_blank: string;
};

const HangmanQuiz: React.FC<HangmanQuizProps> = ({ categoryName, progress }) => {
    const [words, setWords] = useState<WordItem[]>([]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [userGuesses, setUserGuesses] = useState<{ [key: number]: string }>({});
    const [feedback, setFeedback] = useState<{ open: boolean, message: string, isSuccess: boolean }>({
        open: false,
        message: '',
        isSuccess: false
    });
    const navigate = useNavigate();
    const [showCompletionModal, setShowCompletionModal] = useState(false);

    const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        if (value.match(/^[a-z]?$/)) {
            const newGuesses = {
                ...userGuesses,
                [index]: value
            };
            setUserGuesses(newGuesses);

            if (value && words[currentWordIndex]?.word[index]?.toLowerCase() === value) {
                setFeedback({
                    open: true,
                    message: 'Correct guess!',
                    isSuccess: true
                });
            } else if (value) {
                setFeedback({
                    open: true,
                    message: 'Incorrect guess!',
                    isSuccess: false
                });
            }

            const allCorrect = words[currentWordIndex]?.fill_in_blank.split('').every((char, i) => {
                return char !== '_' || newGuesses[i]?.toLowerCase() === words[currentWordIndex]?.word[i]?.toLowerCase();
            });

            if (allCorrect) {
                setFeedback({
                    open: true,
                    message: 'Congratulations! You completed the word!',
                    isSuccess: true
                });
                progress()
                if (currentWordIndex === words.length - 1) {
                    setTimeout(() => {
                        setShowCompletionModal(true);
                        progress()
                    }, 1500);
                } else {
                    setTimeout(() => {
                        setCurrentWordIndex(prev => prev + 1);
                        setUserGuesses({});
                    }, 1500);
                }
            }
        }
    };

    const handleCloseFeedback = () => {
        setFeedback(prev => ({ ...prev, open: false }));
    };

    const handleCloseModal = () => {
        setShowCompletionModal(false);
        setCurrentWordIndex(0);
        setUserGuesses({});
        navigate('/category')
    };

    useEffect(() => {
        const category = categoryData.find(item => item.category === categoryName);
        if (category) {
            setWords(category.words);
            setCurrentWordIndex(0);
            setUserGuesses({});
            setShowCompletionModal(false);
        }
    }, [categoryName]);

    if (words.length === 0) return null;

    const currentWord = words[currentWordIndex];
    const blankLetters = currentWord.fill_in_blank.split('');

    return (
        <Stack sx={styles.root} alignItems={'center'} my={12}>
            <Stack>
                <Stack direction={'row'} spacing={2} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}>
                    {blankLetters.map((letter, index) => {
                        const userGuess = userGuesses[index] || '';
                        const isCorrect = letter === '_' &&
                            userGuess &&
                            userGuess.toLowerCase() === currentWord.word[index]?.toLowerCase();
                        const isIncorrect = letter === '_' &&
                            userGuess &&
                            userGuess.toLowerCase() !== currentWord.word[index]?.toLowerCase();

                        return (
                            <Stack key={index} sx={styles.letterStack} justifyContent={'center'} alignItems={'center'}>
                                {letter !== "_" ? (
                                    <Typography sx={styles.letterBox}>{letter}</Typography>
                                ) : (
                                    <Input
                                        inputProps={{ maxLength: 1 }}
                                        value={userGuess}
                                        onChange={handleChange(index)}
                                        sx={{
                                            ...styles.input,
                                            ...(isCorrect && styles.correctInput),
                                            ...(isIncorrect && styles.incorrectInput)
                                        }}
                                    />
                                )}
                            </Stack>
                        );
                    })}
                </Stack>
            </Stack>

            <Snackbar
                open={feedback.open}
                autoHideDuration={1500}
                onClose={handleCloseFeedback}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseFeedback}
                    severity={feedback.isSuccess ? 'success' : 'error'}
                    sx={{ width: '100%' }}
                >
                    {feedback.message}
                </Alert>
            </Snackbar>

            <Modal
                open={showCompletionModal}
                onClose={handleCloseModal}
                sx={styles.modal}
            >
                <Box sx={styles.modalContent}>
                    <Typography sx={styles.modalTitle}>
                        🎉 Congratulations! 🎉
                    </Typography>
                    <Typography variant="h6">
                        You've completed all words in the "{categoryName}" category!
                    </Typography>
                    <Button
                        variant="contained"
                        sx={styles.modalButton}
                        onClick={handleCloseModal}
                    >
                        Play Again
                    </Button>
                </Box>
            </Modal>
        </Stack>
    );
};

export default HangmanQuiz;