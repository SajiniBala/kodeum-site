import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phoneNumber, message, turnsTileToken } = req.body;

    try {
      const apiResponse = await axios.post(
        'https://kodeum.onrender.com/api/contact/sendForm',
        {
          name,
          email,
          phoneNumber,
          message,
          turnsTileToken,
        }
      );

      res.status(apiResponse.status).json(apiResponse.data);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
