import axios from 'axios';
import { CheerioAPI, load } from 'cheerio';

export default async (url: string) => {
	const page = await axios(url);
	if (!page.data) return;
	const $ = load(page.data);
	const images = getPageImages($);
	return images;
};

/**
 * taking the previous cheerio instance and using to find all the images
 * once we find the images list, we loop through it attributes to filter the ones with real links
 */

const getPageImages = ($: CheerioAPI) => {
	const images = $('img');
	const links = [];
	for (const image of images) {
		const imgAttributes = $(image).attr();
		const attributesEntries = Object.entries(imgAttributes);
		/**
		 * key is the attribute name
		 * val is the image link
		 */
		for (const [key, val] of attributesEntries) {
			if (val.toLowerCase().startsWith('http')) links.push(val);
		}
	}
	return links;
};
