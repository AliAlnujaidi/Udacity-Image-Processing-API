# Image-Processing-API
In this project, the system processes images based on the URL provided.
If the requested image exists in the 'assets/full' folder, it will be generated and returned with the specified queries. 
If the image has already been generated with the provided dimensions, the system will return the cached image from the 'assets/thumb' folder. 
Otherwise, the system will throw an error if the image is not found in the assets folder.


### Scripts
- Install dependencies: ```npm install``` 
- Start the project: ```npm run start```
- Create dist: ```npm run build```
- run test: ```npm run test```
- Format with prettier: ```npm run prettier```
- Run Eslint: ```npm run lint``` 


### Endpoints
- http://localhost:3000/api is the main pagee of the project
- http://localhost:3000/api/images?filename=fjord&width=800&height=800 to process the image

### Other functionality 
- middleware added to log all the requests.
- middleware used to check and validate the request query.
- used validate-file library to validate filename in the query.
