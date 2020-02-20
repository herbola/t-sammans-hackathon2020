
import {Request, Response, Application} from 'express';

export class TemplateRoutes {
    public routes(app: Application): void {
        // Template
        app.route('/template') 
        // GET endpoint 
        .get((request: Request, response: Response) => {
        // Get all templates            
            response.status(200).send({
                message: 'GET request successfull!'
            });
        })     
        // POST endpoint
        .post((request: Request, response: Response) => {   
        // Create new template         
            response.status(200).send({
                message: 'POST request successfull!'
            });
        })
        .put((request: Request, response: Response) => {
        // Update a template           
            response.status(200).send({
                message: 'PUT request successfull!'
            });
        })
        .delete((request: Request, response: Response) => {       
        // Delete a template     
            response.status(200).send({
                message: 'DELETE request successfull!'
            });
        })
    }
}