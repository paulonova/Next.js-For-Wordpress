// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const API_URL = process.env.WORDPRESS_LOCAL_API_URL;

export default function handler(req, res) {
  res.status(200).json({ name: "Paulo Nova" });
}
