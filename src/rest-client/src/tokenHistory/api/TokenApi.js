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
const ErrorResponse = require('../model/ErrorResponse')
const MtToken = require('../model/MtToken')
const Nft = require('../model/Nft')
const PageableMtTokens = require('../model/PageableMtTokens')
const PageableMtTokensWithBalance = require('../model/PageableMtTokensWithBalance')
const PageableMts = require('../model/PageableMts')
const PageableNfts = require('../model/PageableNfts')

/**
 * Token service.
 * @class TokenApi
 * @version 2.0
 */
class TokenApi {
    /**
     * Constructs a new TokenApi.
     * @alias TokenApi
     * @class
     * @param {ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link ApiClient#instance} if unspecified.
     */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }

    /**
     * Callback function to receive the result of the getMtTokensByContractAddressAndOwnerAddress operation.
     * @callback TokenApi~getMtTokensByContractAddressAndOwnerAddressCallback
     * @param {String} error Error message, if any.
     * @param {PageableMtTokensWithBalance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get token data for MT data by EOA
     * Selecting an MT contract and an EOA will fetch data of MTs by EOA created by MT contract.&lt;p&gt;&lt;/p&gt;  ## Size&lt;p&gt;&lt;/p&gt;  * The query parameter &#x60;size&#x60; is optional. (Min &#x3D; 1, Max &#x3D; 1000, Default &#x3D; 100)&lt;br&gt; * Returns an error when given a negative number&lt;br&gt; * Uses default (&#x60;size&#x3D;100&#x60;) when given a 0&lt;br&gt; * Uses the maximum value (&#x60;size&#x3D;1000&#x60;) when given a value higher than 1000&lt;br&gt;
     * @param {Object} opts Optional parameters
     * @param {TokenApi~getMtTokensByContractAddressAndOwnerAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link PageableMtTokensWithBalance}
     */
    getMtTokensByContractAddressAndOwnerAddress(xChainId, mtAddress, ownerAddress, opts, callback) {
        opts = opts || {}
        const postBody = null

        const pathParams = {
            'mt-address': mtAddress,
            'owner-address': ownerAddress,
        }
        const queryParams = {
            cursor: opts.cursor,
            size: opts.size,
        }
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = PageableMtTokensWithBalance

        return this.apiClient.callApi(
            '/v2/contract/mt/{mt-address}/owner/{owner-address}',
            'GET',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            authNames,
            contentTypes,
            accepts,
            returnType,
            callback
        )
    }
    /**
     * Callback function to receive the result of the getMtTokensByContractAddressAndOwnerAddressAndTokenId operation.
     * @callback TokenApi~getMtTokensByContractAddressAndOwnerAddressAndTokenIdCallback
     * @param {String} error Error message, if any.
     * @param {MtToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get data of MT contracts for certain EOAs
     * Query data of certain MTs.
     * @param {TokenApi~getMtTokensByContractAddressAndOwnerAddressAndTokenIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link MtToken}
     */
    getMtTokensByContractAddressAndOwnerAddressAndTokenId(xChainId, mtAddress, ownerAddress, tokenId, callback) {
        const postBody = null

        const pathParams = {
            'mt-address': mtAddress,
            'owner-address': ownerAddress,
            'token-id': tokenId,
        }
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = MtToken

        return this.apiClient.callApi(
            '/v2/contract/mt/{mt-address}/owner/{owner-address}/token/{token-id}',
            'GET',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            authNames,
            contentTypes,
            accepts,
            returnType,
            callback
        )
    }
    /**
     * Callback function to receive the result of the getMtTokensByContractAddressAndTokenId operation.
     * @callback TokenApi~getMtTokensByContractAddressAndTokenIdCallback
     * @param {String} error Error message, if any.
     * @param {PageableMtTokens} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query list of all owners for certain MTs
     * Selecting an MT contract and a token ID will  data of the EOA that owns the tokens.&lt;p&gt;&lt;/p&gt;  ## Size&lt;p&gt;&lt;/p&gt;  * The query parameter &#x60;size&#x60; is optional. (Min &#x3D; 1, Max &#x3D; 1000, Default &#x3D; 100)&lt;br&gt; * Returns an error when given a negative number&lt;br&gt; * Uses default (&#x60;size&#x3D;100&#x60;) when given a 0&lt;br&gt; * Uses the maximum value (&#x60;size&#x3D;1000&#x60;) when given a value higher than 1000&lt;br&gt;
     * @param {Object} opts Optional parameters
     * @param {TokenApi~getMtTokensByContractAddressAndTokenIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link PageableMtTokens}
     */
    getMtTokensByContractAddressAndTokenId(xChainId, mtAddress, tokenId, opts, callback) {
        opts = opts || {}
        const postBody = null

        const pathParams = {
            'mt-address': mtAddress,
            'token-id': tokenId,
        }
        const queryParams = {
            cursor: opts.cursor,
            size: opts.size,
        }
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = PageableMtTokens

        return this.apiClient.callApi(
            '/v2/contract/mt/{mt-address}/token/{token-id}',
            'GET',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            authNames,
            contentTypes,
            accepts,
            returnType,
            callback
        )
    }
    /**
     * Callback function to receive the result of the getMtsByContractAddress operation.
     * @callback TokenApi~getMtsByContractAddressCallback
     * @param {String} error Error message, if any.
     * @param {PageableMts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query data of all tokens for certain MT contracts
     * Selecting an MT contract will fetch all data of tokens issued by the contract.&lt;p&gt;&lt;/p&gt;  ## Sort&lt;p&gt;&lt;/p&gt;  * The items in the response will be listed in lexicographical order of the token IDs. &lt;p&gt;&lt;/p&gt;&lt;br&gt;  ## Size&lt;p&gt;&lt;/p&gt;  * The query parameter &#x60;size&#x60; is optional. (Min &#x3D; 1, Max &#x3D; 1000, Default &#x3D; 100)&lt;br&gt; * Returns an error when given a negative number&lt;br&gt; * Uses default (&#x60;size&#x3D;100&#x60;) when given a 0&lt;br&gt; * Uses the maximum value (&#x60;size&#x3D;1000&#x60;) when given a value higher than 1000&lt;br&gt;
     * @param {Object} opts Optional parameters
     * @param {TokenApi~getMtsByContractAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link PageableMts}
     */
    getMtsByContractAddress(xChainId, mtAddress, opts, callback) {
        opts = opts || {}
        const postBody = null

        const pathParams = {
            'mt-address': mtAddress,
        }
        const queryParams = {
            size: opts.size,
            cursor: opts.cursor,
        }
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = PageableMts

        return this.apiClient.callApi(
            '/v2/contract/mt/{mt-address}/token',
            'GET',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            authNames,
            contentTypes,
            accepts,
            returnType,
            callback
        )
    }
    /**
     * Callback function to receive the result of the getNftById operation.
     * @callback TokenApi~getNftByIdCallback
     * @param {String} error Error message, if any.
     * @param {Nft} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query token data for certain NFTs
     * Fetch data for certain NFTs
     * @param {TokenApi~getNftByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Nft}
     */
    getNftById(xChainId, nftAddress, tokenId, callback) {
        const postBody = null

        const pathParams = {
            'nft-address': nftAddress,
            'token-id': tokenId,
        }
        const queryParams = {}
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = Nft

        return this.apiClient.callApi(
            '/v2/contract/nft/{nft-address}/token/{token-id}',
            'GET',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            authNames,
            contentTypes,
            accepts,
            returnType,
            callback
        )
    }
    /**
     * Callback function to receive the result of the getNftsByContractAddress operation.
     * @callback TokenApi~getNftsByContractAddressCallback
     * @param {String} error Error message, if any.
     * @param {PageableNfts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query all token data for certain NFT contracts
     * Selecting an NFT contract will fetch data of all NFTs created by this NFT contract.&lt;p&gt;&lt;/p&gt;  ## Size&lt;p&gt;&lt;/p&gt;  * The query parameter &#x60;size&#x60; is optional. (Min &#x3D; 1, Max &#x3D; 1000, Default &#x3D; 100)&lt;br&gt; * Returns an error when given a negative number&lt;br&gt; * Uses default (&#x60;size&#x3D;100&#x60;) when given a 0&lt;br&gt; * Uses the maximum value (&#x60;size&#x3D;1000&#x60;) when given a value higher than 1000&lt;br&gt;
     * @param {Object} opts Optional parameters
     * @param {TokenApi~getNftsByContractAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link PageableNfts}
     */
    getNftsByContractAddress(xChainId, nftAddress, opts, callback) {
        opts = opts || {}
        const postBody = null

        const pathParams = {
            'nft-address': nftAddress,
        }
        const queryParams = {
            size: opts.size,
            cursor: opts.cursor,
        }
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = PageableNfts

        return this.apiClient.callApi(
            '/v2/contract/nft/{nft-address}/token',
            'GET',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            authNames,
            contentTypes,
            accepts,
            returnType,
            callback
        )
    }
    /**
     * Callback function to receive the result of the getNftsByOwnerAddress operation.
     * @callback TokenApi~getNftsByOwnerAddressCallback
     * @param {String} error Error message, if any.
     * @param {PageableNfts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get token data for NFT data by EOA
     * Selecting an NFT contract and an EOA will fetch data of the NFTs by EOA created by the NFT contract.&lt;p&gt;&lt;/p&gt;  ## Size&lt;p&gt;&lt;/p&gt;  * The query parameter &#x60;size&#x60; is optional. (Min &#x3D; 1, Max &#x3D; 1000, Default &#x3D; 100)&lt;br&gt; * Returns an error when given a negative number&lt;br&gt; * Uses default (&#x60;size&#x3D;100&#x60;) when given a 0&lt;br&gt; * Uses the maximum value (&#x60;size&#x3D;1000&#x60;) when given a value higher than 1000&lt;br&gt;
     * @param {Object} opts Optional parameters
     * @param {TokenApi~getNftsByOwnerAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link PageableNfts}
     */
    getNftsByOwnerAddress(xChainId, nftAddress, ownerAddress, opts, callback) {
        opts = opts || {}
        const postBody = null

        const pathParams = {
            'nft-address': nftAddress,
            'owner-address': ownerAddress,
        }
        const queryParams = {
            size: opts.size,
            cursor: opts.cursor,
        }
        const headerParams = {
            'x-chain-id': xChainId,
        }
        const formParams = {}

        const authNames = ['basic']
        const contentTypes = []
        const accepts = ['application/json']
        const returnType = PageableNfts

        return this.apiClient.callApi(
            '/v2/contract/nft/{nft-address}/owner/{owner-address}',
            'GET',
            pathParams,
            queryParams,
            headerParams,
            formParams,
            postBody,
            authNames,
            contentTypes,
            accepts,
            returnType,
            callback
        )
    }
}
module.exports = TokenApi
