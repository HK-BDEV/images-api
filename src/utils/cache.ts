import { redis } from '../client/redis';

export default <Func extends (...args: any[]) => any>(key: string, ttl: number, func: Func) => {
	return async (...parameters: Parameters<Func>) => {
		const cachedResponse = await redis.get(key);
		if (cachedResponse) return JSON.parse(cachedResponse);
		let result;
		if (parameters) result = await func(...parameters);
		if (result) redis.setex(key, ttl, JSON.stringify(result));
		return result;
	};
};
