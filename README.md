## Images API

Using Cheerio to get a list of images from a webpage.
The provided solution will work with any given page.

## Description

Using Cheerio for few websites is not the best solution, since it's not usable with dynamically generated images.

The images are gotten by looping through every `img` in the webpage then looping using each one's attributes to get the valid links.

For this test, I am using an optimal solution to get images URL which consist of checking `http` existence in the begging.

## Used Packages

Express, Cheerio, Axios and IORedis

**note:** redis is using the default port (6379) on localhost

## API Reference

#### Get all images

```http
  GET /images/list
```

| Parameter | Type     | Description                                       |
| :-------- | :------- | :------------------------------------------------ |
| `url`     | `string` | Send as a json body with the URL to scrape images |
