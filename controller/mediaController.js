const constants = require('../config/constants');
const mediaService = require('../services/mediaService');

module.exports.createMedia = async (req, res, next) => {
    const responseObj = constants.responseObj;
    try {
        const data = req.body;
        // call the service with this data
        /*let responseFromService = {
            status: constants.serviceStatus.MEDIA_CREATED_SUCCESSFULLY,
            message: 'okay',
            body: 'body'
        };*/
        const responseFromService = await mediaService.createMedia(data);
        if (responseFromService.status === constants.serviceStatus.MEDIA_CREATED_SUCCESSFULLY) {
            responseObj.status = 200;
            responseObj.message = constants.serviceStatus.MEDIA_CREATED_SUCCESSFULLY;
            responseObj.body = responseFromService.body;
        }
    } catch(err) {
        console.log('ERROR-Controller-createMedia: ', err);
    }
    return res.status(responseObj.status).send(responseObj);
}

module.exports.getMediaDetails = async (req, res, next) => {
    const responseObj = constants.responseObj;
    try {
        const data = {
            mediaId: req.params.mediaId
        }
        /*const responseFromService = {
            status: constants.serviceStatus.USER_FETCHED_SUCCESSFULLY
        };*/
        const responseFromService = await mediaService.getMediaDetails(data);
        if (responseFromService.status === constants.serviceStatus.MEDIA_FETCHED_SUCCESSFULLY) {
            responseObj.status = 200;
            responseObj.message = constants.serviceStatus.MEDIA_FETCHED_SUCCESSFULLY;
            responseObj.body = responseFromService.body;
        }
    } catch(err) {
        console.log('ERROR-Controller-getMediaDetails: ', err);
    }
    return res.status(responseObj.status).send(responseObj);
}

module.exports.getMediaList = async (req, res, next) => {
    const responseObj = constants.responseObj;
    try {
        const data = {
            skip: req.query.skip,
            limit: req.query.limit
        };
        /*const responseFromService = {
            status: constants.serviceStatus.USER_LIST_FETCHED_SUCCESSFULLY
        };*/
        const responseFromService = await mediaService.getMediaList(data);
        if (responseFromService.status === constants.serviceStatus.MEDIA_LIST_FETCHED_SUCCESSFULLY) {
            responseObj.status = 200;
            responseObj.message = constants.serviceStatus.MEDIA_LIST_FETCHED_SUCCESSFULLY;
            responseObj.body = responseFromService.body;
        }
    } catch(err) {
        console.log('ERROR-Controller-getMediaList: ', err)
    }
    return res.status(responseObj.status).send(responseObj);
}

module.exports.getMediaListTipus = async (req, res, next) => {
    const responseObj = constants.responseObj;
    try {
        const data = {
            tipus: req.query.tipus
        };
        /*const responseFromService = {
            status: constants.serviceStatus.USER_LIST_FETCHED_SUCCESSFULLY
        };*/
        const responseFromService = await mediaService.getMediaListTipus(data);
        if (responseFromService.status === constants.serviceStatus.MEDIA_LIST_FETCHED_SUCCESSFULLY) {
            responseObj.status = 200;
            responseObj.message = constants.serviceStatus.MEDIA_LIST_FETCHED_SUCCESSFULLY;
            responseObj.body = responseFromService.body;
        }
    } catch(err) {
        console.log('ERROR-Controller-getMediaListTipus: ', err)
    }
    return res.status(responseObj.status).send(responseObj);
}

module.exports.mediaUser =  async (req, res, next) => {
    const responseObj = constants.responseObj;
    try {
        const data = req.body;
        data.userId = req.params.userId;
        // call the service with this data
        /*const responseFromService = {
            status: constants.serviceStatus.USER_UPDATED_SUCCESSFULLY,
            message: 'okay',
            body: 'body'
        };*/
        const responseFromService = await userService.updateUser(data);
        if (responseFromService.status === constants.serviceStatus.USER_UPDATED_SUCCESSFULLY) {
            responseObj.status = 200;
            responseObj.message = constants.serviceStatus.USER_UPDATED_SUCCESSFULLY;
            responseObj.body = responseFromService.body;
        }
    } catch(err) {
        console.log('ERROR-Controller-updateUser: ', err);
    }
    return res.status(responseObj.status).send(responseObj);
}

module.exports.updateMedia =  async (req, res, next) => {
    const responseObj = constants.responseObj;
    try {
        const data = req.body;
        data.mediaId = req.params.mediaId;
        // call the service with this data
        /*const responseFromService = {
            status: constants.serviceStatus.USER_UPDATED_SUCCESSFULLY,
            message: 'okay',
            body: 'body'
        };*/
        const responseFromService = await mediaService.updateMedia(data);
        if (responseFromService.status === constants.serviceStatus.MEDIA_UPDATED_SUCCESSFULLY) {
            responseObj.status = 200;
            responseObj.message = constants.serviceStatus.MEDIA_UPDATED_SUCCESSFULLY;
            responseObj.body = responseFromService.body;
        }
    } catch(err) {
        console.log('ERROR-Controller-updateMedia: ', err);
    }
    return res.status(responseObj.status).send(responseObj);
}
module.exports.deleteMedia =  async (req, res, next) => {
    const responseObj = constants.responseObj;
    try {
        const data = {
            mediaId: req.params.mediaId
        };
        // call the service with this data
        /*const responseFromService = {
            status: constants.serviceStatus.USER_DELETED_SUCCESSFULLY,
            message: 'okay',
            body: 'body'
        };*/
        const responseFromService = await mediaService.deleteMedia(data);
        if (responseFromService.status === constants.serviceStatus.MEDIA_DELETED_SUCCESSFULLY) {
            responseObj.status = 204;
            responseObj.message = constants.serviceStatus.MEDIA_DELETED_SUCCESSFULLY;
            responseObj.body = responseFromService.body;
        }
    } catch(err) {
        console.log('ERROR-Controller-deleteMedia: ', err);
    }
    return res.status(responseObj.status).send(responseObj);
}
