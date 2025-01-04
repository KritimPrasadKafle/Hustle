import express, { Request, Response } from "express";
import nodemailer from "nodemailer";

require("dotenv").config();
import bodyParser from "body-parser";

const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/deliver", async (req: Request, res: Response) => {
  const { recipient, subject, text, html } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: recipient,
      subject: subject,
      text: text,
      html: html,
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).send("Message sent");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});
app.listen(port, () => {
  console.log(`app running in ${port}`);
});
