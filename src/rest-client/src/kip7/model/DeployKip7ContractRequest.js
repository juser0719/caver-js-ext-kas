/**
 * KIP-7 API
 * # Introduction The KIP-17 API helps BApp (Blockchain Application) developers to manage contracts and tokens created in accordance with the [KIP-7](https://docs.klaytnapi.com/v/en/api#kip-7-api) standard, which is Klaytn's technical speficication for Fungible Tokens.  The functionality of the multiple endpoints enables you to do the following actions: - deploy smart contracts - manage the entire life cycle of an FT from minting, to sending and burning - get contract or token data - authorize a third party to execute token transfers - send tokens on behalf of the owner   For more details on KAS, please refer to [KAS Docs](https://docs.klaytnapi.com/). If you have any questions or comments, please leave them in the [Klaytn Developers Forum](http://forum.klaytn.com).    **alias**  When a method of the KIP-17 API requires a contract address, you can use the contract **alias**. You can give the contract an alias when deploying, and use it in place of the complicated address.  **deployer**  When you create a contract, you will be assigned one `deployer` address per Credential, which is the account address used for managing contracts. In KIP-7 API, this address is used in many different token-related operations. You can find the `deployer` address with [KIP7Deployer](#operation/GetDefaultDeployer).  Even with contracts created using SDKs like \"caver\", you can still use the contract address and [Wallet API](https://refs.klaytnapi.com/en/wallet/latest) account to manage your contracts and tokens.  # Fee Payer Options  KAS KIP-17 supports four ways to pay the transaction fees.<br />  **1. Only using KAS Global FeePayer Account** <br /> Sends all transactions using KAS Global FeePayer Account. ``` {     \"options\": {       \"enableGlobalFeePayer\": true     } } ```  <br />  **2. Using User FeePayer Account** <br /> Sends all transactions using User FeePayer Account. ``` {   \"options\": {     \"enableGlobalFeePayer\": false,     \"userFeePayer\": {       \"krn\": \"krn:1001:wallet:20bab367-141b-439a-8b4c-ae8788b86316:feepayer-pool:default\",       \"address\": \"0xd6905b98E4Ba43a24E842d2b66c1410173791cab\"     }   } } ```  <br />  **3. Using both KAS Global FeePayer Account + User FeePayer Account** <br /> Sends transactions using User FeePayer Account by default, and switches to the KAS Global FeePayer Account when balances are insufficient. ``` {   \"options\": {     \"enableGlobalFeePayer\": true,     \"userFeePayer\": {       \"krn\": \"krn:1001:wallet:20bab367-141b-439a-8b4c-ae8788b86316:feepayer-pool:default\",       \"address\": \"0xd6905b98E4Ba43a24E842d2b66c1410173791cab\"     }   } } ```  <br />  **4. Not using FeePayer Account** <br /> Sends transactions the default way, paying the transaction fee from the user's account. ``` {   \"options\": {     \"enableGlobalFeePayer\": false   } } ```  # Error Code This section contains the errors that might occur when using the KIP-17 API. KAS uses HTTP status codes. More details can be found in this [link](https://developer.mozilla.org/en/docs/Web/HTTP/Status).
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

const ApiClient = require('../../ApiClient')
const Kip7FeePayerOption = require('./Kip7FeePayerOption')

/**
 * The DeployKip7ContractRequest model module.
 * @class DeployKip7ContractRequest
 * @version 1.0
 */
class DeployKip7ContractRequest {
    /**
     * Constructs a new <code>DeployKip7ContractRequest</code>.
     * @alias DeployKip7ContractRequest
     * @class
     * @param alias {String} The alias of the contract. When using KIP-7 API, you can use the contract alias in place of the address. The alias must only consist of lowercase letters, numbers and hyphens, and the first letter is restricted to a lowercase letter.
     * @param name {String} Contract name
     * @param symbol {String} Token symbol
     * @param initialSupply {String} Initial supply (in hex.)
     */

    constructor(alias, name, symbol, initialSupply) {
        this.alias = alias
        this.name = name
        this.symbol = symbol
        this.initialSupply = initialSupply
    }

    /**
     * Constructs a <code>DeployKip7ContractRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DeployKip7ContractRequest} obj Optional instance to populate.
     * @return {DeployKip7ContractRequest} The populated <code>DeployKip7ContractRequest</code> instance.
     * @memberof DeployKip7ContractRequest
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeployKip7ContractRequest()

            if (data.hasOwnProperty('alias')) {
                obj.alias = ApiClient.convertToType(data.alias, 'String')
            }
            if (data.hasOwnProperty('name')) {
                obj.name = ApiClient.convertToType(data.name, 'String')
            }
            if (data.hasOwnProperty('symbol')) {
                obj.symbol = ApiClient.convertToType(data.symbol, 'String')
            }
            if (data.hasOwnProperty('decimals')) {
                obj.decimals = ApiClient.convertToType(data.decimals, 'Number')
            }
            if (data.hasOwnProperty('initialSupply')) {
                obj.initialSupply = ApiClient.convertToType(data.initialSupply, 'String')
            }
            if (data.hasOwnProperty('options')) {
                obj.options = Kip7FeePayerOption.constructFromObject(data.options)
            }
        }
        return obj
    }
}

/**
 * The alias of the contract. When using KIP-7 API, you can use the contract alias in place of the address. The alias must only consist of lowercase letters, numbers and hyphens, and the first letter is restricted to a lowercase letter.
 * @type {String}
 * @memberof DeployKip7ContractRequest
 */
DeployKip7ContractRequest.prototype.alias = undefined
/**
 * Contract name
 * @type {String}
 * @memberof DeployKip7ContractRequest
 */
DeployKip7ContractRequest.prototype.name = undefined
/**
 * Token symbol
 * @type {String}
 * @memberof DeployKip7ContractRequest
 */
DeployKip7ContractRequest.prototype.symbol = undefined
/**
 * The number of digits that come after the decimal place when displaying token values on-screen. The default value is `0`.
 * @type {Number}
 * @memberof DeployKip7ContractRequest
 */
DeployKip7ContractRequest.prototype.decimals = undefined
/**
 * Initial supply (in hex.)
 * @type {String}
 * @memberof DeployKip7ContractRequest
 */
DeployKip7ContractRequest.prototype.initialSupply = undefined
/**
 * @type {Kip7FeePayerOption}
 * @memberof DeployKip7ContractRequest
 */
DeployKip7ContractRequest.prototype.options = undefined

module.exports = DeployKip7ContractRequest
