'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  store.user = response.user
  $('#msg').text('Sign Up successful! Welcome ' + store.user.email + '. Please Sign In.')
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
}
const onSignUpFailure = function (error) {
  $('msg').text('Sign Up failed, please try again.')
  $('#sign-up').trigger('reset')
  console.log(error)
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#msg').text('Sign in successful! Welcome ' + store.user.email)
  console.log(response)
  $('#sign-in').trigger('reset')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#new-game').show()
  $('#get-all-games').show()
  // $('#show-game').show()
}
const onSignInFailure = function (error) {
  $('#msg').text('Sign in failed, please try again.')
  console.log(error)
  $('#sign-in').trigger('reset')
}

const onSignOutSuccess = function (response) {
  $('#msg').text('Sign out successful.')
  $('#sign-out').hide()
  $('#change-password').hide()
  $('.container').hide()
  $('#get-all-games').hide()
  $('#new-game').hide()
  $('#all-games').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}
const onSignOutFailure = function (error) {
  $('#msg').text('Sign out failed.')
  $('#get-all-games').hide()
  console.log('Sign out failure, error is', error)
}

const onChangePasswordSuccess = function (response) {
  $('#msg').text('Password changed successfully.')
  $('#change-password').trigger('reset')
  $('#get-all-games').hide()
  console.log('Change Pass success, response is ', response)
}
const onChangePasswordFailure = function (error) {
  $('#msg').text('Password not changed, try again.')
  $('#change-password').trigger('reset')
  $('#get-all-games').hide()
  console.log('Change password failed, error is', error)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
