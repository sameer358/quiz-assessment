const express = require('express');
const router = express.Router();
const { startQuiz, submitQuiz } = require('../controllers/quizController');
const { auth } = require('../middleware/authMiddleware');

// @route   POST api/quiz/start
// @desc    Start quiz
// @access  Private
router.post('/start', auth, startQuiz);

// @route   POST api/quiz/submit
// @desc    Submit quiz
// @access  Private
router.post('/submit', auth, submitQuiz);

module.exports = router;
