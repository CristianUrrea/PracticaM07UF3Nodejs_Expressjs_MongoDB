const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
  createMediaSchema: Joi.object().keys({
      titol: Joi.string().required(),
      sinopsis: Joi.string().required(),
      puntuacio: Joi.number().integer().min(0).max(10).required(),
      tipus: Joi.string().valid("pelicula", "serie").required()
    }),
    getMediaDetailsSchema: Joi.object().keys({
      mediaId: Joi.objectId().required()
    }),
    getMediaListSchema: Joi.object().keys({
        skip: Joi.number().optional(),
        limit: Joi.number().optional(),
    }).and('skip', 'limit'),
    getMediaListPeliculasSchema: Joi.object().keys({
        tipus: Joi.string().required()
    }).and('tipus'),
    mediaIdPathParamSchema: Joi.object().keys({
        mediaId: Joi.objectId().required()
    }),
    updateMediaBodySchema: Joi.object().keys({
      titol: Joi.string().optional(),
      sinopsis: Joi.string().optional(),
      puntuacio: Joi.number().integer().min(0).max(10).optional(),
      tipus: Joi.string().valid("pelicula", "serie").optional()
    })
}
