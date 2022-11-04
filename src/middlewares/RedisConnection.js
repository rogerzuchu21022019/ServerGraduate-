const { createClient } = require(`redis`);

const client = createClient();
client.connect();
console.log(`server redis connection established`);

const runClientSet = 
/**
 * 
 * @param {*} key :String
 * @param {*} value : String || Number
 * @param {*} options : NX:true, EX: time expired . hour,minute,year,month,day
 * @param {*} callback : arrow func with error and reply
 */
async (key,value,options,callback) => {
  client.on("error", (err) => console.log("Redis Client Error", err));
  return await client.set(key, value, options,callback);
};

// const runClientGet = async (key,callback) => {
//   const getValue = await client.get(key,callback);
//   console.log(`runcl ${key}: ${getValue}`);
//   return getValue;
// };

const runClientGet = async (key,callback) => {
  const getValue = await client.get(key,callback);
  console.log(`runcl ${key}: ${getValue}`);
  return getValue;
};

module.exports = client
