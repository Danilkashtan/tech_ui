const validation = (values) => {
    const errors = {};
    if (values.age > 150) {
      errors.age = 'Age must be less then 150!'
    } else if (values.age <= 0) {
        errors.age = 'Age must be greater 0!'
    }
    if (values.firstName.length < 3) {
      errors.firstName = 'length of firstName must be at least 3 symbols'
    }
    if (values.secondName.length < 5) {
      errors.secondName = 'length of secondName must be at least 5 symbols'
    }
    if (values.city.length < 3) {
      errors.city = 'length of city must be at least 3 symbols'
    }
    if (values.select === "I") {
      errors.select = 'Test validation'
    }
    if (values.radio === "myRadio2") {
      errors.radio = 'Test validation'
    }
    if (values.textArea === "invalid") {
      errors.textArea = 'Test validation'
    }
    if (values.check == false) {
      errors.check = 'Test validation'
    }
    if (values.range < 50) {
      errors.range = 'must be > 50'
    }
    return errors
}

export default validation;