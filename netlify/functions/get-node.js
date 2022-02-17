const fetch = require('node-fetch')

exports.handler = async function() {

    const PAPRIKA_API = 'https://blocksum.org/api/getinfo'

    const response = await fetch(PAPRIKA_API)
    const data = await response.json()

    return{
        statusCode: 200,
        body: JSON.stringify(data)
    }

}