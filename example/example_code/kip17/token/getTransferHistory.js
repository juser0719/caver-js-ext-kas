const _ = require('lodash')
const CaverExtKAS = require('../../../../index')

const { url, chainId, accessKeyId, secretAccessKey } = require('../../../../test/testEnv').auths.kip17API

const caver = new CaverExtKAS()

caver.initKIP17API(chainId, accessKeyId, secretAccessKey, url)

async function getTransferHistory() {
    const res = await caver.kas.kip17.getTransferHistory('0x9a4af95723b972ec6953187cb39b7167e216cbdd', '0x13')
    console.log(res)
}

getTransferHistory()
