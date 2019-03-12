# freefood v0.0.0



- [Auth](#auth)
	- [Authenticate](#authenticate)
	- [Authenticate with Facebook](#authenticate-with-facebook)
	- [Authenticate with Google](#authenticate-with-google)
	
- [Intolerance](#intolerance)
	- [Create intolerance](#create-intolerance)
	- [Delete intolerance](#delete-intolerance)
	- [Retrieve intolerance](#retrieve-intolerance)
	- [Retrieve intolerances](#retrieve-intolerances)
	- [Update intolerance](#update-intolerance)
	
- [Photorecipe](#photorecipe)
	- [Create photorecipe](#create-photorecipe)
	- [Delete photorecipe](#delete-photorecipe)
	- [Retrieve photorecipe](#retrieve-photorecipe)
	- [Retrieve photorecipes](#retrieve-photorecipes)
	- [Update photorecipe](#update-photorecipe)
	
- [Photorestaurant](#photorestaurant)
	- [Create photorestaurant](#create-photorestaurant)
	- [Delete photorestaurant](#delete-photorestaurant)
	- [Retrieve photorestaurant](#retrieve-photorestaurant)
	- [Retrieve photorestaurants](#retrieve-photorestaurants)
	- [Update photorestaurant](#update-photorestaurant)
	
- [Photouser](#photouser)
	- [Create photouser](#create-photouser)
	- [Delete photouser](#delete-photouser)
	- [Retrieve photouser](#retrieve-photouser)
	- [Retrieve photousers](#retrieve-photousers)
	- [Update photouser](#update-photouser)
	
- [Recipe](#recipe)
	- [Create recipe](#create-recipe)
	- [Delete recipe](#delete-recipe)
	- [Retrieve recipe](#retrieve-recipe)
	- [Retrieve recipes](#retrieve-recipes)
	- [Update recipe](#update-recipe)
	
- [Restaurant](#restaurant)
	- [Create restaurant](#create-restaurant)
	- [Delete restaurant](#delete-restaurant)
	- [Retrieve restaurant](#retrieve-restaurant)
	- [Retrieve restaurants](#retrieve-restaurants)
	- [Update restaurant](#update-restaurant)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Update password](#update-password)
	- [Update user](#update-user)
	


# Auth

## Authenticate



	POST /auth

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|

## Authenticate with Facebook



	POST /auth/facebook


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Facebook user accessToken.</p>							|

## Authenticate with Google



	POST /auth/google


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Google user accessToken.</p>							|

# Intolerance

## Create intolerance



	POST /intolerances


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Intolerance's name.</p>							|

## Delete intolerance



	DELETE /intolerances/:id


## Retrieve intolerance



	GET /intolerances/:id


## Retrieve intolerances



	GET /intolerances


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update intolerance



	PUT /intolerances/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Intolerance's name.</p>							|

# Photorecipe

## Create photorecipe



	POST /photorecipes


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| deleteHash			| 			|  <p>Photorecipe's deleteHash.</p>							|
| imgurLink			| 			|  <p>Photorecipe's imgurLink.</p>							|
| recipeId			| 			|  <p>Photorecipe's recipeId.</p>							|

## Delete photorecipe



	DELETE /photorecipes/:id


## Retrieve photorecipe



	GET /photorecipes/:id


## Retrieve photorecipes



	GET /photorecipes


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update photorecipe



	PUT /photorecipes/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| deleteHash			| 			|  <p>Photorecipe's deleteHash.</p>							|
| imgurLink			| 			|  <p>Photorecipe's imgurLink.</p>							|
| recipeId			| 			|  <p>Photorecipe's recipeId.</p>							|

# Photorestaurant

## Create photorestaurant



	POST /photorestaurants


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| deleteHash			| 			|  <p>Photorestaurant's deleteHash.</p>							|
| imgurLink			| 			|  <p>Photorestaurant's imgurLink.</p>							|
| restaurantId			| 			|  <p>Photorestaurant's restaurantId.</p>							|

## Delete photorestaurant



	DELETE /photorestaurants/:id


## Retrieve photorestaurant



	GET /photorestaurants/:id


## Retrieve photorestaurants



	GET /photorestaurants


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update photorestaurant



	PUT /photorestaurants/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| deleteHash			| 			|  <p>Photorestaurant's deleteHash.</p>							|
| imgurLink			| 			|  <p>Photorestaurant's imgurLink.</p>							|
| restaurantId			| 			|  <p>Photorestaurant's restaurantId.</p>							|

# Photouser

## Create photouser



	POST /photousers


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| deleteHash			| 			|  <p>Photouser's deleteHash.</p>							|
| imgurLink			| 			|  <p>Photouser's imgurLink.</p>							|
| userId			| 			|  <p>Photouser's userId.</p>							|

## Delete photouser



	DELETE /photousers/:id


## Retrieve photouser



	GET /photousers/:id


## Retrieve photousers



	GET /photousers


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update photouser



	PUT /photousers/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| deleteHash			| 			|  <p>Photouser's deleteHash.</p>							|
| imgurLink			| 			|  <p>Photouser's imgurLink.</p>							|
| userId			| 			|  <p>Photouser's userId.</p>							|

# Recipe

## Create recipe



	POST /recipes


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Recipe's name.</p>							|
| description			| 			|  <p>Recipe's description.</p>							|
| ingredients			| 			|  <p>Recipe's ingredients.</p>							|
| dinnerGuest			| 			|  <p>Recipe's dinnerGuest.</p>							|

## Delete recipe



	DELETE /recipes/:id


## Retrieve recipe



	GET /recipes/:id


## Retrieve recipes



	GET /recipes


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update recipe



	PUT /recipes/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Recipe's name.</p>							|
| description			| 			|  <p>Recipe's description.</p>							|
| ingredients			| 			|  <p>Recipe's ingredients.</p>							|
| dinnerGuest			| 			|  <p>Recipe's dinnerGuest.</p>							|

# Restaurant

## Create restaurant



	POST /restaurants


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Restaurant's name.</p>							|
| address			| 			|  <p>Restaurant's address.</p>							|
| intolerance			| 			|  <p>Restaurant's intolerance.</p>							|
| timetable			| 			|  <p>Restaurant's timetable.</p>							|
| loc			| 			|  <p>Restaurant's loc.</p>							|

## Delete restaurant



	DELETE /restaurants/:id


## Retrieve restaurant



	GET /restaurants/:id


## Retrieve restaurants



	GET /restaurants


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update restaurant



	PUT /restaurants/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Restaurant's name.</p>							|
| address			| 			|  <p>Restaurant's address.</p>							|
| intolerance			| 			|  <p>Restaurant's intolerance.</p>							|
| timetable			| 			|  <p>Restaurant's timetable.</p>							|
| loc			| 			|  <p>Restaurant's loc.</p>							|

# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|
| role			| String			| **optional** <p>User's role.</p>							|

## Delete user



	DELETE /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve current user



	GET /users/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve user



	GET /users/:id


## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update password



	PUT /users/:id/password

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Update user



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|


