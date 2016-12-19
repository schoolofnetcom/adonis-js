'use strict'

const Lucid = use('Lucid')

class Person extends Lucid {

    // address() {
    //     return this.hasOne('App/Model/Address')
    // }

    // addresses() {
    //     return this.hasMany('App/Model/Address')
    // }

    // static get createTimeStamp() {
    //     return 'created_at'
    // }

    // static scopeLastname(builder) {
    //     builder.where('lastname', 'Luppi');
    // }
}

module.exports = Person
