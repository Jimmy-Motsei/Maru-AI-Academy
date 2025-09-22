import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('Users API function processed a request.');

    const method = req.method;
    const { id } = req.params;

    try {
        switch (method) {
            case 'GET':
                if (id) {
                    // Get specific user
                    context.res = {
                        status: 200,
                        body: {
                            id,
                            name: "Sample User",
                            email: "user@example.com",
                            progress: {
                                completedModules: 2,
                                totalModules: 8,
                                currentStream: "beginner"
                            }
                        }
                    };
                } else {
                    // Get all users (admin only)
                    context.res = {
                        status: 200,
                        body: {
                            users: [
                                { id: 1, name: "User 1", email: "user1@example.com" },
                                { id: 2, name: "User 2", email: "user2@example.com" }
                            ]
                        }
                    };
                }
                break;
            
            case 'POST':
                // Create new user
                const { name, email } = req.body;
                context.res = {
                    status: 201,
                    body: {
                        message: "User created successfully",
                        id: Date.now(),
                        name,
                        email
                    }
                };
                break;
            
            case 'PUT':
                // Update user
                context.res = {
                    status: 200,
                    body: {
                        message: "User updated successfully",
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
