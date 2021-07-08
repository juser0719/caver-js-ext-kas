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
 * The MtToken model module.
 * @class MtToken
 * @version 2.0
 */
class MtToken {
    /**
     * Constructs a new <code>MtToken</code>.
     * @alias MtToken
     * @class
     * @param tokenId {String} Token ID (in hexadecimal)
     * @param owner {String} Owner EOA (20-byte)
     * @param tokenAddress {String} CA (20-byte)
     * @param totalSupply {String} Total issued amount (in hexadecimal)
     * @param tokenUri {String} Token URL
     * @param balance {String} Owner's balances in EOA
     * @param transactionHash {String} Last transaction hash (32-byte)
     * @param transferFrom {String} Sender EOA of last TransferSingle or TransferBatch (20-byte)
     * @param transferTo {String} Receiver EOA of recent TransferSingle or TransferBatch (20-byte)
     * @param updatedAt {Number} Last change in token information (timestamp)
     */

    constructor(tokenId, owner, tokenAddress, totalSupply, tokenUri, balance, transactionHash, transferFrom, transferTo, updatedAt) {
        this.tokenId = tokenId
        this.owner = owner
        this.tokenAddress = tokenAddress
        this.totalSupply = totalSupply
        this.tokenUri = tokenUri
        this.balance = balance
        this.transactionHash = transactionHash
        this.transferFrom = transferFrom
        this.transferTo = transferTo
        this.updatedAt = updatedAt
    }

    /**
     * Constructs a <code>MtToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {MtToken} obj Optional instance to populate.
     * @return {MtToken} The populated <code>MtToken</code> instance.
     * @memberof MtToken
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MtToken()

            if (data.hasOwnProperty('tokenId')) {
                obj.tokenId = ApiClient.convertToType(data.tokenId, 'String')
            }
            if (data.hasOwnProperty('owner')) {
                obj.owner = ApiClient.convertToType(data.owner, 'String')
            }
            if (data.hasOwnProperty('tokenAddress')) {
                obj.tokenAddress = ApiClient.convertToType(data.tokenAddress, 'String')
            }
            if (data.hasOwnProperty('totalSupply')) {
                obj.totalSupply = ApiClient.convertToType(data.totalSupply, 'String')
            }
            if (data.hasOwnProperty('tokenUri')) {
                obj.tokenUri = ApiClient.convertToType(data.tokenUri, 'String')
            }
            if (data.hasOwnProperty('balance')) {
                obj.balance = ApiClient.convertToType(data.balance, 'String')
            }
            if (data.hasOwnProperty('transactionHash')) {
                obj.transactionHash = ApiClient.convertToType(data.transactionHash, 'String')
            }
            if (data.hasOwnProperty('transferFrom')) {
                obj.transferFrom = ApiClient.convertToType(data.transferFrom, 'String')
            }
            if (data.hasOwnProperty('transferTo')) {
                obj.transferTo = ApiClient.convertToType(data.transferTo, 'String')
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj.updatedAt = ApiClient.convertToType(data.updatedAt, 'Number')
            }
        }
        return obj
    }
}

/**
 * Token ID (in hexadecimal)
 * @type {String}
 * @memberof MtToken
 */
MtToken.prototype.tokenId = undefined
/**
 * Owner EOA (20-byte)
 * @type {String}
 * @memberof MtToken
 */
MtToken.prototype.owner = undefined
/**
 * CA (20-byte)
 * @type {String}
 * @memberof MtToken
 */
MtToken.prototype.tokenAddress = undefined
/**
 * Total issued amount (in hexadecimal)
 * @type {String}
 * @memberof MtToken
 */
MtToken.prototype.totalSupply = undefined
/**
 * Token URL
 * @type {String}
 * @memberof MtToken
 */
MtToken.prototype.tokenUri = undefined
/**
 * Owner's balances in EOA
 * @type {String}
 * @memberof MtToken
 */
MtToken.prototype.balance = undefined
/**
 * Last transaction hash (32-byte)
 * @type {String}
 * @memberof MtToken
 */
MtToken.prototype.transactionHash = undefined
/**
 * Sender EOA of last TransferSingle or TransferBatch (20-byte)
 * @type {String}
 * @memberof MtToken
 */
MtToken.prototype.transferFrom = undefined
/**
 * Receiver EOA of recent TransferSingle or TransferBatch (20-byte)
 * @type {String}
 * @memberof MtToken
 */
MtToken.prototype.transferTo = undefined
/**
 * Last change in token information (timestamp)
 * @type {Number}
 * @memberof MtToken
 */
MtToken.prototype.updatedAt = undefined

module.exports = MtToken
