/* ------------------------
-----   CONSTANTES    -----
------------------------ */

// Udemy API
const UDEMY_CREDENTIALS = {
    client_id: 'Z7aClZSUUIaZXBbDFFuuVDVxCw1iIZuzByTBa4UG',
    client_secret: 'jT5xY0fzWFVMZr1uY5jqbVmVGVn3ROO8Vv8ykbLo0hQxFufXCPTtn3I0zzhVgJngodREwmUwC727lal05BFQIAg4bkbNrrRAVDVoYVFj1TgZg7rBXhsOOxqWjEcObZBz'
}


const UDEMY_NUM_COURSES = 5
const UDEMY_BASE_URL = 'https://www.udemy.com'
const UDEMY_BASE_API_URL = 'https://www.udemy.com/api-2.0/'

// Udemy API endpoints
const UDEMY_API = {
    courses: UDEMY_BASE_API_URL + 'courses/'
}

let AXIOS_CONFIG = {
    auth: {
        username: UDEMY_CREDENTIALS.client_id,
        password: UDEMY_CREDENTIALS.client_secret
    }
}

module.exports = { AXIOS_CONFIG, UDEMY_API, UDEMY_NUM_COURSES, UDEMY_BASE_URL }