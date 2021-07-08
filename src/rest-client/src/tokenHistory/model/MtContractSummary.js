/**
 * Token History API
 * # Introduction  Token History API allows you to query the transaction history of KLAY, FTs (KIP-7 and Labelled ERC-20), NFTs (KIP-17 and Labelled ERC-721), and MTs (KIP-37 and Labelled ERC-1155). You can track KLAY's transaction history or retrieve NFT-related data of a certain EOA.   For more details on using Token History API, please refer to the [Tutorial](https://docs.klaytnapi.com/tutorial).   For any inquiries on this document or KAS in general, please visit [Developer Forum](https://forum.klaytn.com/).
 *
 * OpenAPI spec version: 2.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

const ApiClient = require('../../ApiClient')

/**
 * The MTContractSummary model module.
 * @class MTContractSummary
 * @version 2.0
 */
class MTContractSummary {
    /**
     * Constructs a new <code>MTContractSummary</code>.
     * @alias MTContractSummary
     * @class
     * @param kind {String} Contract type
     * @param contractAddress {String} Contract address (20-byte)
     * @param updatedAt {Number} Last change of token ownership (timestamp)
     * @param totalBalance {String} Total balance of tokens (in hexadecimal)
     * @param extras {Object}
     */

    constructor(kind, contractAddress, updatedAt, totalBalance, extras) {
        this.kind = kind
        this.contractAddress = contractAddress
        this.updatedAt = updatedAt
        this.totalBalance = totalBalance
        this.extras = extras
    }

    /**
     * Constructs a <code>MTContractSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {MTContractSummary} obj Optional instance to populate.
     * @return {MTContractSummary} The populated <code>MTContractSummary</code> instance.
     * @memberof MTContractSummary
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MTContractSummary()

            if (data.hasOwnProperty('kind')) {
                obj.kind = ApiClient.convertToType(data.kind, 'String')
            }
            if (data.hasOwnProperty('contractAddress')) {
                obj.contractAddress = ApiClient.convertToType(data.contractAddress, 'String')
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj.updatedAt = ApiClient.convertToType(data.updatedAt, 'Number')
            }
            if (data.hasOwnProperty('totalBalance')) {
                obj.totalBalance = ApiClient.convertToType(data.totalBalance, 'String')
            }
            if (data.hasOwnProperty('extras')) {
                obj.extras = ApiClient.convertToType(data.extras, Object)
            }
        }
        return obj
    }
}

/**
 * Contract type
 * @type {String}
 * @memberof MTContractSummary
 */
MTContractSummary.prototype.kind = undefined
/**
 * Contract address (20-byte)
 * @type {String}
 * @memberof MTContractSummary
 */
MTContractSummary.prototype.contractAddress = undefined
/**
 * Last change of token ownership (timestamp)
 * @type {Number}
 * @memberof MTContractSummary
 */
MTContractSummary.prototype.updatedAt = undefined
/**
 * Total balance of tokens (in hexadecimal)
 * @type {String}
 * @memberof MTContractSummary
 */
MTContractSummary.prototype.totalBalance = undefined
/**
 * @type {Object}
 * @memberof MTContractSummary
 */
MTContractSummary.prototype.extras = undefined

// Implement AnyOfPageableContractSummaryItemsItems interface:

module.exports = MTContractSummary
