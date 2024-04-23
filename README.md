# buzzhome-api

# Set up
1. create file `database/config/config.js`, copy from `database/config/example.js`
   update database config in `development` mode

2. install package

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
