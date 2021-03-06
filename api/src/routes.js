import { Router } from "express";
import { CompressionTypes } from 'kafkajs'

const routes = Router()

routes.post("/certifications", async (req, res) => {
  const message = {
    user: { id: 1, name: "Zumba laca" },
    course: "Nafta",
    grade: 42,
  };

  await req.producer.send({
    topic: 'issue-certificate',
    compression: CompressionTypes.GZIP,
    messages: [
      { value: JSON.stringify(message) }
    ],
  });

  return res.json({ ok: true });
});

export { routes };