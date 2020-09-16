export const emailValidation = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
}
export const passwordValidation = password => {
    return password.length > 7
}

export const replaceSpaceWithUnderscore = name => {
    return lowerCase(name.split(' ').join('_'));
}

export const replaceUnderscoreWithSpace = name => {
    return lowerCase(name.split('_').join(' '));
}

export const confirmPassword = (confirmPass, pass) => confirmPass === pass

export const alphabeticStringValidation = val => {
    const regex = /^[A-Za-z\-_]+$/;  //substitute: /^[A-Za-z]+$/without letters
    return regex.test(val);
}

export const objectValues = object => object ? Object.values(object) : []

export const objectKeys = object => object ? Object.keys(object) : []

export const isEmpty = value => value !== undefined ? value : ''

export const isEmptyString = value => value === ""

export const lowerCase = values => values.toLowerCase()


export const fullNameString = val => {
    const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    return regex.test(val);
}

export const capitalize = string => string[0].toUpperCase() + string.slice(1)

export const camelCaseSpace = string => string.replace(/([a-z])([A-Z])/g, '$1 $2')