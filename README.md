

# MOVIE APP

  

Movie app is an application to see a movie catalog sorted by category, this app has been build with Nestj and React.

  

This project is the backend if you want to see the frontend please [see here](https://github.com/Trycatch-tv/team-39-frontend)

  

## Getting started 🚀

  

These instructions will allow you to have a copy of the project running on your local machine for development and testing purposes.

  

See ***Deployment*** for how to deploy the project.

  
  

### Prerequisites 📋  


_For the project to work, the following dependencies must be installed:_ 


- **Node js**
- **Express js**
- **MikroOrm**
- **Puppeteer** 
- **NestJs** 
- **Handlebars**
- **Nodemailer**
- **PM2**




### Installation 🔧

  

To install the project correctly the following steps must be performed:_.
- First the `database [3]` must be imported, the database script is defined below, see step [3].
- Then you have to configure the environment variables, the environment variables used are located in `config/env/template.env`. 
- Finally, go into the root folder of the project and run the `npm install` command to install all the dependencies.




  

Example of installing the dependencies and launching the application


```


[1] cd project/

[2] npm install

[3] npm run mikro-orm schema:fresh -- --run //to create db and tables

[4] cd src/

[5] npm run start


```



```diff



+ [1]: To run the application in the development environment you must use npm run start:dev

  


```

  
 

## Deployment 📦




To make a production deployment of this project you have to do the following steps_.



- Copy all the contents of the root folder except the `node_modules` folder and paste it into the folder named `backend` which is located inside the `/home/$USER/` directory of the production server.

- You must enter the `/home/$USER/backend` folder. 


- You must set the corresponding environment variables, the template is located in `/home/$USER/backend/config/env/template.env`. 


- Then install the dependencies with the `npm install` command.


- Then you must start the project, for this step you must check the following:


 -- If it is the first time deployment, you must run the command `pm2 start npm --name "movie_app" -- start`.


 -- If it is not the first time you should run the `pm2 list` command and locate the project process and then run `pm2 restart movie_app [1]`.




> [1]: This command restarts the project instance, you can use the assigned name or the list number. example pm2 restart 0


  

## Built with 🛠️

  

This project was built with the following technologies.

  

* [Nest JS](https://nestjs.com/) - The framework used.


* [NPM](https://www.npmjs.com/) - Dependency Manager


* [MYSQL](https://www.mysql.com/) - Used as database.

    

## Versioning 📌

  

We use [SemVer](http://semver.org/) for versioning. 

  


  

## License 📄

  

This project is licensed under the (**_Proprietary Software License_**).