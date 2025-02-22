import { getSuggestions } from '../../utils/gemini';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { section, content } = req.body;
    const suggestions = await getSuggestions(section, content);
    res.status(200).json({ suggestions });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ message: 'Error generating suggestions' });
  }
} 