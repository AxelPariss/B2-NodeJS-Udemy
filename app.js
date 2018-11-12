#!/usr/bin/env node

/* ------------------------
-------   REQUIRES    -----
------------------------ */
const program = require('commander')
const inquirer = require('inquirer')
const { getCourse, getCourses, getReviews } = require('./Udemy')

// Constantes
const { UDEMY_BASE_URL } = require('./config')

/* ------------------------
-----   ARGUMENTS    ------
------------------------ */
program
    .version('0.1.0')
    .option('-s, --search [search]', 'Rechercher des cours sur Udemy (ex: python, developpement, ...)')
    .option('-c, --courses', 'Liste les cours créés par Axel')
    .parse(process.argv)


/* ------------------------
-----   RECHERCHE    ------
------------------------ */
if (program.search){
    let search = program.search
    if (typeof search != 'string') {
        console.log('Vous devez renseigner une recherche ou un mot clé')
        return
    }
    console.log("Recherche en cours...")

    // Récupère les cours selon la recherche
    getCourses(search)
        .then((courses) => {
            let course_list = courses.map(course => course.title)
            inquirer
                .prompt([
                    {
                        type: 'rawlist',
                        name: 'title',
                        message: 'Résultats de votre recherche :',
                        choices: course_list
                    }
                ])
                .then(answer => {
                    courses.forEach((course) => {
                        // On affiche le cours choisi
                        if (answer.title == course.title){
                            getCourse(course.id)
                                .then(course => {
                                    console.log('------------------------------------')
                                    console.log('--------------- COURS --------------')
                                    console.log('------------------------------------')
                                    console.log('titre', course.title)
                                    console.log('prix', course.price)
                                    console.log('url', UDEMY_BASE_URL + course.url)
                                    
                                    return getReviews(course.id)
                                })
                                .then(reviews => {
                                    console.log('------------------------------------')
                                    console.log('---------------- AVIS --------------')
                                    console.log('------------------------------------')
                                    reviews.forEach(review => console.log('Note'+review.rating+'/5 - Avis: '+review.content))
                                })
                                .catch(err => console.log())
                        }
                    })
                });
        })
        .catch(err => console.log(err))
}