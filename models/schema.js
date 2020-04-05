/**
 * Schema of models stays here.
 * schema is required to avoid confusions and to make objects uniform
 * eventually we'll be using these schemas to create our objects.
 */

schemas = {
    user: {
        id: null,
        firstName: null,
        lastName: null,
        userName: null,
        email: null,
        phoneNumber: null,
        Address: null, // for now let it be as it is; later we'll change it to suit map needs.
        ownedVehicals: null
    }
}

module.exports = schemas;