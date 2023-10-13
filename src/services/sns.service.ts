import AWS, { SNS } from 'aws-sdk';

type PublishMessageType = {
    subject: string, 
    message: string
}

export class SNSService {
    protected sns: SNS;
    public snsTopic: string;
    
    constructor() {
        this.sns = new AWS.SNS({ region: process.env.AWS_REGION_VALUE });
        this.snsTopic = '';
    }

    publish({
        subject, 
        message
    }: PublishMessageType) {
        const params = {
            Message: message,
            Subject: subject,
            TopicArn: this.snsTopic
        };
        try {
            return this.sns.publish(params).promise();
        } catch(err) {
            console.log("🚀 ~ file: sns.service.ts:29 ~ SNSService ~ ERR:", err);

        }
    }

}