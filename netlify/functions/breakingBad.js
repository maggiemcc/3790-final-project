const axios = require('axios');

exports.handler = async function (event, context) {
  console.log(event)
  console.log(context)
  try {
    const {option} = event.queryStringParameters
    const response = await axios.get(`https://www.breakingbadapi.com/api/${option}`)
    
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString()
    }
  }
}