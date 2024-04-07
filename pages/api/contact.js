export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(400).json({ message: "Method not allowed" });
  }

  try {
    const formData = request.body;
    // console.log(formData);
    response.status(201).json({ status: "Message successfully send!" });
  } catch (error) {
    response.status(400).json({ error: error.message });
    console.log(error);
  }
}
