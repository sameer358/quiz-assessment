const express = require('express');
const router = express.Router();
const { createQuiz, addQuestion, getResults } = require('../controllers/adminController');
const { auth, adminAuth } = require('../middleware/authMiddleware');

// @route   POST api/admin/quiz
// @desc    Create quiz
// @access  Private
router.post('/quiz', auth, adminAuth, createQuiz);

// @route   POST api/admin/question
// @desc    Add question to quiz
// @access  Private
router.post('/question', auth, adminAuth, addQuestion);

// @route   GET api/admin/results
// @desc    Get quiz results
// @access  Private
router.get('/results', auth, adminAuth, getResults);

module.exports = router;
