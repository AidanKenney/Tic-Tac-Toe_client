#!/bin/bash

curl 'https://tic-tac-toe-api-development.herokuapp.com/sign-out' \
--include \
--request DELETE \
--header "Authorization: Token token="${TOKEN}"" \
--header "Content-Type: application/json" \
--data '{}'
