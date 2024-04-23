# buzzhome-api
# Introduction
Buzzhome-API is a Node.js API server for managing real estate data. It provides endpoints for creating, reading, updating, and deleting real estate listings.

# Set up
1. Create Config File: Create a file named config.js in the database/config directory and copy the content from example.js. Update the database configuration for the development mode.
2. Install package: Run the following command to install the required packages:
   ```bash
   yarn
   # or
   npm install
3. Migrate Database: Migrate the database schema using Sequelize CLI:
   ```
    npx sequelize-cli db:migrate
4. Add Seeding: Seed the database with initial data using Sequelize CLI:
   ```bash
   npx sequelize-cli db:seed:all
5. Start the Server: Start the API server:
   ```bash
   yarn start
   # or
   npm run start


6. Create Environment File: Create a file named .env in the root folder and copy the content from example.env. Update the port number to match your environment.

7. Testing: Access the API endpoints at [http://localhost:4000/post](http://localhost:4000/post)

# Note
- Define your custom routes in the `src/app.js` file to extend the functionality of the API
