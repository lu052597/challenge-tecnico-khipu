/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Delete payment by Id
* Borrar un pago. Solo se pueden borrar pagos que estén pendientes de pagar. Esta operación no puede deshacerse.
*
* id String Identificador del pago
* returns success
* */
const deletePaymentById = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get banks
* Este método obtiene la lista de bancos que se pueden utilizar para pagar en esta cuenta de cobro.
*
* returns bank-get-banks
* */
const getBanks = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get payment methods
* Obtiene el listado de medios de pago disponible para una cuenta de cobrador.
*
* id BigDecimal Identificador de la cuenta de cobro
* returns merchant-get-payment-methods
* */
const getMerchantPaymentMethodsById = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get payment by Id
* Información completa del pago. Datos con los que fue creado y el estado actual del pago.
*
* id String Identificador del pago
* returns payment-get-payment
* */
const getPaymentById = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get payment prediction
* Predicción acerca del resultado de un pago, si podrá o no funcionar. Información adicional como máximo posible de transferir a un nuevo destinatario.
*
* payerUnderscoreemail String Correo electrónico del pagador
* bankUnderscoreid String Identificador del banco de origen
* amount String Monto del pago
* currency String Moneda en formato ISO-4217
* returns predict-get-predict
* */
const getPredict = ({ payerUnderscoreemail, bankUnderscoreid, amount, currency }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        payerUnderscoreemail,
        bankUnderscoreid,
        amount,
        currency,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Create payment
* Crea un pago en Khipu y obtiene las URLs para redirección al usuario para que complete el pago.
*
* paymentPostPayment PaymentPostPayment  (optional)
* returns payment-post-payment-2
* */
const postPayment = ({ paymentPostPayment }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        paymentPostPayment,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Confirm payment by Id
* **Advertencia: Esta función sólo está disponible para los clientes que la hayan contratado de forma independiente. Para utilizarla, póngase en contacto con nosotros en soporte@khipu.com**<br><br> Confirmar el pago. Al confirmar el pago, este será rendido al día hábil siguiente. 
*
* id String Identificador del pago
* returns success
* */
const postPaymentConfirmById = ({ id }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Refund payment by Id
* Reembolsa total o parcialmente el monto de un pago. Esta operación solo se puede realizar en los comercios que recauden en cuenta Khipu y antes de la rendición de los fondos correspondientes.
*
* id String Identificador del pago
* paymentPostPaymentRefunds PaymentPostPaymentRefunds  (optional)
* returns success
* */
const postPaymentRefundsById = ({ id, paymentPostPaymentRefunds }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        id,
        paymentPostPaymentRefunds,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Post receiver
* **Advertencia: Esta función sólo está disponible para los clientes que la hayan contratado de forma independiente. Para utilizarla, póngase en contacto con nosotros en soporte@khipu.com**<br><br> Crear una nueva cuenta de cobro asociada a un integrador. Necesita datos de la cuenta de usuario asociada, datos de facturación y datos de contacto. 
*
* receiverPostReceiver ReceiverPostReceiver  (optional)
* returns receiver-post-receiver-2
* */
const postReceiver = ({ receiverPostReceiver }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        receiverPostReceiver,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

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
