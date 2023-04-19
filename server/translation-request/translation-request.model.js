const knex = require('../../db/index');

const TRANSLATION_REQUEST_TABLE = 'translation_request';

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
    }
}