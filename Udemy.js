const axios = require('axios')
const { UDEMY_API, AXIOS_CONFIG, UDEMY_NUM_COURSES } = require('./config')

/* ------------------------
-- RECUPERER LES REVIEWS --
------------------------ */
function getReviews(course_id) {
    return new Promise((resolve, reject) => {
        // URL pour récupérer les cours
        let url = UDEMY_API.courses + course_id + '/reviews/?page=1&page_size=5&is_text_review=1'

        axios.get(url, AXIOS_CONFIG)
            .then((result) => {
                reviews = result.data.results
                resolve(reviews)
            })
            .catch((err) => reject('Erreur : impossible de charger les informations du cours'))
    })
}

/* ------------------------
--  RECUPERER UN COURS  --
------------------------ */
function getCourse(course_id) {
    return new Promise((resolve, reject) => {
        // URL pour récupérer les cours
        let url = UDEMY_API.courses + course_id

        axios.get(url, AXIOS_CONFIG)
            .then((result) => {
                course = result.data
                resolve(course)
            })
            .catch((err) => reject('Erreur : impossible de charger les informations du cours'))
    })
}


/* ------------------------
--  RECUPERER LES COURS  --
------------------------ */
function getCourses(search) {
    return new Promise((resolve, reject) => {
        // URL pour récupérer les cours
        let url = UDEMY_API.courses + '?search=' + search + '&page_size=' + UDEMY_NUM_COURSES
        axios.get(url, AXIOS_CONFIG)
            .then((result) => {
                result = result.data.results
                let courses = result.map((course) => {
                    return {
                        id: course.id,
                        title: course.title,
                        url: course.url,
                        price: course.price
                    }
                })
                resolve(courses)
            })
            .catch((err) => reject('Erreur : impossible de charger les resultats de la recherche'))
    })
}

module.exports = {getCourse, getCourses, getReviews}