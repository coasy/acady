import { 
    ApiGatewayV2Client,
    CreateApiCommand,
    CreateRouteCommand,
    CreateIntegrationCommand,
    CreateStageCommand,
    UpdateApiCommand,
    UpdateRouteCommand,
    CreateApiCommandInput,
    CreateApiCommandOutput,
    CreateRouteCommandInput,
    CreateRouteCommandOutput,
    CreateIntegrationCommandInput,
    CreateIntegrationCommandOutput,
    CreateStageCommandInput,
    CreateStageCommandOutput,
    UpdateApiCommandInput,
    UpdateApiCommandOutput,
    UpdateRouteCommandInput,
    UpdateRouteCommandOutput
} from "@aws-sdk/client-apigatewayv2";
import { AwsCredentialIdentity } from "@aws-sdk/types";

export class AwsGatewayConnector {
    public static async createApi(credentials: AwsCredentialIdentity, region: string, params: CreateApiCommandInput): Promise<CreateApiCommandOutput> {
        const client = AwsGatewayConnector.getClient(credentials, region);
        return client.send(new CreateApiCommand(params));
    }

    public static async createRoute(credentials: AwsCredentialIdentity, region: string, params: CreateRouteCommandInput): Promise<CreateRouteCommandOutput> {
        const client = AwsGatewayConnector.getClient(credentials, region);
        return client.send(new CreateRouteCommand(params));
    }

    public static async createIntegration(credentials: AwsCredentialIdentity, region: string, params: CreateIntegrationCommandInput): Promise<CreateIntegrationCommandOutput> {
        const client = AwsGatewayConnector.getClient(credentials, region);
        return client.send(new CreateIntegrationCommand(params));
    }

    public static async createStage(credentials: AwsCredentialIdentity, region: string, params: CreateStageCommandInput): Promise<CreateStageCommandOutput> {
        const client = AwsGatewayConnector.getClient(credentials, region);
        return client.send(new CreateStageCommand(params));
    }

    public static async updateApi(credentials: AwsCredentialIdentity, region: string, params: UpdateApiCommandInput): Promise<UpdateApiCommandOutput> {
        const client = AwsGatewayConnector.getClient(credentials, region);
        return client.send(new UpdateApiCommand(params));
    }

    public static async updateRoute(credentials: AwsCredentialIdentity, region: string, params: UpdateRouteCommandInput): Promise<UpdateRouteCommandOutput> {
        const client = AwsGatewayConnector.getClient(credentials, region);
        return client.send(new UpdateRouteCommand(params));
    }

    private static getClient(credentials: AwsCredentialIdentity, region: string): ApiGatewayV2Client {
        return new ApiGatewayV2Client({
            region,
            credentials
        });
    }
}
