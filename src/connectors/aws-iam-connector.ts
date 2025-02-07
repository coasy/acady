import { 
    IAMClient, 
    GetUserCommand,
    CreateRoleCommand, 
    CreatePolicyCommand,
    AttachRolePolicyCommand,
    GetUserCommandOutput,
    CreateRoleCommandOutput,
    CreatePolicyCommandOutput,
    AttachRolePolicyCommandOutput
} from "@aws-sdk/client-iam";
import { AwsCredentialIdentity } from "@aws-sdk/types";

export class AwsIamConnector {
    public static async getCurrentUser(credentials: AwsCredentialIdentity): Promise<GetUserCommandOutput['User']> {
        const client = AwsIamConnector.getClient(credentials);
        const response = await client.send(new GetUserCommand({}));
        return response.User;
    }

    public static async createRole(credentials: AwsCredentialIdentity, roleName: string, assumeRolePolicy: any): Promise<CreateRoleCommandOutput['Role']> {
        const client = AwsIamConnector.getClient(credentials);
        const response = await client.send(new CreateRoleCommand({
            RoleName: roleName,
            AssumeRolePolicyDocument: JSON.stringify(assumeRolePolicy)
        }));
        return response.Role;
    }

    public static async createPolicy(credentials: AwsCredentialIdentity, policyName: string, policy: any): Promise<CreatePolicyCommandOutput['Policy']> {
        const client = AwsIamConnector.getClient(credentials);
        const response = await client.send(new CreatePolicyCommand({
            PolicyName: policyName,
            PolicyDocument: JSON.stringify(policy)
        }));
        return response.Policy;
    }

    public static async attachRolePolicy(credentials: AwsCredentialIdentity, roleName: string, policyArn: string): Promise<AttachRolePolicyCommandOutput> {
        const client = AwsIamConnector.getClient(credentials);
        return client.send(new AttachRolePolicyCommand({
            RoleName: roleName,
            PolicyArn: policyArn
        }));
    }

    private static getClient(credentials: AwsCredentialIdentity): IAMClient {
        return new IAMClient({
            credentials
        });
    }
}
