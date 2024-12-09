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

// export const testEmail = () => {
//   try {
//     const input = {
//       Template: {
//         TemplateName: "Admin-Notification-3", // required
//         SubjectPart: "New User Inquiry",
//         TextPart: "My Test Text",
//         HtmlPart: `<div>
//   <div>
//     <h1>Hello, Admin</h1>
//   </div>
//   <div>
//     <p>You have a new message from:</p>
//   </div>
//   <div>
//     <div>
//         <p>Name: {{firstName}} {{lastName}}</p>
//     </div>
//     <div>
//         <h3>Contact Information</h3>
//         <p>Phone Number: {{phoneNumber}}</p>
//         <p>Email: {{email}}</p>
//     </div>
//     <div>
//         <h3>Inquiry Message</h3>
//         <p>{{message}}</p>
//     </div>
//   </div>
// </div>`,
//       },
//     };
//     ses.createTemplate(input, (err, data) => {
//       console.log({ err, data });
//     });
//   } catch (error) {
//     console.log(error);
//     console.log("error......");
//   }
// };

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
      Source: emailDestination,
      Template: templateName,
      Destination: {
        ToAddresses: [emailDestination],
      },
      TemplateData: JSON.stringify(templateData),
    };

    const data = await ses.sendTemplatedEmail(params).promise();

    console.log(data);
    console.log("data.....");
  } catch (error) {
    console.log(error);
    console.log("error......");
  }
};
