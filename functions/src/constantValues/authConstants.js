const ON = 'On'
const IS = 'Is'
const VALID = 'Valid'
const EXIST = 'Exist'
const IS_VALID = IS + VALID
const SUBMITTING = 'Submitting'
const VALIDATION = 'Validation'
const EXTRA_HEIGHT = 'ExtraHeight'
const SUBMIT_ERRORS = 'SubmitErrors'

const EMAIL = 'Email'
const EMAIL_IS_VALID = EMAIL + IS_VALID
const EMAIL_VALIDATION = EMAIL + VALIDATION
const EMAIL_EXTRA_HEIGHT = EMAIL + EXTRA_HEIGHT
const EMAIL_SUBMIT_ERRORS = EMAIL + SUBMIT_ERRORS

const PASSWORD = 'Password'
const PASSWORD_IS_VALID = PASSWORD + IS_VALID
const PASSWORD_VALIDATION = PASSWORD + VALIDATION
const PASSWORD_EXTRA_HEIGHT = PASSWORD + EXTRA_HEIGHT
const PASSWORD_SUBMIT_ERRORS = PASSWORD + SUBMIT_ERRORS

const TERM = 'Term'
const TERM_IS_VALID = TERM + IS_VALID
const TERM_VALIDATION = TERM + VALIDATION
const TERM_SUBMIT_ERRORS = TERM + SUBMIT_ERRORS

const USERNAME = 'Username'
const USERNAME_IS_VALID = USERNAME + IS_VALID
const USERNAME_VALIDATION = USERNAME + VALIDATION
const USERNAME_EXTRA_HEIGHT = USERNAME + EXTRA_HEIGHT
const USERNAME_SUBMIT_ERRORS = USERNAME + SUBMIT_ERRORS

const SIGN_UP = 'SignUp'
const ON_SIGN_UP = ON + SIGN_UP
const SIGNED_IN = 'signed_in'
const IS_EMAIL_EXIST = IS + EMAIL + EXIST
const ON_IS_EMAIL_EXIST = ON + IS_EMAIL_EXIST

// TODO: gonna remove extra height feature someday

export {
	IS_VALID,
	SUBMITTING,
	SUBMIT_ERRORS,
	EXTRA_HEIGHT,
	EMAIL,
	EMAIL_IS_VALID,
	EMAIL_VALIDATION,
	EMAIL_EXTRA_HEIGHT,
	EMAIL_SUBMIT_ERRORS,
	PASSWORD,
	PASSWORD_IS_VALID,
	PASSWORD_VALIDATION,
	PASSWORD_EXTRA_HEIGHT,
	PASSWORD_SUBMIT_ERRORS,
	TERM,
	TERM_IS_VALID,
	TERM_VALIDATION,
	TERM_SUBMIT_ERRORS,
	USERNAME,
	USERNAME_IS_VALID,
	USERNAME_VALIDATION,
	USERNAME_EXTRA_HEIGHT,
	USERNAME_SUBMIT_ERRORS,
	ON_SIGN_UP,
	ON_IS_EMAIL_EXIST,
	SIGNED_IN,
}
