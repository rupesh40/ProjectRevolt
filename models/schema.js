/**
 * Schema of models stays here.
 * schema is required to avoid confusions and to make objects uniform
 */

 // NOTE: we are not gonna export it or use it anywhere,
 //       think of it as an index or lookup to see how our models are related.
schemas = {
    // User schema
    user: {
        firstName: requiredString,
        lastName: requiredString,
        userName: requiredString,
        email: {
            type: String,
            required: [true, "can't be blank"],
            match: [/\S+@\S+\.\S+/, 'is invalid'],
            index: true
        },
        phoneNumber: Number,
        Address: {
            latitude: {
                ...requiredNumber,
                min: -90,
                max: 90,
            },
            longitude: {
                ...requiredNumber,
                min: -180,
                max: 180
            }
        },
        ownedVehicals: [Number] // TODO: after creating vehical schema we'll change it to [vehicalSchema]
    }
    
}
