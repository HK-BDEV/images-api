import { Request, Response } from 'express';
import cache from '../utils/cache';
import loadPage from '../utils/loadPage';

export const getList = async (req: Request, res: Response) => {
	try {
		const { url } = req.body;
		if (!url) return res.status(400).json({ status: 'error', message: 'Incomplete request.' });
		const images = await cache(url, 180, loadPage)(url); // call loadPage and cache the result
		if (!images) return res.status(500).json({ status: 'error', message: 'Internal server error.' });
		res.status(200).json({ status: 'success', data: { images } });
	} catch (error) {
		console.error(error);
		res.status(500).json({ status: 'error', message: 'Internal server error.' });
	}
};
