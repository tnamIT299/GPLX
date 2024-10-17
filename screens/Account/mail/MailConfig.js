// Ví dụ sử dụng axios với SendGrid
import axios from 'axios';

// Hàm gửi email với các tham số đầu vào
export const sendEmail = async (toEmail, subject, message) => {
  try {
    const response = await axios.post('https://api.sendgrid.com/v3/mail/send', {
      personalizations: [{
        to: [{ email: toEmail }], // Địa chỉ email nhận
        subject: subject, // Tiêu đề email
      }],
      from: { email: 'namthanhvnx911@gmail.com' }, // Địa chỉ email gửi
      content: [{
        type: 'text/plain',
        value: message, // Nội dung email
      }],
    }, {
      headers: {
        Authorization: `Bearer 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`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Email sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
