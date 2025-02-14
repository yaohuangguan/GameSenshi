import React from 'react'
// states
import {
	storeAlertShow,
	storeAuthModalRemoveItem,
	storeAuthModalProcessRedirectResult,
	storeAuthModalShow,
} from 'state'

import { handleDifferentCredential } from 'firebaseInit/handleDifferentCredential'
import { simplerErrorMessage } from 'utils'
import { UNEXPECTED_ERROR_CODE_6 } from 'constantValues'

const getRedirectResult = (promise, auth) =>
	promise
		.then(result => {
			const { user } = result
			if (user) {
				// need this condition because this part run when webpage start
				// ! google unlink facebook: https://github.com/firebase/firebase-js-sdk/issues/569
				const showAlert = name2 => {
					storeAlertShow(
						<span>
							Successfully linked your <strong>{name2}</strong> account!
						</span>,
						'success',
						'tim-icons icon-bell-55'
					)
				}
				const linkWithRedirect = provider2 => {
					user.linkWithRedirect(new auth[provider2]())
				}
				storeAuthModalProcessRedirectResult(showAlert, linkWithRedirect)
			}
		})
		.catch(err => {
			// remove this item whether it is success or not
			storeAuthModalRemoveItem()
			const { code, credential, email } = err
			if (code === 'auth/account-exists-with-different-credential') {
				handleDifferentCredential(auth, email, credential)
			} else {
				const body = simplerErrorMessage(false, UNEXPECTED_ERROR_CODE_6, err)
				storeAuthModalShow('Error', body, false)
			}
		})

export { getRedirectResult }
