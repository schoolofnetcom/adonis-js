'use strict'

// const Person = use('App/Model/Person')

class PersonController {

  static get inject() {
    return [
      'App/Model/Person'
    ]
  }

  constructor(Person) {
    this.Person = Person
  }

  * index(request, response) {
    const people = yield this.Person.all()

    yield response.sendView('personAll', {
      people: people.toJSON()
    })

    // yield response.sendView('people.personAll', {
    //   people
    // })


    // response.status(200).json(people)
    // response.location('/');
    // const person = {
    //   name: 'Leonan',
    //   age: 20
    // }

    // response.header('SON', 'School of net');
    // response.status(200).send('ok');
  }

  * create(request, response) {
    // yield response.sendView('people.personCreate');
    yield response.sendView('personCreate');
  }

  * store(request, response) {
    const data = request.only('name', 'lastname', 'age')

    yield this.Person.create(data)

    response.redirect('/person')
  }

  * show(request, response) {
    const id = request.param('id')
    const person = yield this.Person.find(id)

    if (person) {
      yield response.sendView('personShow', {
        person
      })

      return
    }

    response.notFound()
  }

  * edit(request, response) {
    const id = request.param('id')
    const person = yield this.Person.find(id)

    if (person) {
      yield response.sendView('personUpdate', {
        person
      })

      return
    }

    response.notFound()
  }

  * update(request, response) {
    const person = yield this.Person.findBy('id', request.param('id'))
    const data = request.only('name', 'lastname', 'age', 'id')
    person.fill(data)

    yield person.save();

    response.redirect('/person');

    // const id = request.param('id')
    // const person = yield Person.find(id)

    // if (person) {
    //   person.name = request.only('name')
    //   person.lastname = request.only('lastname')
    //   person.age = request.only('age')

    //   response.redirect('/person')

    //   return
    // }

    // response.notFound()

  }

  * destroy(request, response) {
    const person = yield this.Person.findBy('id', request.param('id'))

    yield person.delete();
  }

}

module.exports = PersonController
