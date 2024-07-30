import { transporter } from "../EmailConfig.js";

export const sendEmail = (req, res) => {
  const data = req.body;
  // create mail options
  const mailOptions = {
    from: process.env.OAUTH_EMAIL,
    to: "abinandandev@gmail.com",
    subject: "Get In Touch - Portfolio",
    html: `<div style="display:grid;background:#e3e3f0;padding:1rem;place-items:center;border-radius:1rem;">
    <div><span style="font-size:1.25rem;">Name: </span>
    <p style="color:#3b5741;"> ${data.name}</p></div>
    <div><span style="font-size:1.25rem;">Email: </span>
    <p style="color:#3b5741;"> ${data.email}</p></div>
    <div><span style="font-size:1.25rem;">Message: </span>
          <p style="color:#3b5741;"> ${data.message}</p></div>
        </div>`,
  };

  // send mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    res.status(201).json({ msg: "success", msgId: info.messageId });
  });
};
