# React Wordpress Headless App
## _Make your wordpress blog website a headless react app_

A modern and fast React App built using the Wordpress API to display posts in a headless setup.

## Features
-    Built using the latest version of React
-    Fetching data using the Wordpress API
-    Fast and responsive UI
-    Clean and organized code
-    Easy to customize and extend

## Installation
Follow these steps to set up and run the React Wordpress Headless App on your local machine:
1. Clone the repository to your local machine:
```sh
git clone https://github.com/<your-github-username>/react-wordpress-headless-app.git
```
2. Navigate to the project directory:
```sh
cd react-wordpress-headless-app
```
3. Install the required dependencies:

```sh
$ npm start
```

5. Visit [http://localhost:3000](http://localhost:3000) in your browser to view the app.



## Demo 

For demo website please visit our vercel app here : https://headlessapp.vercel.app/


## Debug
if wordpress api is showing cors policy no access-control-allow-origin error, then open your wp-config.php and write the following two lines in the begining of file
```sh
header("Access-Control-Allow-Headers: *");
header("access-control-allow-origin: *");
```

To change api url open '.env' file and change the api url. 

## Conclusion

The React Wordpress Headless App is a great starting point for building fast and modern apps using React and the Wordpress API. The code is well organized and easy to understand, making it easy to customize and extend as per your requirements. Give it a try and start building your own amazing apps today!


