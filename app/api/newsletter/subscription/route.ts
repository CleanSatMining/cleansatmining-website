import { type NextRequest } from "next/server";

export async function POST(request: NextRequest, context: { params: any }) {
  const res = await request.json();
  console.log(res);
  return new Response(JSON.stringify({ message: "Subscription successful" }));
  //const { email } = request.body;

  // Vérifiez si l'email est fourni dans la requête
  /*  if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Envoi de l'email à votre service de souscription
    const subscribeResult = await subscribeToNewsletter(email);

    // Gestion de la réponse du service de souscription
    if (subscribeResult.success) {
      res.status(200).json({ message: 'Subscription successful' });
    } else {
      res.status(500).json({ error: 'Failed to subscribe' });
    } */
}
