const Redis = require(`ioredis`);
const redis = new Redis({
  port: 6379,
  host: "127.0.0.1",
});

const RedisHelper = {
  EXPIRED_TIME: 360,
  EXPIRED_KEYWORD: `EX`,
};

const RedisSet =  (key, value, expired_key, expired_time) => {
  return  redis.set(key, value, expired_key, expired_time);
};

const RedisGet =  (key) => {
  return  redis.get(key);
};

module.exports = { RedisHelper, RedisSet, RedisGet };
