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

   

$ `yarn`
or $ `npm install`

3. migrate db

$ `npx sequelize-cli db:migrate`

4. add seeding

$ `npx sequelize-cli db:seed:all`

5. start

$ `yarn start`
or $ `npm run start`

6. create file `.env` in the root folder, copy from `example.env`
   update your port

7. test:

go to [http://localhost:4000/post](http://localhost:4000/post)


# Note
- Define your route in `src/app.js`
