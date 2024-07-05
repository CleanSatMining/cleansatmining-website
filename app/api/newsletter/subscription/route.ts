import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, context: { params: any }) {
  const res = await request.json();
  console.log("json", res);
  //return new Response(JSON.stringify({ message: "Subscription successful" }));
  const { email } = res;

  // Vérifiez si l'email est fourni dans la requête
  if (!email) {
    return new NextResponse(null, { status: 400 });
  }

  const data = {
    f: "19",
    m: "0",
    act: "sub",
    v: "2",
    jsonp: "2",
    email: email,
  };

  // Envoi de l'email à votre service de souscription
  try {
    const response = await fetch(
      "https://richarddetente.activehosted.com/proc.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data.toString(),
      }
    );

    if (!response.ok) {
      console.log("error", response);
      return new NextResponse(null, { status: 500 });
    } else {
      console.log("ok", response);
      // Traitez la réponse si nécessaire
      //const responseData = await response.json();
      //console.log(responseData);
      return new NextResponse(null, { status: 200 });
    }
  } catch (error) {
    console.log("error", error);
    return new NextResponse(null, { status: 500 });
  }
}
