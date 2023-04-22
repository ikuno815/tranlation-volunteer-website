const knex = require('../../db/index');

const TRANSLATION_REQUEST_TABLE = 'translation_request';
const USERS_TABLE = 'users';
const LANGUAGES_TABLE = 'languages';
const CATEGORIES_TABLE = 'categories';

module.exports = {
    TRANSLATION_REQUEST_TABLE,
    //add the info of request form to the database
    createTransRequest(
        userId,
        categoriesId,
        originalLanguageId,
        translatedLanguageId,
        request
    ) {
        return knex(TRANSLATION_REQUEST_TABLE)
            .insert({
                user_id: userId,
                categories_id: categoriesId,
                original_language_id: originalLanguageId,
                translated_language_id: translatedLanguageId,
                request: request
            })
    },
    getAllTransReqData() {
        return knex
            .select(
                'tr.id',
                'tr.user_id',
                'tr.categories_id',
                'tr.original_language_id',
                'tr.translated_language_id',
                'tr.request',
                'u.username',
                'c.name',
                'lo.name AS original_language',
                'lt.name AS translated_language'
            )
            .from('translation_request AS tr')
            .leftJoin('users AS u', 'u.id', 'tr.user_id')
            .leftJoin('categories AS c', 'c.id', 'tr.categories_id')
            .leftJoin('languages AS lo', 'lo.id', 'tr.original_language_id')
            .leftJoin('languages AS lt', 'lt.id', 'tr.translated_language_id')
            .orderBy('tr.id', 'desc');
   }
}