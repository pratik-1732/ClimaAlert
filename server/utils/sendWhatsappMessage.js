import axios from "axios";
import { application, json } from "express";
import dotenv from "dotenv";

dotenv.config();

const sendWhatsappMessage = async ({ customerName, phoneNumber }) => {
  const fullPhoneNumber = `91${phoneNumber}`;

  const imageUrl = `${process.env.SERVER_BASE_URL}/images/weather-cover.jpg`;

  const token = process.env.WHATSAPP_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_ID;

  const url = `https://graph.facebook.com/v17.0/${phoneId}/messages`;

  const payload = {
    messaging_product: "whatsapp",
    to: fullPhoneNumber,
    type: "template",
    template: {
      name: "climaalert_welcome",
      language: { code: "en" },
      components: [
        {
          type: "header",
          parameters: [
            {
              type: "image",
              image: {
                link: "https://res.cloudinary.com/dho8rdpqg/image/upload/v1750876599/weather-cover_ggxxf9.jpg",
              },
            },
          ],
        },
        {
          type: "body",
          parameters: [
            {
              type: "text",
              //   name: "customer_name",
              text: "Pratik Patil",
            },
          ],
        },
        {
          type: "button",
          sub_type: "url",
          index: "0",
          parameters: [
            {
              type: "text",
              text: "https://google.com",
            },
          ],
        },
      ],
    },
  };
  console.log("Sending to WhatsApp:", JSON.stringify(payload, null, 2));

  try {
    const response = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to send whatsapp message: ", error.response?.data);
  }
};

export default sendWhatsappMessage;
