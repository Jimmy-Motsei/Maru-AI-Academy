import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    const method = req.method;
    const { id } = req.params;

    try {
        switch (method) {
            case 'GET':
                if (id) {
                    // Get specific module
                    context.res = {
                        status: 200,
                        body: {
                            id,
                            title: "Sample Module",
                            description: "This is a sample module",
                            content: "Module content here..."
                        }
                    };
                } else {
                    // Get all modules
                    context.res = {
                        status: 200,
                        body: {
                            modules: [
                                { id: 1, title: "AI Made Simple", stream: "beginner" },
                                { id: 2, title: "Prompts that work", stream: "beginner" },
                                { id: 3, title: "No-code automations", stream: "intermediate" },
                                { id: 4, title: "Measurement & governance", stream: "intermediate" }
                            ]
                        }
                    };
                }
                break;
            
            case 'POST':
                // Create new module
                context.res = {
                    status: 201,
                    body: {
                        message: "Module created successfully",
                        id: Date.now()
                    }
                };
                break;
            
            case 'PUT':
                // Update module
                context.res = {
                    status: 200,
                    body: {
                        message: "Module updated successfully",
                        id
                    }
                };
                break;
            
            case 'DELETE':
                // Delete module
                context.res = {
                    status: 200,
                    body: {
                        message: "Module deleted successfully",
                        id
                    }
                };
                break;
            
            default:
                context.res = {
                    status: 405,
                    body: { error: "Method not allowed" }
                };
        }
    } catch (error) {
        context.log.error('Error processing request:', error);
        context.res = {
            status: 500,
            body: { error: "Internal server error" }
        };
    }
};

export default httpTrigger;
