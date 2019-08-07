import React from 'react'
import { stopUndefined } from 'utils'
import Select from 'react-select'
import ReactDatetime from 'react-datetime'
import { Subscribe, userStore } from 'state'
// reactstrap components
import { FormGroup, Row, Col, Form } from 'reactstrap'
//constants
import {
	USER_UID,
	USER_GENDER,
	USER_COUNTRY,
	USER_LANGUAGES,
	USER_BIRTH_DATE,
	USER_DISPLAY_NAME,
} from 'constantValues'
// validation
import { signUpUsernameValidation } from 'utils'

import { getCodes, getNames } from 'country-list'
import chroma from 'chroma-js'
import { ExportCompounds } from 'componentnCompounds'
const { FinalInputText, FinalForm, ButtonSubmit } = stopUndefined(
	ExportCompounds
)

const countries = getNames()
const countryCodes = getCodes()

const countriesAndCodes = countries.reduce((acc, country, i) => {
	acc.push({ value: countryCodes[i], label: country })
	return acc
}, [])

// this currently is not working, deal with this later
const colourStyles = {
	control: styles => ({
		...styles,
	}),
	option: (styles, { data, isDisabled, isFocused, isSelected }) => {
		const color = chroma(data.color)
		return {
			...styles,
			backgroundColor: isDisabled
				? null
				: isSelected
				? data.color
				: isFocused
				? color.alpha(0.1).css()
				: null,
			color: isDisabled
				? '#ccc'
				: isSelected
				? chroma.contrast(color, 'white') > 2
					? 'white'
					: 'black'
				: data.color,
			cursor: isDisabled ? 'not-allowed' : 'default',

			':active': {
				...styles[':active'],
				backgroundColor:
					!isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
			},
		}
	},
	multiValue: (styles, { data }) => {
		const color = chroma(data.color)
		return {
			...styles,
			backgroundColor: color.alpha(0.1).css(),
		}
	},
	multiValueLabel: (styles, { data }) => ({
		...styles,
		color: data.color,
	}),
	multiValueRemove: (styles, { data }) => ({
		...styles,
		color: data.color,
		':hover': {
			backgroundColor: data.color,
			color: 'white',
		},
	}),
}

const genderOptions = [
	{
		value: '',
		label: 'Gender',
		isDisabled: true,
	},
	{ value: '0', label: 'Male' },
	{ value: '1', label: 'Female' },
	{
		value: '2',
		label: 'Feeling Lucky',
	},
]

const countryOptions = [
	{
		value: '',
		label: 'Country',
		isDisabled: true,
	},
	...countriesAndCodes,
]

const languageOptions = [
	{ value: '1', label: 'English', color: '#00B8D9' },
	{ value: '2', label: 'French', color: '#0052CC' },
	{ value: '3', label: 'Spanish', color: '#5243AA' },
	{ value: '4', label: 'Deutsche', color: '#FF5630' },
	{ value: '5', label: 'Russian', color: '#FF8B00' },
]

const TabPaneGeneralSettings = props => {
	return (
		<Subscribe to={[userStore]}>
			{userStore => {
				const {
					state: {
						[USER_UID]: uid,
						[USER_GENDER]: gender,
						[USER_BIRTH_DATE]: birthDate,
						[USER_COUNTRY]: country,
						[USER_LANGUAGES]: languages,
						[USER_DISPLAY_NAME]: name,
					},
				} = userStore
				return (
					<FinalForm
						initialValues={{
							[USER_DISPLAY_NAME]: '',
						}}
						onSubmit={values => {
							//
						}}>
						{({ handleSubmit, submitting, submitError, form }) => (
							<Form className='form'>
								<div>
									<header>
										<h2 className='text-uppercase'>General information</h2>
									</header>
									<hr className='line-info' />
									<br />
									<Row>
										<Col className='align-self-center' md='3'>
											<label className='labels' for='uid'>
												UID
											</label>
										</Col>
										<Col className='align-self-center' md='9'>
											<FormGroup>
												<label className='labels' id='uid' name='uid'>
													{uid}
												</label>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col className='align-self-center' md='3'>
											<label className='labels'>Name</label>
										</Col>
										<Col
											className='align-self-center'
											md='9'
											style={{ marginBottom: 10 }}>
											<FinalInputText
												type='username'
												name={USER_DISPLAY_NAME}
												hideSuccess
												onlyShowErrorOnSubmit
												placeholder={name}
												validation={value => signUpUsernameValidation(value)}
												onBlur={() => {
													form.reset()
												}}
											/>
										</Col>
									</Row>
									<Row>
										<Col className='align-self-center' md='3'>
											<label className='labels'>I’m</label>
										</Col>
										<Col className='align-self-center' md='4'>
											<FormGroup>
												<Select
													className='react-select react-select-info'
													classNamePrefix='react-select'
													placeholder='Gender'
													value={genderOptions.find(
														genderObj => genderObj.label === gender
													)}
													onChange={gender =>
														userStore.setState({
															[USER_GENDER]: gender.label,
														})
													}
													options={genderOptions}
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col className='align-self-center' md='3'>
											<label className='labels' htmlFor='#birthDate'>
												Birth Date
											</label>
										</Col>
										<Col className='align-self-center' md='4'>
											<FormGroup>
												<ReactDatetime
													id='birthDate'
													name='birthDate'
													inputProps={{
														className: 'form-control',
														placeholder: 'BirthDate',
													}}
													timeFormat={false}
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col className='align-self-center' md='3'>
											<label className='labels' htmlFor='#location'>
												Country
											</label>
										</Col>
										<Col className='align-self-center' md='4'>
											<FormGroup>
												<Select
													//styles={customStyles}
													className='react-select react-select-info'
													classNamePrefix='react-select'
													placeholder='Country'
													value={countryOptions.find(
														countryObj => countryObj.label === country
													)}
													onChange={country =>
														userStore.setState({
															[USER_COUNTRY]: country.label,
														})
													}
													options={countryOptions}
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row>
										<Col className='align-self-center' md='3'>
											<label className='labels'>Language</label>
										</Col>
										<Col className='align-self-center' md='9'>
											<FormGroup>
												<Select
													isMulti
													className='react-select react-select-info'
													classNamePrefix='react-select'
													placeholder='Languages'
													styles={colourStyles}
													value={languages.reduce((acc, language) => {
														const found = languageOptions.find(
															languageObj => languageObj.label === language
														)
														acc.push(found)
														return acc
													}, [])}
													onChange={languages =>
														userStore.setState(state => {
															state[USER_LANGUAGES] = languages.map(
																language => language.label
															)
															return state
														})
													}
													options={languageOptions}
												/>
											</FormGroup>
										</Col>
									</Row>
									<Row className='mt-4'>
										<Col md='6'>
											<ButtonSubmit color='info' type='button'>
												Save Changes
											</ButtonSubmit>
										</Col>
									</Row>
								</div>
							</Form>
						)}
					</FinalForm>
				)
			}}
		</Subscribe>
	)
}

export { TabPaneGeneralSettings }
