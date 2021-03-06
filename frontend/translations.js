const printAda = require('./printAda')

module.exports = {
  SendAddressInvalidAddress: () => 'Invalid address',
  SendAmountIsNan: () => 'Invalid format: Amount has to be a number',
  SendAmountIsNotPositive: () => 'Invalid format: Amount has to be a positive number',
  SendAmountInsufficientFunds: ({balance}) =>
    `Insufficient funds for the transaction. Your balance is ${printAda(balance)} ADA.`,
  SendAmountPrecisionLimit: () => 'Invalid format: Maximum allowed precision is 0.000001',
  SendAmountIsTooBig: () =>
    `Invalid format: Amount cannot exceed ${printAda(Number.MAX_SAFE_INTEGER)}`,
}
