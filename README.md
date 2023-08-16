
Flipcart Data Scraper and Storage Project:
The Flipcart Data Scraper and Storage Project is designed to allow authenticated users to seamlessly scrape data from Flipcart product URLs and store the extracted information in a MongoDB database. This project ensures that only authorized users can access the scraping functionality and the stored data by implementing user authentication through JWT tokens.

Features:
User Authentication: Users can create accounts, log in securely, and log out. JWT tokens are utilized to authenticate users and grant them access to the scraping and data storage functionalities.
Data Scraping: Authenticated users can provide a unique Flipcart product URL, which the system will scrape to extract relevant information such as product details, prices, and descriptions.
Data Storage: The extracted data is then stored in a MongoDB database, associated with the user's ID, ensuring that each user's scraped data is private and accessible only to them.
Access Control: Only the user who initiated the data scraping process can access and view their stored data, enhancing privacy and security.

Getting Started-
Installation:
Clone this repository to your local machine.
Navigate to the project directory and run npm install to install the required dependencies.
Configuration:
Set up your MongoDB database and provide the connection string in the project's configuration file (config.js).

Authentication:
Users can sign up using a unique email and password combination. These credentials will be used for authentication.
Upon successful login, the system will issue a JWT token that must be included in the headers of requests to access scraping and data storage routes.
Scraping and Data Storage:
Authenticated users can send a POST request to /scrape with the Flipcart product URL they want to scrape.
The system will extract the relevant information and store it in the MongoDB database, associating it with the user's ID.
Accessing Scraped Data:

Technologies Used:
Node.js and Express.js for server-side development.
MongoDB for data storage.
JWT tokens for user authentication.
Axios for making HTTP requests and data scraping.

