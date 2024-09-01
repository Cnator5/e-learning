import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, projectType, chapters, deadline, additionalInfo } = req.body;

    // Create a nodemailer transporter
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: "b9141015@gmail.com", // Your Gmail address
        pass: "Oga1998@95" // Your Gmail app password
      },
    });

    // Compose the email
    let info = await transporter.sendMail({
      from: '"Order Notification" <your-email@gmail.com>',
      to: "b9141015@gmail.com",
      subject: "New Project Order",
      text: `
        New order received:
        
        Name: ${name}
        Email: ${email}
        Project Type: ${projectType}
        Chapters: ${chapters.join(', ')}
        Deadline: ${deadline}
        Additional Info: ${additionalInfo}
      `,
      html: `
        <h2>New order received:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Chapters:</strong> ${chapters.join(', ')}</p>
        <p><strong>Deadline:</strong> ${deadline}</p>
        <p><strong>Additional Info:</strong> ${additionalInfo}</p>
      `,
    });

    res.status(200).json({ message: 'Order submitted successfully' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
