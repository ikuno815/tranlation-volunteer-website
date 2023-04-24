const knex = require('../../db/index');

const TRANSLATION_SUGGEST_TABLE = 'translation_suggest';

module.exports = {
    TRANSLATION_SUGGEST_TABLE,
    createTransSuggest(
        userId,
        requestId,
        bestAnswer,
        suggestion
    ) {
        return knex(TRANSLATION_SUGGEST_TABLE)
            .insert({
                user_id: userId,
                request_id: requestId,
                best_answer: bestAnswer,
                suggestion: suggestion
            })
    },
    getAllSuggestionsByReqId(requestId) {
        return knex(TRANSLATION_SUGGEST_TABLE)
            .select(
                'sg.id',
                'sg.user_id',
                'sg.request_id',
                'sg.best_answer',
                'sg.suggestion',
                'u.username',
            )
            .from('translation_suggest AS sg')
            .leftJoin('users AS u', 'u.id', 'sg.user_id')
            .where('sg.request_id', requestId);
    }
}
