import AWS from "aws-sdk";

const secKey = "1+kJKlfZAXrWZCOGVqS3G4ULl05BJDr83gK071FL";
const accKey = "AKIAWEFZ7EBX3EJXQHWK";

AWS.config.update({
  region: "us-east-1",
  accessKeyId: accKey,
  secretAccessKey: secKey,
});

const ses = new AWS.SES();

export const testEmail = () => {
  try {
    const input = {
      Template: {
        TemplateName: "Hello-test", // required
        SubjectPart: "New User Inquiry",
        TextPart: "My Test Text",
        HtmlPart:
          '<p>Hello Word</p>',
      },
    };
    ses.createTemplate(input, (err, data) => {
      console.log({ err, data });
    });
  } catch (error) {
    console.log(error);
    console.log("error......");
  }
};

export const sendEmail = async () => {
  try {
    const templateName = "Hello-test";
      const emailDestination = "info@atlashover.us";
      const emailSource ="roluwafunbi@gmail.com"
    const templateData = {
      firstName: "bench",
      lastName: "mark",
      email: emailDestination,
      phoneNumber: "234567890",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolores assumenda, placeat et impedit debitis quas pariatur minus. Et, ea optio? Consequuntur veniam reprehenderit debitis itaque explicabo ab eius mollitia aut totam, incidunt laborum sed. Numquam dolorem facere repellendus velit itaque laborum fugit quos recusandae. Pariatur reiciendis hic accusantium quis.",
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
