import { 
    LambdaClient,
    ListFunctionsCommand,
    CreateFunctionCommand,
    AddPermissionCommand,
    CreateAliasCommand,
    UpdateAliasCommand,
    UpdateFunctionCodeCommand,
    UpdateFunctionConfigurationCommand,
    ListFunctionsCommandOutput,
    FunctionConfiguration,
    AddPermissionCommandOutput,
    AliasConfiguration,
    CreateFunctionRequest,
    AddPermissionRequest,
    UpdateFunctionCodeRequest,
    UpdateFunctionConfigurationRequest
} from "@aws-sdk/client-lambda";
import { AwsCredentialIdentity } from "@aws-sdk/types";

class AwsLambdaConnector {
    public static async listFunctions(credentials: AwsCredentialIdentity, region: string, marker?: string): Promise<ListFunctionsCommandOutput> {
        const client = AwsLambdaConnector.getClient(credentials, region);
        return client.send(new ListFunctionsCommand({ Marker: marker }));
    }

    public static async createFunction(credentials: AwsCredentialIdentity, region: string, params: CreateFunctionRequest): Promise<FunctionConfiguration> {
        const client = AwsLambdaConnector.getClient(credentials, region);
        const response = await client.send(new CreateFunctionCommand(params));
        return response;
    }

    public static async addPermission(credentials: AwsCredentialIdentity, region: string, params: AddPermissionRequest): Promise<AddPermissionCommandOutput> {
        const client = AwsLambdaConnector.getClient(credentials, region);
        return client.send(new AddPermissionCommand(params));
    }

    public static async createAlias(credentials: AwsCredentialIdentity, region: string, functionName: string, functionVersion: string, aliasName: string): Promise<AliasConfiguration> {
        const client = AwsLambdaConnector.getClient(credentials, region);
        const response = await client.send(new CreateAliasCommand({
            FunctionName: functionName,
            FunctionVersion: functionVersion,
            Name: aliasName
        }));
        return response;
    }

    public static async updateAlias(credentials: AwsCredentialIdentity, region: string, functionName: string, functionVersion: string, aliasName: string): Promise<AliasConfiguration> {
        const client = AwsLambdaConnector.getClient(credentials, region);
        const response = await client.send(new UpdateAliasCommand({
            FunctionName: functionName,
            FunctionVersion: functionVersion,
            Name: aliasName
        }));
        return response;
    }

    public static async updateFunctionCode(credentials: AwsCredentialIdentity, region: string, params: UpdateFunctionCodeRequest): Promise<FunctionConfiguration> {
        const client = AwsLambdaConnector.getClient(credentials, region);
        const response = await client.send(new UpdateFunctionCodeCommand(params));
        return response;
    }

    public static async updateFunctionConfig(credentials: AwsCredentialIdentity, region: string, params: UpdateFunctionConfigurationRequest): Promise<FunctionConfiguration> {
        const client = AwsLambdaConnector.getClient(credentials, region);
        const response = await client.send(new UpdateFunctionConfigurationCommand(params));
        return response;
    }

    private static getClient(credentials: AwsCredentialIdentity, region: string): LambdaClient {
        return new LambdaClient({
            region,
            credentials
        });
    }
}

export { AwsLambdaConnector };
