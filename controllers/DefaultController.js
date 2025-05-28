/**
 * The DefaultController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/DefaultService');
const deletePaymentById = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletePaymentById);
};

const getBanks = async (request, response) => {
  await Controller.handleRequest(request, response, service.getBanks);
};

const getMerchantPaymentMethodsById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getMerchantPaymentMethodsById);
};

const getPaymentById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getPaymentById);
};

const getPredict = async (request, response) => {
  await Controller.handleRequest(request, response, service.getPredict);
};

const postPayment = async (request, response) => {
  await Controller.handleRequest(request, response, service.postPayment);
};

const postPaymentConfirmById = async (request, response) => {
  await Controller.handleRequest(request, response, service.postPaymentConfirmById);
};

const postPaymentRefundsById = async (request, response) => {
  await Controller.handleRequest(request, response, service.postPaymentRefundsById);
};

const postReceiver = async (request, response) => {
  await Controller.handleRequest(request, response, service.postReceiver);
};


module.exports = {
  deletePaymentById,
  getBanks,
  getMerchantPaymentMethodsById,
  getPaymentById,
  getPredict,
  postPayment,
  postPaymentConfirmById,
  postPaymentRefundsById,
  postReceiver,
};
