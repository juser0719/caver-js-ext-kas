/*
 * Token History API
 * # Introduction  Token History API allows users to search for information and transfer records on KLAY, FT (KIP-7, Labeled ERC-20), and NFT (KIP-17, Labeled ERC-721) tokens. You can use Token History API to check the records of a specific EOA transferring KLAY, retrieve NFT information, or other purposes.  For more details on Token History API, refer to our [tutorial](https://klaytn.com).  For any questions regarding this document or KAS, visit [the developer forum](https://forum.klaytn.com/).
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../ApiClient', '../model/NftContractDetail'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../ApiClient'), require('./NftContractDetail'))
    } else {
        // Browser globals (root is window)
        if (!root.TokenHistoryApi) {
            root.TokenHistoryApi = {}
        }
        root.TokenHistoryApi.PageableNftContractDetails = factory(root.TokenHistoryApi.ApiClient, root.TokenHistoryApi.NftContractDetail)
    }
})(this, function(ApiClient, NftContractDetail) {
    /**
     * The PageableNftContractDetails model module.
     * @class PageableNftContractDetails
     * @version 1.0
     */

    /**
     * Constructs a new <code>PageableNftContractDetails</code>.
     * @alias PageableNftContractDetails
     * @class
     * @param items {Array.<NftContractDetail>}
     * @param cursor {String} Next page cursor
     */
    const PageableNftContractDetails = function(items, cursor) {
        this.items = items
        this.cursor = cursor
    }

    /**
     * Constructs a <code>PageableNftContractDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PageableNftContractDetails} obj Optional instance to populate.
     * @return {PageableNftContractDetails} The populated <code>PageableNftContractDetails</code> instance.
     * @memberof PageableNftContractDetails
     */
    PageableNftContractDetails.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new PageableNftContractDetails()
            if (data.hasOwnProperty('items')) obj.items = ApiClient.convertToType(data.items, [NftContractDetail])
            if (data.hasOwnProperty('cursor')) obj.cursor = ApiClient.convertToType(data.cursor, 'String')
        }
        return obj
    }

    /**
     * @type {Array.<NftContractDetail>}
     * @memberof PageableNftContractDetails
     */
    PageableNftContractDetails.prototype.items = undefined

    /**
     * Next page cursor
     * @type {String}
     * @memberof PageableNftContractDetails
     */
    PageableNftContractDetails.prototype.cursor = undefined

    return PageableNftContractDetails
})
