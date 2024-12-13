// import AWS from "aws-sdk";
import SES from "aws-sdk/clients/sesv2";

const secKey = "1+kJKlfZAXrWZCOGVqS3G4ULl05BJDr83gK071FL";
const accKey = "AKIAWEFZ7EBX3EJXQHWK";

// AWS.config.update({
//   region: "us-east-1",
//   accessKeyId: accKey,
//   secretAccessKey: secKey,
// });

// const ses = new AWS.SES();

export const testEmail = () => {
  const ses = new SES({
    region: "us-east-1",
    // here
    accessKeyId: accKey,
    secretAccessKey: secKey,
  });
  try {
    const input = {
      TemplateName: "User-Notification", // required
      TemplateContent: {
        Subject: "AtlasHover",
        Text: "Hello From AtlasHover",
        Html: `
        <div>
  <div>
    <h1>Hello, {{firstName}}</h1>
  </div>
  <div>
    <p>Thank you for contacting AtlasHover</p>
  </div>
  <div>
    <p>We have received your message and will reach out to you shortly</p>
  </div>
  <br />
  <br />
  <div>
    <p>Warm Regards</p>
    <p>The AtlasHover Team</p>
  </div>
</div>

`,
      },
    };
    ses.createEmailTemplate(input, (err, data) => {
      console.log({ err, data });
    });
  } catch (error) {
    console.log(error);
    console.log("error......");
  }
};

export const sendEmail = async ({
  firstName,
  lastName,
  email,
  phoneNumber,
  message,
}: any) => {
  // hey
  const ses = new SES({
    region: "us-east-1",
    // here
    accessKeyId: accKey,
    secretAccessKey: secKey,
  });
  // blink

  try {
    const templateName = "Admin-Notification-3";
    const emailDestination = "info@atlashover.us";
    const templateData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      message,
    };

    const params = {
      FromEmailAddress: "AtlasHover <info@atlashover.us>",
      Destination: {
        ToAddresses: [emailDestination],
      },
      Content: {
        Template: {
          TemplateName: templateName,
          TemplateData: JSON.stringify(templateData),
        },
      },
      // ConfigurationSetName: "ConfigSet",
    };

    const data = await ses.sendEmail(params).promise();

    console.log(data);
    console.log("data.....");
  } catch (error) {
    console.log(error);
    console.log("error......");
  }
};

export const sendUserEmail = async ({
  firstName,
  email,
}: any) => {
  // hey
  const ses = new SES({
    region: "us-east-1",
    // here
    accessKeyId: accKey,
    secretAccessKey: secKey,
  });
  // blink

  try {
    const templateName = "User-Notification";
    const emailDestination = email;
    const templateData = {
      firstName,
    };

    const params = {
      FromEmailAddress: "AtlasHover <info@atlashover.us>",
      Destination: {
        ToAddresses: [emailDestination],
      },
      Content: {
        Template: {
          TemplateName: templateName,
          TemplateData: JSON.stringify(templateData),
        },
      },
    };

    const data = await ses.sendEmail(params).promise();

    console.log(data);
    console.log("data.....sendUserEmail");
  } catch (error) {
    console.log(error);
    console.log("error......sendUserEmail");
  }
};
