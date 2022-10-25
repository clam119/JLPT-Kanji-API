# JLPT Kanji API
This is a RESTFUL API written in Express/Node.JS and will allow the user to interact with the available endpoints listed in the `Available Endpoints` section. 

If your browser does not support the viewing of JSON objects, then please consider installing this extension.

This repostitory uses the current versions of Postgres V14 and Node V18.10.0, and as such it is recommended to use these versions or greater to ensure that this project can be run locally.

If you'd like to view a live version of this API, please click the link below:

[Live Version](https://heroku.com/placeholder)

## Project Introduction - What Is It?
This project is a RESTFUL API that will allow the user to only make HTTP GET Requests to the available endpoints based on the Kanji's ID in the database or the Kanji's relevant JLPT-level and character. 

There are currently 2136 Kanji available in this API and this does not include conjugations of Kanji, but rather Kanji characters that are in isolation. 

I do have plans to create a separate project alongside this API that will enable the user to perform a verbose range of CRUD operations for their own personal studies. 

## Projection Motivation - Why Did I Start?
For those of you that are unfamiliar as to what "Kanji" is. Kanji are essentially Chinese characters that the Japanese adopted to use in one of their three "Writing Systems" that include "Hiragana, Katakana and Kanji." 

I previously studied in Japan from August 2016 to August 2020 with a major in Business Economics and Japanese.

One of the things that I am most passionate about is learning about the Japanese Language, and so the "JLPT" or the standardised test known as the "Japanese Language Proficiency Test" has levels going from N5 at the lowest to N1 at the highest.

Therefore, I wanted to create a project that makes use of newly acquired Express/Node.js programming knowledge and my passion for learning Japanese, so that perhaps myself and future uses of the API will be able to easily query for Japanese Kanji Characters, or even use this API in their own projects!

# Setup & Installation
If you would like to install the project on your local machine then please clone the repository below:
> ```https://github.com/clam119/Northcoders-News-API.git```

Once you have successfully cloned this repostitory, please proceed by ensuring that you're inside the directory and run the following command to install the dependencies that will be required to run this project:
> ```npm install```

Upon installing the required dependencies, please create the two required environment variable files in the root folder with the following commands:
> ```echo "PGDATABASE = nc_news_test" >> .env.test```

> ```echo "PGDATABASE = nc_news" >> .env.development```

After successfully creating the required environment variables on the root folder. Please run the following commands to create both the test & development databases:
> ```npm run setup-dbs```

> ``` npm run seed```

With this, you will have now complete access to the repostitory. You will be able to navigate below to the available endpoints and test the available endpoints locally using Jest.

## Testing Endpoints With Jest & Localhost
This project has been created with the core Agile practice of TDD (Test-Driven-Development) using the popular Jest Testing framework to ensure that the API works as it is intended to.

Please enter the following command to view the tests that have been created in mind for this project, and feel free to both test & add/remove tests incrementally on your own local copy of this repository:
> ```npm test```

Lastly, if you would like to access the API on your localhost upon successfully setting up this API, please run this following command and navigate to the endpoints available below:
> ```npm run start```

## Available Endpoints