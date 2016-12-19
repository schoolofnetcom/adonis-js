'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.resource('person', 'PersonController')

// Route.gr1oup('v1', function () {
//     Route.get('/test', function * (request, response) {
//         response.send('Hello from my test view')
//     }).as('test')

//     Route.get('/test_get', 'PersonController.index')
    // Route.get('/test/:name?', function * (request, response) {
    //     response.send('Hello from my test view')
    // })
// }).prefix('/v1')
