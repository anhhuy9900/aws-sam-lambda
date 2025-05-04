import { Handler } from 'aws-lambda';
import Redis from 'ioredis';
// import redis from 'redis';
import { ResponseUtil } from '../../utils/response';

// const redis = new Redis(process.env.RedisUrl || 'rediss://pra-re-1ukz1mv7dwnft.hn1z9w.0001.use2.cache.amazonaws.com:6379', {
//     tls: {
//       checkServerIdentity: () => undefined,
//     }
// });

export const handler: Handler = async (event, context) => {
    console.log("🚀 ------------------------------------------------------🚀");
    console.log("🚀 ~ PATTERN ELASTIC LAMBDA S3 - handler -> event:", JSON.stringify(event));
    console.log("🚀 ~ PATTERN ELASTIC LAMBDA S3 - handler -> context:", JSON.stringify(context));
    console.log("🚀 ~ PATTERN ELASTIC LAMBDA S3 - handler -> RedisUrl:", JSON.stringify(process.env?.RedisUrl));
    
    console.log("🚀 ------------------------------------------------------🚀");

    const redis = new Redis('redis://rediscacheserver-hn1z9w.serverless.use2.cache.amazonaws.com');
    // const redis = new Redis({
    //     sentinels: [{ host: 'redistest.hn1z9w.clustercfg.use2.cache.amazonaws.com', port: 6379 }],
    //     password: '',
    //   });

    try {
        // const redis = new Redis('rediscacheserver-hn1z9w.serverless.use2.cache.amazonaws.com:6379');

        // const redis = new Redis.Cluster([
        //     'redistest-0001-001.hn1z9w.0001.use2.cache.amazonaws.com:6379'
        //   ]);

        // redis.on('connect', function () {
        //     console.log("🚀 ~ PATTERN ELASTIC LAMBDA S3 - CONNECTED");
        // });

        // redis.on('error', function (error) {
        //     console.log("🚀 ~ PATTERN ELASTIC LAMBDA S3 - CONNECT ERROR: ", JSON.stringify(error));
        // });

        // const redis = new Redis("redis://redistest-0001-001.hn1z9w.0001.use2.cache.amazonaws.com:6379");

        redis.set('fullName', 'Nguyen Hoang Anh Huy')
        const value = redis.get('fullName', function (err, result) {
            console.log('PATTERN ELASTIC LAMBDA S3 - handler -> result:', result);
        })

        console.log("🚀 ~ PATTERN ELASTIC LAMBDA S3 - handler -> value:", JSON.stringify(value));
        

        // const redisHost: string = 'redistest.hn1z9w.clustercfg.use2.cache.amazonaws.com';
        // const redisPort = 6379;
        // const redisPassword = '';

        // // Create a Redis client
        // const redisClient = redis.createClient({
        //     url: 'rediscacheserver-hn1z9w.serverless.use2.cache.amazonaws.com:6379',
        // });

        // // Perform Redis operations
        // redisClient.on('connect', () => {
        //     console.log('Connected to Redis');
            
        // });

        // redisClient.set('myKey', 'Hello, Redis!');

        // redisClient.on('error', (error: any) => {
        //     console.error('Error connecting to Redis:', error);
        // });

        // return ResponseUtil(value); 

    } catch (err) {
        console.error('PATTERN ELASTIC LAMBDA S3 Handler - ERROR: ', JSON.stringify(err));
    } finally {
        // Close the Redis connection
        // redis.quit();
    }
};
